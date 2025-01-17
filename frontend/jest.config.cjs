/** @type {import('jest').Config} */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    // Use paths from tsconfig.json
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    // Map .js imports to .tsx files, but only within your project
    '^(src/.+)\\.js$': '<rootDir>/$1.tsx',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Ensure ts-jest is set up for TypeScript
  },
};

module.exports = config;
