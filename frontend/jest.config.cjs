/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/support/setupTests.ts'],
  verbose: true,
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};

module.exports = config;
