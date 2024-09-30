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

export const isToken = (token: unknown): token is TokenInfo => {
  if (typeof token !== 'object' || !token) return false;
  if (!('chainId' in token)) return false;
  if (!('address' in token)) return false;
  if (!('name' in token)) return false;
  if (!('symbol' in token)) return false;
  if (!('decimals' in token)) return false;

  return true;
};

export const isListedToken = (token: unknown): token is ListedToken =>
  isToken(token) &&
  Boolean(tokenlist.tokens.find((t) => t.address === token.address));

export const isIndexToken = (token: unknown): token is IndexToken =>
  isListedToken(token) && Boolean(token.tags.find((t) => t === 'index'));

export const isLeverageToken = (token: unknown): token is LeverageToken =>
  isIndexToken(token) && 'leverage' in token.extensions;

export const isSectorToken = (token: unknown): token is SectorToken =>
  isIndexToken(token) && 'sector' in token.extensions;

export const isYieldToken = (token: unknown): token is YieldToken =>
  isIndexToken(token) && 'yield' in token.extensions;

export const tokenMap = tokenlist.tokens.reduce((acc, token) => {
  const { chainId, symbol } = token;

  if (!acc[chainId]) {
    acc[chainId] = {} as U2I<{ [C in ChainId]: TokenMap<C> }[ChainId]>;
  }

  //@ts-ignore - Symbol type is too broad for this, thus typescript cannot infer, since chainId and symbol are not linked
  acc[chainId][symbol] = token;

  return acc;
}, {} as TokenMapByChain);

export function getChainTokenList<C extends ChainId>(
  chainId: C,
): TokensByChain<ListedToken, C>[];
export function getChainTokenList(chainId: number): ListedToken[];
export function getChainTokenList(chainId: number): ListedToken[] {
  if (chainId in tokenMap) {
    return tokenlist.tokens.filter(
      (t) => t.chainId === chainId,
    ) as ListedToken[];
  }
  return [];
}

export function getTokenByChainAndSymbol<
  C extends ChainId,
  S extends SymbolsByChain<C>,
>(chainId: C, symbol: S): Extract<ListedToken, { chainId: C; symbol: S }>;
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
