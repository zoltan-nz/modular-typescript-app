module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: ['eslint:recommended', 'prettier', 'plugin:node/recommended', 'plugin:@typescript-eslint/recommended'],
};
