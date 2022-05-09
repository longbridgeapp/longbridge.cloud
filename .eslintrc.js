module.exports = {
  root: true,
  plugins: ['import'],
  extends: ['plugin:import/recommended', 'plugin:@next/next/recommended', 'next'],
  rules: {
    '@next/next/no-img-element': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
  },
}
