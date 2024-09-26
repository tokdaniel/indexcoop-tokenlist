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
    {
      address: '0x0954906da0Bf32d5479e25f46056d22f08464cab',
      name: 'Index Token',
      symbol: 'INDEX',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: 'index-cooperative',
      },
      logoURI: 'https://placeholder.com/token.png',
      tags: ['index'],
    },
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
      name: 'Diversified Staked ETH Index',
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
    {
      address: '0x95b11aca35d35ac8b8a88e1f7792873bbea7cebb',
      name: 'Diversified Staked ETH Index',
      symbol: 'dsETH',
      decimals: 18,
      chainId: 42161,
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
    {
      address: '0x37e7c051dc5a24313ceec581222882648ba537aa',
      name: 'Diversified Staked ETH Index',
      symbol: 'dsETH',
      decimals: 18,
      chainId: 8453,
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
    {
      address: '0x36c833eed0d376f75d1ff9dfdee260191336065e',
      name: 'Gitcoin Staked ETH Index',
      symbol: 'gtcETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://placeholder.com/token.ong',
      tags: ['index', 'yield'],
    },
    {
      address: '0xc4506022fb8090774e8a628d5084eed61d9b99ee',
      name: 'High Yield ETH Index',
      symbol: 'hyETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://placeholder.com/token.ong',
      tags: ['index', 'yield'],
    },
    {
      address: '0x8b5d1d8b3466ec21f8ee33ce63f319642c026142',
      name: 'High Yield ETH Index',
      symbol: 'hyETH',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://placeholder.com/token.ong',
      tags: ['index', 'yield'],
    },
    {
      address: '0xc73e76aa9f14c1837cdb49bd028e8ff5a0a71dad',
      name: 'High Yield ETH Index',
      symbol: 'hyETH',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://placeholder.com/token.ong',
      tags: ['index', 'yield'],
    },
    {
      address: '0x55b2cfcfe99110c773f00b023560dd9ef6c8a13b',
      name: 'CoinDesk ETH Trend Index',
      symbol: 'cdETI',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://placeholder.com/token.ong',
      tags: ['index', 'yield'],
    },
    // --------------- Currency Tokens ---------------
    {
      name: 'Dai Stablecoin',
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      symbol: 'DAI',
      decimals: 18,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      extensions: {
        coinGeckoId: 'dai',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'Dai Stablecoin',
      address: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
      symbol: 'DAI',
      decimals: 18,
      chainId: 8453,
      logoURI: 'https://ethereum-optimism.github.io/data/DAI/logo.svg',
      extensions: {
        coinGeckoId: 'dai',
        bridgeInfo: {
          '1': {
            tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'USDCoin',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      symbol: 'USDC',
      decimals: 6,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      extensions: {
        coingeckoId: 'usd-coin',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
          },
          '42161': {
            tokenAddress: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'USD Coin',
      address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
      symbol: 'USDC',
      decimals: 6,
      chainId: 8453,
      logoURI: 'https://ethereum-optimism.github.io/data/USDC/logo.png',
      extensions: {
        coingeckoId: 'usd-coin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'USDCoin',
      address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      symbol: 'USDC',
      decimals: 6,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      extensions: {
        coingeckoId: 'usd-coin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'Tether USD',
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      symbol: 'USDT',
      decimals: 6,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      extensions: {
        coingeckoId: 'tether',
        bridgeInfo: {
          '42161': {
            tokenAddress: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'Tether USD',
      address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
      symbol: 'USDT',
      decimals: 6,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      extensions: {
        coingeckoId: 'tether',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'Wrapped Ether',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      symbol: 'WETH',
      decimals: 18,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      extensions: {
        coingeckoId: 'weth',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x4200000000000000000000000000000000000006',
          },
          '42161': {
            tokenAddress: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'Wrapped Ether',
      address: '0x4200000000000000000000000000000000000006',
      symbol: 'WETH',
      decimals: 18,
      chainId: 8453,
      logoURI: 'https://ethereum-optimism.github.io/data/WETH/logo.png',
      extensions: {
        coingeckoId: 'weth',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'Wrapped Ether',
      address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      symbol: 'WETH',
      decimals: 18,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      extensions: {
        coingeckoId: 'weth',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'Wrapped BTC',
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      symbol: 'WBTC',
      decimals: 8,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
        bridgeInfo: {
          '42161': {
            tokenAddress: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'Wrapped BTC',
      address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
      symbol: 'WBTC',
      decimals: 8,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          },
        },
      },
      tags: ['currency'],
    },
  ],
} as const;
