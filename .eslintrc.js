module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
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
    'quote-props': 0,
    quotes: 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'import/no-absolute-path': 0,
  },
};
