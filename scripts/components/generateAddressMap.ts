// @ts-nocheck

import fs from 'node:fs';
import oneinch from './1inch.tokenlist.json';
import coingecko from './coingecko-list.json';
import uniswap from './uniswap.tokenlist.json';
import coingeckoIdMap from './coingecko-id-map.json';
import get from 'lodash/get';
import { chains } from '@/config/networks';

const combinedlist = oneinch.tokens.concat(coingecko.tokens, uniswap.tokens);

const addressMap = combinedlist.reduce((acc, token) => {
  const coingeckoId =
    get(coingeckoIdMap, `${token.chainId}-${token.address.toLowerCase()}`) ??
    get(
      coingeckoIdMap,
      get(token, 'extensions.bridgeInfo.1.tokenAddress', '').toLowerCase(),
    ) ??
    get(coingeckoIdMap, token.symbol.toLowerCase()) ??
    null;
  return {
    ...acc,
    [`${token.chainId}-${token.address.toLowerCase()}`]: {
      ...token,
      extensions: {
        status: null,
        coingeckoId,
        ...token.extensions,

        ...(get(token, 'extensions.bridgeInfo')
          ? {
              bridgeInfo: Object.fromEntries(
                Object.entries(token.extensions.bridgeInfo).filter(([key]) =>
                  chains.map(({ id }) => id).includes(Number(key)),
                ),
              ),
            }
          : undefined),
      },
    },
  };
}, {});

fs.writeFileSync('./address-map.json', JSON.stringify(addressMap, null, 2));
