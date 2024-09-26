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
import tokenlist, { getChainTokens, tokenMap } from '@indexcoop/tokenlist'

getChainTokens(1) // All tokens listed/used on mainnet
tokenMap[1].BTC2X.extensions.leverage.type // 'Long2x'
```

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

