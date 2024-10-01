import tsConfig from './tsconfig.json';
const { createDefaultPreset } = require('ts-jest');
import * as path from 'node:path';

interface TsConfigPaths {
  [key: string]: string[];
}

function convertTsConfigPathsToModuleNameMapper(
  paths: TsConfigPaths = {},
): Record<string, string> {
  const moduleNameMapper: Record<string, string> = {};

  for (const [key, value] of Object.entries(paths)) {
    const jestKey = `^${key.replace(/\*/, '(.*)')}$`;
    const jestValue = path.join(
      '<rootDir>',
      './',
      value[0].replace(/\*/, '$1'),
    );
    moduleNameMapper[jestKey] = jestValue;
  }

  return moduleNameMapper;
}

const defaultPreset = createDefaultPreset();

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  ...defaultPreset,
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transformIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/index.ts',
    '/dist/',
    '/types/',
    '/tests/utils.ts',
  ],
  moduleNameMapper: convertTsConfigPathsToModuleNameMapper(
    tsConfig.compilerOptions.paths,
  ),
};
