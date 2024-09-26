import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { schema } from '@uniswap/token-lists';
import { erc20Abi, getContract } from 'viem';
import { staticClients } from '@/config/networks';
import type { IndexTokenList } from '@/src/types';
import validationExceptions from '@/config/validation-exceptions';

export const matchTokens = async (tokenlist: IndexTokenList) => {
	const result = await Promise.all(
		tokenlist.tokens.map(async (token) => {
			const client = staticClients[token.chainId];

			// If there is no contract deployed, list the token's Symbol in the ValidationExceptions
			if (validationExceptions.includes(token.symbol)) {
				console.log(`ℹ️ ${token.symbol} is exempt from onchain validation.`);
				return [token.symbol, token.symbol];
			}

			const contract = getContract({
				address: token.address,
				abi: erc20Abi,
				client,
			});

			try {
				const symbol = await contract.read.symbol();

				return [token.symbol, symbol];
			} catch (error) {
				return [token.symbol, 'CONTRACT_NOT_FOUND'];
			}
		}),
	);

	return result;
};

export const validateSchema = (tokenlist: IndexTokenList) => {
	const ajv = new Ajv({ verbose: true, allErrors: true });
	addFormats(ajv);
	const validator = ajv.compile(schema);

	const valid = validator(tokenlist);
	if (valid) {
		return valid;
	}

	if (validator.errors) {
		throw validator.errors.map((error) => {
			error.data = undefined;
			return error;
		});
	}
};

export const validate = async (tokenlist: IndexTokenList) => {
	try {
		validateSchema(tokenlist);
		console.log('✅ Tokenlist schema is valid.');
		const result = await matchTokens(tokenlist);

		const invalid = result.filter(
			([localSymbol, remoteSymbol]) => localSymbol !== remoteSymbol,
		);

		if (invalid.length > 0) {
			throw new Error(
				`Mismatching symbols found.\n ${JSON.stringify(invalid, null, 2)}`,
			);
		}
		console.log('✅ All token contracts found, symbols match.');

		console.log('✅ Tokenlist is valid.');
	} catch (error) {
		console.log('❌ Tokenlist is invalid.');
		console.error(error);
	}
};
