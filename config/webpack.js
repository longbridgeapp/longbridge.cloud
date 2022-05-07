/* eslint-disable  */
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
          })
      })
  })

  config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
  // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
  config.experiments = { asyncWebAssembly: true, layers: true }

  return config
}

module.exports = webpackConfig
