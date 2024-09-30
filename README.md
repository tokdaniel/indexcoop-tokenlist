# Index Coop Tokenlist

This repository contains the **Index Coop Tokenlist**, a curated set of tokens that follow the standards for ERC20 token lists as per the [Uniswap Token Lists](https://tokenlists.org/) specification. This list is designed for use within DeFi applications that need to reference standardized token lists for indexing and displaying assets.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Build](#build)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use the token list in your project, you can fetch it directly from the repository.

### Using npm
If you want to use the typings, you can install the package via npm if you're integrating with a JS/TS-based project:
```bash
(npm install | pnpm add | bun add) @indexcoop/tokenlist
```

## Usage
```typescript
import tokenlist, {
  isAddressEqual,
  isTokenEqual,
  isToken,
  isListedToken,
  isIndexToken,
  isLeverageToken,
  isSectorToken,
  isYieldToken,
  getTokenByChainAndAddress, 
  getTokenByChainAndSymbol, 
  getChainTokenList, 
  tokenSymbolMap,
  tokenAddressMap 
} from '@indexcoop/tokenlist'

tokenSymbolMap[1].BTC2X.extensions.leverage.type // 'Long2x'
tokenAddressMap[1]['0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'].symbol // USDC


isAddressEqual('address1', 'address2') // returns false, these are not addresses
isAddressEqual(tokenSymbolMap[1].BTC2X.address, tokenSymbolMap[1].BTC2X.address) // returns true, casing doesn't matter

isTokenEqual(tokenSymbolMap[1].BTC2X, tokenSymbolMap[1].BTC2X) // Returns true, if both tokens have the same chainId and address

isToken(tokenSymbolMap[1].BTC2X) // Returns true, if the token adheres to Uniswap's TokenInfo interface.
isListedToken(tokenSymbolMap[1].BTC2X) // Returns true, if isToken(token) is true, and the token is in the tokenlist
isIndexToken(tokenSymbolMap[1].BTC2X) // Returns true, if isListedToken(token) is true, and the token's tags contain 'index'
isLeverageToken(tokenSymbolMap[1].BTC2X) // Returns true if isIndexToken(token) is true, and 'leverage' is in the extensions
isSectorToken(tokenSymbolMap[1].MVI) // Returns true if isIndexToken(token) is true, and 'sector' is in the extensions
isYieldToken(tokenSymbolMap[1].hyETH) // Returns true if isIndexToken(token) is true, and 'yield' is in the extensions

getTokenByChainAndAddress(1, '0x6b175474e89094c44da98b954eedeac495271d0f') // returns DAI on mainnet

getTokenByChainAndSymbol(1, 'USDC') // returns USDC on mainnet

getChainTokenList(1) // All tokens listed/used on mainnet
getChainTokenList(1, ['currency']) // All tokens listed/used on mainnet, where the tags include 'currency'
getChainTokenList(1, ['currency', 'stablecoin']) // All tokens listed/used on mainnet, where the tags include 'currecny' or 'stablecoin'
getChainTokenList(1, ['index']) // All tokens listed/used IndexCoop product tokens on mainnet

// for something more specific like, all currency tokens by chainId and symbol
const mainnetCurrencyTokens = getChainTokenList(1, ['currency'])
mainnetCurrencyTokens.filter((({symbol}) => symbol === 'USDC'))

```
| util | returns | description |
|---|---|---|
| `is[Type]Token` | `:is [TokenType]` | typeguard to safely cast into the necessary tokentype: `TokenInfo`, `ListedToken`, `IndexToken`, `LeverageToken`, `SectorToken`, `YieldToken` |
| `tokenMap` | `:TokenMapByChain` | a strict map of `Record<chainId, Record<symbol, token>>`, provides safe access to strictly typed token data based on chainId and token symbol. | 
| `getChainTokenList` | `:TokensByChain` | a function requiring a `chainId` of type `number` or `ChainId`. Returns all listed tokens in an array on the provided chain. If the chain is unsupported it will return an empty array, hovewer if the provided types of the values are exact, it will return the right tokens by type. |
| `getTokenByChainAndSymbol` | `:ListedToken \| null` | An extension of `tokenMap` which accepts any number as `chainId`, and any string as `symbol`. Returns either a `ListedToken` or `null`. If the `symbol` and the `chainId` is matching by type the returned token will be exact. |

## Build

#### Running the script `(npm|pnpm|bun) run build` will do the following things:
  - Take the `tokenlist.json.ts` file's current state
  - Validate it against Uniswap's tokenlist json schema
  - Validate if the contracts for all the tokens exist
  - Validate that the local symbols for tokens match up with the onchain symbols
    - skip the last two steps for a token by adding the symbol to be skipped to `config/validation-exceptions.ts`
  - Diff the current state of `tokenlist.json.ts` to `indexcoop.tokenlist.json` and determine the necessary version update
  - Overwrite `indexcoop.tokenlist.json` with the current state of `tokenlist.json.ts` and add the right version


## Contributing

List a new token by following these steps:

1. **Fork the repository** by clicking the "Fork" button at the top-right of the repository page.
2. **Create a new branch** for your changes:
```bash
   git checkout -b your-branch-name
```
3. Add your token or make updates to existing token information in the `src/tokenlist.json.ts` file.
4. Run the build command, to validate the new tokenlist, and override the previous version
```bash
(npm | pnpm | bun) run build
```
5. Commit your changes
6. Push your branch
7. Submit a pull request

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE)

