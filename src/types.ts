import type InternalTokenList from './tokenlist.json';

export type U2I<U> = (U extends unknown ? (arg: U) => void : never) extends (
	arg: infer I,
) => void
	? I
	: never;

export type Tags = keyof typeof InternalTokenList.tags;
export type ListedToken = (typeof InternalTokenList.tokens)[number];
export type ChainId = ListedToken['chainId'];
export type Symbol_ = ListedToken['symbol'];
export type Extensions = ListedToken['extensions'];
export type Status = Extensions['status'];

type GetExt<T, K extends 'leverage' | 'sector' | 'yield'> = T extends {
	extensions: { [key in K]: infer L };
}
	? L
	: never;

type TokenCat<T, K extends 'leverage' | 'sector' | 'yield'> = T extends {
	extensions: { [key in K]: infer S };
}
	? T
	: never;

export type Leverage = GetExt<ListedToken, 'leverage'>;
export type LeverageType = Leverage['type'];

export type Sector = GetExt<ListedToken, 'sector'>;
export type SectorTheme = Sector['theme'];

export type Yield = GetExt<ListedToken, 'yield'>;
export type YieldTheme = Yield['theme'];

export type IndexTokenList = typeof InternalTokenList;

// Helper Types

export type LeverageToken = TokenCat<ListedToken, 'leverage'>;
export type SectorToken = TokenCat<ListedToken, 'sector'>;
export type YieldToken = TokenCat<ListedToken, 'yield'>;
export type IndexToken = LeverageToken | SectorToken | YieldToken;

export type TokenByChain<T, Id extends ChainId> = T extends { chainId: Id }
	? T
	: never;

export type TokenMap<C extends ChainId> = {
	[S in Extract<ListedToken, { chainId: C }>['symbol']]: Extract<
		ListedToken,
		{ chainId: C; symbol: S }
	>;
};

export type TokenMapByChain = {
	[K in ListedToken['chainId']]: TokenMap<K>;
};
