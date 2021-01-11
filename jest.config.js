module.exports = {
  preset: 'ts-jest',
  maxWorkers: '1',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/*.test.ts'],
  verbose: true,
  automock: false,
  notify: false,
  collectCoverage: true,
  setupFiles: ['./jest.setup.ts'],
};
