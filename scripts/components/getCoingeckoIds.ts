// @ts-nocheck
import fs from 'node:fs';
import coingeckIds from './coingecko-ids.json';

const platformToChain = {
  ethereum: 1,
  'arbitrum-one': 42161,
  base: 8453,
};

const ids = coingeckIds.reduce(
  (acc, { id, symbol, platforms }) => ({
    ...acc,
    [symbol]: id,
    ...Object.entries(platforms).reduce(
      (acc, [platform, address]) => ({
        ...acc,
        ...(platformToChain[platform]
          ? { [`${platformToChain[platform]}-${address?.toLowerCase()}`]: id }
          : {}),
      }),
      {},
    ),
  }),
  {},
);

fs.writeFileSync('./coingecko-id-map.json', JSON.stringify(ids, null, 2));
