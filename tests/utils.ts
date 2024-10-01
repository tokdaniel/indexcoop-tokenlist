import { isAddressEqual } from '../src';
import fc from 'fast-check';
import { checksumAddress, type Address } from 'viem';
import tokenlist from '../src/tokenlist.json';

export function hexa(): fc.Arbitrary<string> {
  return fc.integer({ min: 0, max: 15 }).map((n) => '0123456789abcdef'[n]);
}

export function hexaString(
  constraints: fc.StringConstraints = {},
): fc.Arbitrary<Address> {
  return fc.string({ ...constraints, unit: hexa() }) as fc.Arbitrary<Address>;
}

export const ethAddressArbitrary = (): fc.Arbitrary<`0x${string}`> =>
  hexaString({ minLength: 40, maxLength: 40 }).map(
    (address) => `0x${address.toLowerCase()}` as const,
  );

export const checksummedEthAddressArbitrary = (): fc.Arbitrary<string> =>
  ethAddressArbitrary().map(checksumAddress);

export const validTokenArbitrary = fc.record({
  chainId: fc.integer({ min: 1 }),
  address: ethAddressArbitrary(),
  name: fc.string({ minLength: 1 }),
  symbol: fc.string({ minLength: 1, maxLength: 10 }),
  decimals: fc.integer({ min: 1, max: 18 }),
});

export const invalidTokenArbitrary = fc.oneof(
  fc.record({
    chainId: fc.oneof(fc.constant(null), fc.string()),
    address: fc.oneof(
      fc.constant(null),
      fc.string({ minLength: 1, maxLength: 39 }),
      fc.string({ minLength: 41 }),
    ), // Invalid address
    name: fc.oneof(fc.constant(null), fc.string({ minLength: 0 })),
    symbol: fc.oneof(
      fc.constant(null),
      fc.string({ minLength: 0, maxLength: 0 }),
    ), // Invalid symbol
    decimals: fc.oneof(fc.constant(null), fc.string()),
  }),
  fc.constant(null),
  fc.constant(undefined),
  fc.anything(),
);

export const differentTokenArbitrary = fc
  .tuple(validTokenArbitrary, validTokenArbitrary)
  .filter(([tokenA, tokenB]) => {
    return (
      tokenA.chainId !== tokenB.chainId ||
      !isAddressEqual(tokenA.address, tokenB.address)
    );
  });

export const listedTokenArbitrary = fc.constantFrom(...tokenlist.tokens);

export const unlistedTokenArbitrary = fc
  .record({
    chainId: fc.integer({ min: 1 }),
    address: ethAddressArbitrary(),
    name: fc.string({ minLength: 1 }),
    symbol: fc.string({ minLength: 1, maxLength: 10 }),
    decimals: fc.integer({ min: 0, max: 18 }),
  })
  .filter(
    (token) =>
      !tokenlist.tokens.some(
        (listedToken) =>
          listedToken.chainId === token.chainId &&
          listedToken.address.toLowerCase() === token.address.toLowerCase(),
      ),
  );

export const indexTokenArbitrary = fc.constantFrom(
  ...tokenlist.tokens.filter((token) => token.tags.some((t) => t === 'index')),
);

export const nonIndexTokenArbitrary = fc.constantFrom(
  ...tokenlist.tokens.filter((token) => !token.tags.some((t) => t === 'index')),
);

export const leverageTokenArbitrary = fc.constantFrom(
  ...tokenlist.tokens.filter(
    (token) =>
      token.tags.some((t) => t === 'index') && 'leverage' in token.extensions,
  ),
);

export const nonLeverageIndexTokenArbitrary = fc.constantFrom(
  ...tokenlist.tokens.filter(
    (token) =>
      token.tags.some((t) => t === 'index') &&
      !('leverage' in token.extensions),
  ),
);

export const sectorTokenArbitrary = fc.constantFrom(
  ...tokenlist.tokens.filter(
    (token) =>
      token.tags.some((t) => t === 'index') && 'sector' in token.extensions,
  ),
);

export const nonSectorIndexTokenArbitrary = fc.constantFrom(
  ...tokenlist.tokens.filter(
    (token) =>
      token.tags.some((t) => t === 'index') && !('sector' in token.extensions),
  ),
);

export const yieldTokenArbitrary = fc.constantFrom(
  ...tokenlist.tokens.filter(
    (token) =>
      token.tags.some((t) => t === 'index') && 'yield' in token.extensions,
  ),
);

export const nonYieldIndexTokenArbitrary = fc.constantFrom(
  ...tokenlist.tokens.filter(
    (token) =>
      token.tags.some((t) => t === 'index') && !('yield' in token.extensions),
  ),
);

export const existingChainIdArbitrary = fc.constantFrom(
  ...tokenlist.tokens.map((token) => token.chainId),
);

export const invalidChainIdArbitrary = fc.integer({ min: 1000000 });

export const tagArbitrary = fc.array(
  fc.constantFrom(...tokenlist.tokens.flatMap((token) => token.tags || [])),
);
