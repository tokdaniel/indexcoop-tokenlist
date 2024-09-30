import type { TokenInfo } from '@uniswap/token-lists';
import type {
  ListedToken,
  TokensByChain,
  SectorToken,
  LeverageToken,
  YieldToken,
  ChainId,
  U2I,
  TokenMap,
  TokenMapByChain,
  IndexToken,
  SymbolsByChain,
} from './types';
import tokenlist from './tokenlist.json';

/**
 * Check if the given parameter is a {@link TokenInfo}
 * @param token - an unknown value, to be tested if it adheres to **Uniswap's** {@link TokenInfo} interface
 * @returns boolean
 */
export const isToken = (token: unknown): token is TokenInfo => {
  if (typeof token !== 'object' || !token) return false;
  if (!('chainId' in token)) return false;
  if (!('address' in token)) return false;
  if (!('name' in token)) return false;
  if (!('symbol' in token)) return false;
  if (!('decimals' in token)) return false;

  return true;
};

/**
 * Check if the given parameter is a {@link ListedToken}
 * @param token - an unknown value, to be tested if it adheres to the {@link ListedToken} interface
 * @returns boolean
 * @note {@link ListedToken} is a subset of {@link TokenInfo}
 */
export const isListedToken = (token: unknown): token is ListedToken =>
  isToken(token) &&
  Boolean(tokenlist.tokens.find((t) => t.address === token.address));

/**
 * Check if the given parameter is an {@link IndexToken}
 * @param token - an unknown value, to be tested if it adheres to the {@link IndexToken} interface
 * @returns boolean
 * @note {@link IndexToken} is a union of {@link IndexCoopToken}, {@link LeverageToken}, {@link SectorToken}, and {@link YieldToken}
 * @note {@link IndexToken} is a subset {@link ListedToken}
 */
export const isIndexToken = (token: unknown): token is IndexToken =>
  isListedToken(token) && Boolean(token.tags.find((t) => t === 'index'));

/**
 * Check if the given parameter is an {@link LeverageToken}
 * @param token - an unknown value, to be tested if it adheres to the {@link LeverageToken} interface
 * @returns boolean
 * @note {@link LeverageToken} is a subset {@link IndexToken}
 */
export const isLeverageToken = (token: unknown): token is LeverageToken =>
  isIndexToken(token) && 'leverage' in token.extensions;

/**
 * Check if the given parameter is an {@link SectorToken}
 * @param token - an unknown value, to be tested if it adheres to the {@link SectorToken} interface
 * @returns boolean
 * @note {@link SectorToken} is a subset {@link IndexToken}
 */
export const isSectorToken = (token: unknown): token is SectorToken =>
  isIndexToken(token) && 'sector' in token.extensions;

/**
 * Check if the given parameter is an {@link YieldToken}
 * @param token - an unknown value, to be tested if it adheres to the {@link YieldToken} interface
 * @returns boolean
 * @note {@link YieldToken} is a subset {@link IndexToken}
 */
export const isYieldToken = (token: unknown): token is YieldToken =>
  isIndexToken(token) && 'yield' in token.extensions;

/**
 * {@link tokenMap} is a nested map, where the key is the {@link ChainId},
 * and the secondary key is {@link SymbolsByChain} of the token
 * Symbols are not unique amongst themselves, but they are unique within a chain
 * @example tokenMap[1].USDC // returns USDC token on Ethereum
 * tokenMap[56].USDC // TypeError, as Binance Smart Chain is not supported
 */
export const tokenMap = tokenlist.tokens.reduce((acc, token) => {
  const { chainId, symbol } = token;

  if (!acc[chainId]) {
    acc[chainId] = {} as U2I<{ [C in ChainId]: TokenMap<C> }[ChainId]>;
  }

  //@ts-ignore - Symbol type is too broad for this, thus typescript cannot infer, since chainId and symbol are not linked
  acc[chainId][symbol] = token;

  return acc;
}, {} as TokenMapByChain);

/**
 * Get all tokens of a specific chain, by giving a recognized chainId
 * @param chainId: {@link ChainId}
 * @returns:{@link ListedToken}[]
 * @example getChainTokenList(1) // returns all tokens of Ethereum
 */
export function getChainTokenList<C extends ChainId>(
  chainId: C,
): TokensByChain<ListedToken, C>[];

/**
 * Get all tokens of an unknown chainId
 * @param chainId:number
 * @returns:{@link ListedToken}[], could be an empty array
 * @example getChainTokenList(10) // Optimism is not supported, returns []
 */
export function getChainTokenList(chainId: number): ListedToken[];
export function getChainTokenList(chainId: number): ListedToken[] {
  if (chainId in tokenMap) {
    return tokenlist.tokens.filter(
      (t) => t.chainId === chainId,
    ) as ListedToken[];
  }
  return [];
}

/**
 * Get exact token by giving a recognized chainId and symbol
 * @param chainId:{@link ChainId}
 * @param symbol:{@link SymbolsByChain}
 * @returns:{@link ListedToken}
 * @example getTokenByChainAndSymbol(1, 'USDC') // returns USDC token on Ethereum
 * getTokenByChainAndSymbol(10, 'USDC') // TypeError as Optimism is not supported
 */
export function getTokenByChainAndSymbol<
  C extends ChainId,
  S extends SymbolsByChain<C>,
>(chainId: C, symbol: S): Extract<ListedToken, { chainId: C; symbol: S }>;

/**
 * Get token if exists by giving an unknown chainId and symbol
 * @param chainId:number
 * @param symbol:string
 * @returns:{@link ListedToken} | null
 * @example
 * const x: number = 5/5 // is 1
 * getTokenByChainAndSymbol(x, 'USDC') // returns a {@link ListedToken} or null, but it will be resolved to USDC on Ethereum
 * getTokenByChainAndSymbol(10, 'USDC') // Allowed but returns null as Optimism is not supported
 */
export function getTokenByChainAndSymbol(
  chainId: number,
  symbol: string,
): ListedToken | null;

export function getTokenByChainAndSymbol(
  chainId: number,
  symbol: string,
): ListedToken | null {
  if (chainId in tokenMap) {
    const tokenMapByChain = tokenMap[chainId as ChainId];

    if (symbol in tokenMapByChain) {
      return tokenMapByChain[
        symbol as keyof typeof tokenMapByChain
      ] as ListedToken;
    }
  }

  return null;
}
