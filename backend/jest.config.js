module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest to transform TypeScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Add file extensions
  testMatch: ['**/tests/**/*.test.ts'], // Define the pattern for test files
  moduleNameMapper: {
    // Map .js imports to .ts or .tsx files
    '^(.*)\\.js$': '$1.ts',
  },
};
