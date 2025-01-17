module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest to transform TypeScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Add file extensions
  testMatch: ['**/tests/**/*.test.ts'], // Define the pattern for test files
  moduleNameMapper: {
    // Map .js imports to .ts files, but only within your project
    '^(src/.+)\\.js$': '<rootDir>/$1.ts',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ensure node_modules are ignored
};
