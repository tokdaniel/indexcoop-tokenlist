// @ts-nocheck

import fs from 'node:fs';
import { getChainProductTokenList } from '@/src';
import { chains, rpcUrls } from '@/config/networks';
import { createPublicClient, http } from 'viem';
import SetTokenAbi from './SetTokenAbi.json';

export const fetchComponents = async () =>
  Promise.all(
    chains.map((chain) => {
      const client = createPublicClient({
        chain,
        transport: http(rpcUrls[chain.id]),
      });

      const chainProductTokenList = getChainProductTokenList(chain.id);

      return Promise.all(
        chainProductTokenList.map(async (productToken) => {
          let components: any;

          try {
            components = await client.readContract({
              address: productToken.address,
              abi: SetTokenAbi,
              functionName: 'getComponents',
            });
          } catch {}

          return {
            address: productToken.address,
            chainId: chain.id,
            components,
          };
        }),
      );
    }),
  );

const result = (await fetchComponents())
  .flat()
  .filter(({ components }) => Boolean(components));

const out = result.flatMap(({ components, chainId }) =>
  components.map((component) => `${chainId}-${component.toLowerCase()}`),
);

fs.writeFileSync(
  './scripts/components/components-list.json',
  JSON.stringify(out, null, 2),
);
