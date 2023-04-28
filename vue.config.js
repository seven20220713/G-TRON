const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'G-TRON',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.worker.js$/,
      use: {
        loader: 'worker-loader',
        // 允许将内联的 web worker 作为 BLOB
        options: { inline: 'no-fallback' }
      }
    })
  },
  parallel: false
};
