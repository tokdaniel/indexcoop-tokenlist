import type { IndexTokenList } from '@/src/types';
import { diffTokenLists, type TokenList } from '@uniswap/token-lists';
import isEmpty from 'lodash/isEmpty';

export const updateTokenListVersion = (
	tokenlistBase: TokenList,
	tokenlistUpdate: IndexTokenList,
) => {
	const diff = diffTokenLists(
		JSON.parse(JSON.stringify(tokenlistBase.tokens)),
		JSON.parse(JSON.stringify(tokenlistUpdate.tokens)),
	);

	if (!isEmpty(diff.removed)) {
		console.info('bump version: major');

		return Object.assign(tokenlistUpdate, {
			version: {
				major: 1,
				minor: 0,
				patch: 0,
			},
		});
	}

	if (!isEmpty(diff.added)) {
		console.info('bump version: minor');

		return Object.assign(tokenlistUpdate, {
			version: {
				major: tokenlistUpdate.version.major,
				minor: tokenlistUpdate.version.minor + 1,
				patch: 0,
			},
		});
	}

	// TODO: Check if diff.changed contains only "extensions" and throw that out
	if (!isEmpty(diff.changed)) {
		console.info('bump version: patch');

		return Object.assign(tokenlistUpdate, {
			version: {
				...tokenlistUpdate.version,
				patch: tokenlistUpdate.version.patch + 1,
			},
		});
	}

	console.log('No changes detected');
	return tokenlistBase;
};
