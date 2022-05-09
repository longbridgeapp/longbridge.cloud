function webpackConfig(config, { webpack, isServer }) {
  config.plugins.push(
    new webpack.ProvidePlugin({
      React: 'react',
    })
  )

  config.resolve.fallback = {
    fs: false,
  }
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config.module.rules.forEach(r => {
    r.oneOf &&
      r.oneOf.forEach(moduleLoader => {
        Array.isArray(moduleLoader.use) &&
          moduleLoader.use.forEach(l => {
            if (/css-loader/.test(l.loader) && !/postcss-loader/.test(l.loader)) {
              const { ...others } = l.options.modules
              l.options = {
                ...l.options,
                modules: {
                  ...others,
                  localIdentName: '[folder]-[name]__[local]--[hash:base64:3]',
                  mode: resourcePath => {
                    if (/local.css$/i.test(resourcePath)) {
                      return 'local'
                    }
                    return 'global'
                  },
                  auto: resourcePath => /module.scss$/.test(resourcePath),
                },
              }
            }
            if (/resolve-url-loader/.test(l.loader)) l.options.sourceMap = false
          })
      })
  })
  return config
}

module.exports = webpackConfig
