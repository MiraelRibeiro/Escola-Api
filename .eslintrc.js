module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/first': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    camelcase: 0,
  },
};
