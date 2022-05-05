// https://eslint.bootcss.com/docs/user-guide/configuring
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  globals: {
    JSX: true,
  },
  env: {
    browser: true,
  },
  plugins: ['react-hooks'],
  extends: ['eslint:recommended','plugin:react-hooks/recommended','prettier',],
}
