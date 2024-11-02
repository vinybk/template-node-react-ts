// jest.config.ts
import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/support/setupTests.ts'],
    verbose: true,
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // Matches *.test.tsx or *.spec.tsx files
};

export default config;