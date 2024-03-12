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
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: '**/tsconfig.json',
  },
  ignorePatterns: ['webpack.config.js', '.eslintrc.js'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 'warn',
    "import/prefer-default-export": "off",
    'prettier/prettier': 'error',
  },
};
