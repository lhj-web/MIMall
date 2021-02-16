module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': 0,
    'no-unused-vars': 0,
    'no-alert': 0,
    'consistent-return': 0,
    'no-useless-return': 0,
    'max-classes-per-file': 0,
    'arrow-parens': 0,
    quotes: 0,
  },
};
