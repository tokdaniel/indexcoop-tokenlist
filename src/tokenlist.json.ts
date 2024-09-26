import tokenlist from 'indexcoop.tokenlist.json';

export default {
	name: 'IndexCoop Token List',
	version: tokenlist.version,
	timestamp: new Date().toISOString(),
	tags: {
		index: {
			name: 'Index Token',
			description: 'This is an Index token that represents a basket of tokens.',
		},
		sector: {
			name: 'Index Token',
			description: 'This is an Index token that represents a basket of tokens.',
		},
		leverage: {
			name: 'Leverage Token',
			description: 'This is a token that provides leverage.',
		},
		yield: {
			name: 'Yield Token',
			description: 'This is a token that accrues yield.',
		},
		currency: {
			name: 'Currency Token',
			description: 'This is a token that is used to pay.',
		},
		dangerous: {
			name: 'Dangerous Token',
			description: 'This is a token that is considered risky or dangerous.',
		},
	},
	tokens: [
		// --------------- Sector Tokens ---------------
		{
			address: '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b',
			name: 'DeFi Pulse Index',
			symbol: 'DPI',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Active',
				coingeckoId: 'defi-pulse-index',
				sector: {
					theme: 'DeFi',
				},
			},
			logoURI: 'https://placeholder.com/token.png',
			tags: ['index', 'sector'],
		},
		{
			address: '0x9737c658272e66faad39d7ad337789ee6d54f500',
			name: 'DeFi Pulse Index',
			symbol: 'DPI',
			decimals: 18,
			chainId: 42161,
			extensions: {
				status: 'Active',
				coingeckoId: 'defi-pulse-index',
				sector: {
					theme: 'DeFi',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'sector'],
		},
		{
			address: '0xc6955b85b622369a54cc8c6dbecb8e03c0885bd8',
			name: 'DeFi Pulse Index',
			symbol: 'DPI',
			decimals: 18,
			chainId: 8453,
			extensions: {
				status: 'Active',
				coingeckoId: 'defi-pulse-index',
				sector: {
					theme: 'DeFi',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'sector'],
		},
		{
			address: '0x72e364f2abdc788b7e918bc238b21f109cd634d7',
			name: 'Metaverse Index',
			symbol: 'MVI',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Active',
				coingeckoId: 'metaverse-index',
				sector: {
					theme: 'Metaverse',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'sector'],
		},
		{
			address: '0x0104a6fa30540dc1d9f45d2797f05eea79304525',
			name: 'Metaverse Index',
			symbol: 'MVI',
			decimals: 18,
			chainId: 42161,
			extensions: {
				status: 'Active',
				coingeckoId: 'metaverse-index',
				sector: {
					theme: 'Metaverse',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'sector'],
		},
		{
			address: '0xea8954de7607b90f5ec81a5e2e673d0f60bb7596',
			name: 'Metaverse Index',
			symbol: 'MVI',
			decimals: 18,
			chainId: 8453,
			extensions: {
				status: 'Active',
				coingeckoId: 'metaverse-index',
				sector: {
					theme: 'Metaverse',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'sector'],
		},
		{
			address: '0x2af1df3ab0ab157e1e2ad8f88a7d04fbea0c7dc6',
			name: 'Bankless BED Index',
			symbol: 'BED',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Hybernated',
				coingeckoId: 'bankless-bed-index',
				sector: {
					theme: 'Metaverse',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'sector'],
		},
		{
			address: '0x1b5e16c5b20fb5ee87c61fe9afe735cca3b21a65',
			name: 'Index Coop Large Cap Index',
			symbol: 'ic21',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Hybernated',
				sector: {
					theme: 'Large Cap',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'sector'],
		},
		// --------------- Leverage Tokens ---------------
		{
			address: '0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd',
			name: 'ETH 2x Flexible Leverage Index',
			symbol: 'ETH2x-FLI',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Deprecated',
				coingeckoId: 'eth-2x-flexible-leverage-index',
				leverage: {
					type: 'Long2x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0x0b498ff89709d3838a063f1dfa463091f9801c2b',
			name: 'BTC 2x Flexible Leverage Index',
			symbol: 'BTC2x-FLI',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Deprecated',
				coingeckoId: 'btc-2x-flexible-leverage-index',
				leverage: {
					type: 'Long2x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0x65c4c0517025ec0843c9146af266a2c5a2d148a2',
			name: 'Index Coop Ethereum 2x Index',
			symbol: 'ETH2X',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Active',
				coingeckoId: 'index-coop-ethereum-2x-index',
				leverage: {
					type: 'Long2x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0xd2ac55ca3bbd2dd1e9936ec640dcb4b745fde759',
			name: 'Index Coop Bitcoin 2x Index',
			symbol: 'BTC2X',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Active',
				coingeckoId: 'index-coop-bitcoin-2x-index',
				leverage: {
					type: 'Long2x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0x26d7d3728c6bb762a5043a1d0cef660988bca43c',
			name: 'Index Coop Bitcoin 2x Index',
			symbol: 'ETH2X',
			decimals: 18,
			chainId: 42161,
			extensions: {
				status: 'Active',
				coingeckoId: 'index-coop-bitcoin-2x-index',
				leverage: {
					type: 'Long2x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0xa0a17b2a015c14be846c5d309d076379ccdfa543',
			name: 'Index Coop Ethereum 3x Index',
			symbol: 'ETH3X',
			decimals: 18,
			chainId: 42161,
			extensions: {
				status: 'Active',
				leverage: {
					type: 'Long3x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0x749654601a286833ad30357246400d2933b1c89b',
			name: 'Index Coop Inverse Ethereum Index',
			symbol: 'iETH1X',
			decimals: 18,
			chainId: 42161,
			extensions: {
				status: 'Active',
				leverage: {
					type: 'Short1x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0xeb5be62e6770137beaa0cc712741165c594f59d7',
			name: 'Index Coop Bitcoin 2x Index',
			symbol: 'BTC2X',
			decimals: 18,
			chainId: 42161,
			extensions: {
				status: 'Active',
				coingeckoId: 'index-coop-bitcoin-2x-index',
				leverage: {
					type: 'Long2x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0x3bdd0d5c0c795b2bf076f5c8f177c58e42bec0e6',
			name: 'Index Coop Bitcoin 3x Index',
			symbol: 'BTC3X',
			decimals: 18,
			chainId: 42161,
			extensions: {
				status: 'Active',

				leverage: {
					type: 'Long3x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0x80e58aea88bccaae19bca7f0e420c1387cc087fc',
			name: 'Index Coop Inverse Bitcoin Index',
			symbol: 'iBTC1X',
			decimals: 18,
			chainId: 42161,
			extensions: {
				status: 'Active',
				leverage: {
					type: 'Short1x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0xc884646e6c88d9b172a23051b38b0732cc3e35a6',
			name: 'Index Coop Bitcoin 2x Index',
			symbol: 'ETH2X',
			decimals: 18,
			chainId: 8453,
			extensions: {
				status: 'Active',
				coingeckoId: 'index-coop-ethereum-2x-index',
				leverage: {
					type: 'Long2x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		{
			address: '0x329f6656792c7d34d0fbb9762fa9a8f852272acb',
			name: 'Index Coop Ethereum 3x Index',
			symbol: 'ETH3X',
			decimals: 18,
			chainId: 8453,
			extensions: {
				status: 'Active',
				leverage: {
					type: 'Long3x',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'leverage'],
		},
		// --------------- Yield Tokens ---------------
		{
			address: '0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84',
			name: 'Interest Compounding ETH Index',
			symbol: 'icETH',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Active',
				coingeckoId: 'interest-compounding-eth-index',
				yield: {
					theme: 'ETH',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'yield'],
		},
		{
			address: '0x341c05c0e9b33c0e38d64de76516b2ce970bb3be',
			name: 'Interest Compounding ETH Index',
			symbol: 'dsETH',
			decimals: 18,
			chainId: 1,
			extensions: {
				status: 'Active',
				coingeckoId: 'diversified-staked-eth',
				yield: {
					theme: 'ETH',
				},
			},
			logoURI: 'https://placeholder.com/token.ong',
			tags: ['index', 'yield'],
		},
	],
} as const;
