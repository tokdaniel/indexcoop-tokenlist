import { chain } from 'lodash';
import tokenlist from '../indexcoop.tokenlist.json';

export default {
  name: 'IndexCoop Token List',
  version: tokenlist.version,
  timestamp: new Date().toISOString(),
  tags: {
    stablecoin: {
      name: 'Stablecoin',
      description: 'This is a stablecoin.',
    },
    index: {
      name: 'Index Token',
      description: 'This is an Index Coop token.',
    },
    sector: {
      name: 'Sector Token',
      description: 'This token represents a basket of tokens.',
    },
    leverage: {
      name: 'Leverage Token',
      description: 'This token provides leveraged exposure.',
    },
    yield: {
      name: 'Yield Token',
      description: 'This is a token that accrues yield.',
    },
    component: {
      name: 'Component Token',
      description: 'This token is a component of some index product token.',
    },
    currency: {
      name: 'Currency Token',
      description: 'This token is used to pay for index tokens.',
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
      logoURI: 'https://cdn.indexcoop.com/index.svg',
      tags: ['index'],
    },
    // --------------- Sector Tokens ---------------
    {
      address: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
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
      logoURI: 'https://cdn.indexcoop.com/dpi.svg',
      tags: ['index', 'sector', 'component'],
    },
    {
      address: '0x9737C658272e66Faad39D7AD337789Ee6D54F500',
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
      logoURI: 'https://cdn.indexcoop.com/dpi.svg',
      tags: ['index', 'sector'],
    },
    {
      address: '0xc6955B85b622369a54Cc8C6DBeCb8e03c0885BD8',
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
      logoURI: 'https://cdn.indexcoop.com/dpi.svg',
      tags: ['index', 'sector'],
    },
    {
      address: '0x72e364F2ABdC788b7E918bc238B21f109Cd634D7',
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
      logoURI: 'https://cdn.indexcoop.com/mvi.svg',
      tags: ['index', 'sector'],
    },
    {
      address: '0x0104a6FA30540DC1d9F45D2797F05eEa79304525',
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
      logoURI: 'https://cdn.indexcoop.com/mvi.svg',
      tags: ['index', 'sector'],
    },
    {
      address: '0xEA8954dE7607b90F5ec81A5e2e673D0f60BB7596',
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
      logoURI: 'https://cdn.indexcoop.com/mvi.svg',
      tags: ['index', 'sector'],
    },
    {
      address: '0x2aF1dF3AB0ab157e1E2Ad8F88A7D04fbea0c7dc6',
      name: 'Bankless BED Index',
      symbol: 'BED',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Hibernated',
        coingeckoId: 'bankless-bed-index',
        sector: {
          theme: 'Metaverse',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/bed.svg',
      tags: ['index', 'sector'],
    },
    {
      address: '0x1B5E16C5b20Fb5EE87C61fE9Afe735Cca3B21A65',
      name: 'Index Coop Large Cap Index',
      symbol: 'ic21',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Hibernated',
        coingeckoId: null,
        sector: {
          theme: 'LCap',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/ic21.svg',
      tags: ['index', 'sector', 'dangerous'],
    },
    {
      address: '0x7f5f1A44dd6f88cCb54Fe879e144dF644A4aDa24',
      name: 'Real World Asset Index',
      symbol: 'RWA',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        sector: {
          theme: 'Real World',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/rwa.svg',
      tags: ['index', 'sector', 'dangerous'],
    },
    // --------------- Leverage Tokens ---------------
    {
      address: '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD',
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
      logoURI: 'https://cdn.indexcoop.com/eth2x.svg',
      tags: ['index', 'leverage', 'dangerous'],
    },
    {
      address: '0xcCdAE12162566E3f29fEfA7Bf7F5b24C644493b5',
      name: 'Leveraged rETH Staking Yield',
      symbol: 'icRETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'eleveraged-reth-staking-yield',
        leverage: {
          type: 'Long2x',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/icreth.svg',
      tags: ['index', 'leverage', 'dangerous'],
    },
    {
      address: '0x0B498ff89709d3838a063f1dFA463091F9801c2b',
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
      logoURI: 'https://cdn.indexcoop.com/btc2x.svg',
      tags: ['index', 'leverage', 'dangerous'],
    },
    {
      address: '0x65c4C0517025Ec0843C9146aF266A2C5a2D148A2',
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
      logoURI: 'https://cdn.indexcoop.com/eth2x.svg',
      tags: ['index', 'leverage', 'dangerous', 'component'],
    },
    {
      address: '0xD2AC55cA3Bbd2Dd1e9936eC640dCb4b745fDe759',
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
      logoURI: 'https://cdn.indexcoop.com/btc2x.svg',
      tags: ['index', 'leverage', 'dangerous', 'component'],
    },
    {
      address: '0x26d7D3728C6bb762a5043a1d0CeF660988Bca43C',
      name: 'Index Coop Ethereum 2x Index',
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
      logoURI: 'https://cdn.indexcoop.com/btc2x.svg',
      tags: ['index', 'leverage', 'dangerous'],
    },
    {
      address: '0xA0A17b2a015c14BE846C5d309D076379cCDfa543',
      name: 'Index Coop Ethereum 3x Index',
      symbol: 'ETH3X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth3x.svg',
      tags: ['index', 'leverage', 'dangerous'],
    },
    {
      address: '0x749654601a286833aD30357246400D2933b1C89b',
      name: 'Index Coop Inverse Ethereum Index',
      symbol: 'iETH1X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Short1x',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/ieth1x.svg',
      tags: ['index', 'leverage', 'dangerous'],
    },
    {
      address: '0xeb5bE62e6770137beaA0cC712741165C594F59D7',
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
      logoURI: 'https://cdn.indexcoop.com/btc2x.svg',
      tags: ['index', 'leverage'],
    },
    {
      address: '0x3bDd0d5c0C795b2Bf076F5C8F177c58e42beC0E6',
      name: 'Index Coop Bitcoin 3x Index',
      symbol: 'BTC3X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/btc3x.svg',
      tags: ['index', 'leverage', 'dangerous'],
    },
    {
      address: '0x80e58AEA88BCCaAE19bCa7f0e420C1387Cc087fC',
      name: 'Index Coop Inverse Bitcoin Index',
      symbol: 'iBTC1X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Short1x',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/ibtc1x.svg',
      tags: ['index', 'leverage', 'dangerous'],
    },
    {
      address: '0xC884646E6C88d9b172a23051b38B0732Cc3E35a6',
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
      logoURI: 'https://cdn.indexcoop.com/btc2x.svg',
      tags: ['index', 'leverage'],
    },
    {
      address: '0x329f6656792c7d34D0fBB9762FA9A8F852272acb',
      name: 'Index Coop Ethereum 3x Index',
      symbol: 'ETH3X',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth3x.svg',
      tags: ['index', 'leverage', 'dangerous'],
    },
    // --------------- Yield Tokens ---------------
    {
      address: '0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84',
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
      logoURI: 'https://cdn.indexcoop.com/iceth.svg',
      tags: ['index', 'yield'],
    },
    {
      address: '0x341c05c0E9b33C0E38d64de76516b2Ce970bB3BE',
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
      logoURI: 'https://cdn.indexcoop.com/dseth.svg',
      tags: ['index', 'yield', 'component'],
    },
    {
      address: '0x95b11aca35D35Ac8B8A88E1F7792873BBea7CeBb',
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
      logoURI: 'https://cdn.indexcoop.com/dseth.svg',
      tags: ['index', 'yield'],
    },
    {
      address: '0x37E7C051Dc5A24313cEEC581222882648ba537aa',
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
      logoURI: 'https://cdn.indexcoop.com/dseth.svg',
      tags: ['index', 'yield'],
    },
    {
      address: '0x36c833Eed0D376f75D1ff9dFDeE260191336065e',
      name: 'Gitcoin Staked ETH Index',
      symbol: 'gtcETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/gtceth.svg',
      tags: ['index', 'yield', 'dangerous'],
    },
    {
      address: '0xc4506022Fb8090774E8A628d5084EED61D9B99Ee',
      name: 'High Yield ETH Index',
      symbol: 'hyETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/hyeth.svg',
      tags: ['index', 'yield', 'dangerous'],
    },
    {
      address: '0x8b5D1d8B3466eC21f8eE33cE63F319642c026142',
      name: 'High Yield ETH Index',
      symbol: 'hyETH',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/hyeth.svg',
      tags: ['index', 'yield', 'dangerous'],
    },
    {
      address: '0xC73e76Aa9F14C1837CDB49bd028E8Ff5a0a71dAD',
      name: 'High Yield ETH Index',
      symbol: 'hyETH',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/hyeth.svg',
      tags: ['index', 'yield', 'dangerous'],
    },
    {
      address: '0x55b2CFcfe99110C773f00b023560DD9ef6C8A13B',
      name: 'CoinDesk ETH Trend Index',
      symbol: 'cdETI',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/cdeti.svg',
      tags: ['index', 'yield', 'dangerous'],
    },
    {
      address: '0x54EE8A49155F701F0d5Ff088CD36fbBF1a5B9f44',
      chainId: 1,
      name: 'The USDC Yield Index',
      symbol: 'icUSD',
      decimals: 18,
      logoURI: 'https://cdn.indexcoop.com/icusd.svg',
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'USDC',
        },
      },
      tags: ['index', 'yield'],
    },
    {
      address: '0x098471190D131d9E6215dd195feDf4bcC0426c8a',
      chainId: 8453,
      name: 'The USDC Yield Index',
      symbol: 'icUSD',
      decimals: 18,
      logoURI: 'https://cdn.indexcoop.com/icusd.svg',
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'USDC',
        },
      },
      tags: ['index', 'yield'],
    },
    // --------------- Component Tokens ---------------
    {
      chainId: 1,
      address: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
      name: 'Ethereum Name Service',
      symbol: 'ENS',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/19785/thumb/acatxTm8_400x400.jpg?1635850140',
      extensions: {
        status: 'Active',
        coingeckoId: 'ethereum-name-service',
        bridgeInfo: {
          '10': {
            tokenAddress: '0x65559aA14915a70190438eF90104769e5E890A00',
          },
          '42161': {
            tokenAddress: '0xfeA31d704DEb0975dA8e77Bf13E04239e70d7c28',
          },
        },
      },
      tags: ['component'],
    },
    {
      chainId: 42161,
      address: '0xfeA31d704DEb0975dA8e77Bf13E04239e70d7c28',
      name: 'Ethereum Name Service',
      symbol: 'ENS',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/19785/thumb/acatxTm8_400x400.jpg?1635850140',
      extensions: {
        status: 'Active',
        coingeckoId: 'ethereum-name-service',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
          },
        },
      },
      tags: ['component'],
    },
    {
      address: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
      chainId: 1,
      name: 'CompoundETH',
      symbol: 'cETH',
      decimals: 8,
      logoURI:
        'https://tokens.1inch.io/0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'compound-ether',
      },
      tags: ['component'],
    },
    {
      address: '0xC11b1268C1A384e55C48c2391d8d480264A3A7F4',
      chainId: 1,
      name: 'CompoundWrappedBTC',
      symbol: 'cWBTC',
      decimals: 8,
      logoURI:
        'https://tokens.1inch.io/0xc11b1268c1a384e55c48c2391d8d480264a3a7f4.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'compound-wrapped-btc',
      },
      tags: ['component'],
    },
    {
      address: '0x3f67093dfFD4F0aF4f2918703C92B60ACB7AD78b',
      chainId: 1,
      name: '21.co Wrapped Bitcoin',
      symbol: '21BTC',
      decimals: 8,
      logoURI: 'https://index-app.vercel.app/assets/21btc.png',
      extensions: {
        status: null,
        coingeckoId: 'bitcoin',
      },
      tags: ['component'],
    },
    {
      address: '0x1bE9d03BfC211D83CFf3ABDb94A75F9Db46e1334',
      chainId: 1,
      name: '21.co Wrapped BNB',
      symbol: '21BNB',
      decimals: 8,
      logoURI: 'https://index-app.vercel.app/assets/21bnb.png',
      extensions: {
        status: null,
        coingeckoId: 'binancecoin',
      },
      tags: ['component'],
    },
    {
      address: '0xFf4927e04c6a01868284F5C3fB9cba7F7ca4aeC0',
      chainId: 1,
      name: '21.co Wrapped BitcoinCash',
      symbol: '21BCH',
      decimals: 8,
      logoURI: 'https://index-app.vercel.app/assets/21bch.png',
      extensions: {
        status: null,
        coingeckoId: 'bitcoin-cash',
      },
      tags: ['component'],
    },
    {
      address: '0x9c05d54645306d4C4EAd6f75846000E1554c0360',
      chainId: 1,
      name: '21.co Wrapped Cardano',
      symbol: '21ADA',
      decimals: 6,
      logoURI: 'https://index-app.vercel.app/assets/21ada.png',
      extensions: {
        status: null,
        coingeckoId: 'cardano',
      },
      tags: ['component'],
    },
    {
      address: '0x9F2825333aa7bC2C98c061924871B6C016e385F3',
      chainId: 1,
      name: '21.co Wrapped Litecoin',
      symbol: '21LTC',
      decimals: 8,
      logoURI: 'https://index-app.vercel.app/assets/21ltc.png',
      extensions: {
        status: null,
        coingeckoId: 'litecoin',
      },
      tags: ['component'],
    },
    {
      address: '0xF4ACCD20bFED4dFFe06d4C85A7f9924b1d5dA819',
      chainId: 1,
      name: '21.co Wrapped Polkadot',
      symbol: '21DOT',
      decimals: 10,
      logoURI: 'https://index-app.vercel.app/assets/21dot.png',
      extensions: {
        status: null,
        coingeckoId: 'polkadot',
      },
      tags: ['component'],
    },
    {
      address: '0xb80a1d87654BEf7aD8eB6BBDa3d2309E31D4e598',
      chainId: 1,
      name: '21.co Wrapped Solana',
      symbol: '21SOL',
      decimals: 9,
      logoURI: 'https://index-app.vercel.app/assets/21sol.png',
      extensions: {
        status: null,
        coingeckoId: 'solana',
      },
      tags: ['component'],
    },
    {
      address: '0x0d3bd40758dF4F79aaD316707FcB809CD4815Ffe',
      chainId: 1,
      name: '21.co Wrapped XRP',
      symbol: '21XRP',
      decimals: 6,
      logoURI: 'https://index-app.vercel.app/assets/21xrp.png',
      extensions: {
        status: null,
        coingeckoId: 'ripple',
      },
      tags: ['component'],
    },
    {
      address: '0x399508A43d7E2b4451cd344633108b4d84b33B03',
      chainId: 1,
      name: '21.co Wrapped AVAX',
      symbol: '21AVAX',
      decimals: 18,
      logoURI: 'https://index-app.vercel.app/assets/21avax.png',
      extensions: {
        status: null,
        coingeckoId: 'avalanche-2',
      },
      tags: ['component'],
    },
    {
      address: '0x1c085195437738d73d75DC64bC5A3E098b7f93b1',
      chainId: 1,
      name: 'PT ether.fi weETH 26SEP2024',
      symbol: 'PT-weETH-26SEP2024',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/15069/large/Pendle_Logo_Normal-03.png?1696514728',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      address: '0x6ee2b5E19ECBa773a352E5B21415Dc419A700d1d',
      chainId: 1,
      name: 'PT ether.fi weETH 26DEC2024',
      symbol: 'PT-weETH-26DEC2024',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/15069/large/Pendle_Logo_Normal-03.png?1696514728',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      address: '0xf7906F274c174A52d444175729E3fa98f9bde285',
      chainId: 1,
      name: 'PT Renzo ezETH 26DEC2024',
      symbol: 'PT-ezETH-26DEC2024',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/15069/large/Pendle_Logo_Normal-03.png?1696514728',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      address: '0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0',
      chainId: 1,
      name: 'Re7 WETH',
      symbol: 'Re7WETH',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/29837/large/2022-official-morpho-token.png',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      address: '0x078f358208685046a11C85e8ad32895DED33A249',
      chainId: 42161,
      name: 'Aave Arbitrum WBTC',
      symbol: 'aArbWBTC',
      decimals: 8,
      extensions: {
        status: null,
        coingeckoId: 'aave-wbtc',
      },
      logoURI:
        'ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aWBTC.svg',
      tags: ['component'],
    },
    {
      address: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
      chainId: 42161,
      name: 'Aave Arbitrum WETH',
      symbol: 'aArbWETH',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'aave-weth',
      },
      logoURI: 'ipfs://QmUDc7LQN6zKHon9FChTqZc7WGFvGPZe698Bq5HbSYtfk9',
      tags: ['component'],
    },
    {
      address: '0x724dc807b04555b71ed48a6896b6F41593b8C637',
      chainId: 42161,
      name: 'Aave Arbitrum USDCn',
      symbol: 'aArbUSDCn',
      decimals: 6,
      extensions: {
        status: null,
        coingeckoId: 'aave-usdc',
      },
      logoURI:
        'ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUSDC.svg',
      tags: ['component'],
    },
    {
      address: '0xD4a0e0b9149BCee3C920d2E00b5dE09138fd8bb7',
      chainId: 8453,
      name: 'Aave Base WETH',
      symbol: 'aBasWETH',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'aave-weth',
      },
      logoURI: 'ipfs://QmUDc7LQN6zKHon9FChTqZc7WGFvGPZe698Bq5HbSYtfk9',
      tags: ['component'],
    },
    // --------------- Currency Tokens ---------------
    {
      name: 'Dai Stablecoin',
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      symbol: 'DAI',
      decimals: 18,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'dai',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
          },
        },
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      name: 'Dai Stablecoin',
      address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
      symbol: 'DAI',
      decimals: 18,
      chainId: 8453,
      logoURI: 'https://ethereum-optimism.github.io/data/DAI/logo.svg',
      extensions: {
        status: 'Active',
        coingeckoId: 'dai',
        bridgeInfo: {
          '1': {
            tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          },
        },
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      name: 'USDCoin',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      symbol: 'USDC',
      decimals: 6,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'usd-coin',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
          },
          '42161': {
            tokenAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          },
        },
      },
      tags: ['currency', 'stablecoin', 'component'],
    },
    {
      name: 'USD Coin',
      address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      symbol: 'USDC',
      decimals: 6,
      chainId: 8453,
      logoURI: 'https://ethereum-optimism.github.io/data/USDC/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'usd-coin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          },
        },
      },
      tags: ['currency', 'stablecoin', 'component'],
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
        status: 'Active',
        coingeckoId: 'usd-coin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          },
        },
      },
      tags: ['currency', 'stablecoin', 'component'],
    },
    {
      name: 'Tether USD',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      symbol: 'USDT',
      decimals: 6,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'tether',
        bridgeInfo: {
          '42161': {
            tokenAddress: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          },
        },
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      name: 'Tether USD',
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      symbol: 'USDT',
      decimals: 6,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'tether',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
          },
        },
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      name: 'Wrapped Ether',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      symbol: 'WETH',
      decimals: 18,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'weth',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x4200000000000000000000000000000000000006',
          },
          '42161': {
            tokenAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          },
        },
      },
      tags: ['currency', 'component'],
    },
    {
      name: 'Wrapped Ether',
      address: '0x4200000000000000000000000000000000000006',
      symbol: 'WETH',
      decimals: 18,
      chainId: 8453,
      logoURI: 'https://ethereum-optimism.github.io/data/WETH/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'weth',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          },
        },
      },
      tags: ['currency'],
    },
    {
      name: 'Wrapped Ether',
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      symbol: 'WETH',
      decimals: 18,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'weth',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          },
        },
      },
      tags: ['currency', 'component'],
    },
    {
      name: 'Wrapped BTC',
      address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      symbol: 'WBTC',
      decimals: 8,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-bitcoin',
        bridgeInfo: {
          '42161': {
            tokenAddress: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
          },
        },
      },
      tags: ['currency', 'component'],
    },
    {
      name: 'Wrapped BTC',
      address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      symbol: 'WBTC',
      decimals: 8,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-bitcoin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          },
        },
      },
      tags: ['currency', 'component'],
    },
    {
      chainId: 1,
      address: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
      name: 'Gemini Dollar',
      symbol: 'GUSD',
      decimals: 2,
      logoURI:
        'https://assets.coingecko.com/coins/images/5992/thumb/gemini-dollar-gusd.png?1536745278',
      extensions: {
        status: 'Active',
        coingeckoId: 'gemini-dollar',
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      address: '0xae78736Cd615f374D3085123A210448E74Fc6393',
      chainId: 1,
      name: 'Rocket Pool ETH',
      symbol: 'rETH',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0xae78736cd615f374d3085123a210448e74fc6393.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'rocket-pool-eth',
      },
      tags: ['currency', 'component'],
    },
    {
      address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      chainId: 1,
      name: 'Lido Staked Ether',
      symbol: 'stETH',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'staked-ether',
      },
      tags: ['currency'],
    },
    {
      address: '0xFe2e637202056d30016725477c5da089Ab0A043A',
      chainId: 1,
      name: 'StakeWise Staked ETH2',
      symbol: 'sETH2',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0xfe2e637202056d30016725477c5da089ab0a043a.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'seth2',
      },
      tags: ['currency'],
    },
    {
      address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      chainId: 1,
      name: 'Wrapped liquid staked Ether 2.0',
      symbol: 'wstETH',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-steth',
      },
      tags: ['currency', 'component'],
    },
  ],
} as const;
