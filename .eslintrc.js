// https://eslint.bootcss.com/docs/user-guide/configuring
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  globals: {
    JSX: true,
  },
  env: {
    commonjs: true,
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['react-hooks', 'prettier'],
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
};
