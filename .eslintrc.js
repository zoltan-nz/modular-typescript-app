module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'jest', 'import'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:node/recommended',
  ],
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.ts', '.tsx'],
    }
  },
  rules: {
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
  },
};
