module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: '**/tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['webpack.config.js', '.eslintrc.js'],
  rules: {
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'max-lines-per-function' : ["error", {"max": 2, "skipBlankLines": true}],
    'prettier/prettier': 'error',
  },
};
