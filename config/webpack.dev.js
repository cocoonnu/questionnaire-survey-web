const webpack = require('webpack')
const ifaces = require('os').networkInterfaces()
// 友好错误提示输出
const FriendlyErrorsPlugin = require('@soda/friendly-errors-webpack-plugin')

const paths = require('./paths')

const ips = Object.keys(ifaces)
  .reduce((result, id) => result.concat(ifaces[id].filter((item) => item.family === 'IPv4')), [])
  .reduce(
    (result, { address }) => {
      if (!result.includes(address)) {
        result.push(address)
      }

      return result
    },
    ['localhost'],
  )

module.exports = (config) => {
  // const port = config.env.PORT || '3000'
  const port = config.env.PORT || '3366'
  const host = config.appPackageJson.host || ''
  const isUseHost = ![null, undefined, '', 'localhost', '0.0.0.0'].includes(host)
  let devServerConfig = {}
  if (isUseHost) {
    devServerConfig = {
      sockHost: host,
      sockPort: isUseHost ? 443 : port,
    }
  }

  return {
    mode: 'development',
    devtool: 'eval-source-map', // inline-source-map
    stats: 'errors-only',
    output: {
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[name].chunk.js',
    },
    devServer: {
      client: { overlay: false },
      historyApiFallback: true,
      compress: true,
      port,
      // hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      },
      proxy: paths.proxySetup,
    },
    cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
      // version: '1.0.0',
    },
    // resolve: {
    //   alias: {
    //     'react-dom': '@hot-loader/react-dom',
    //   },
    // },
    plugins: [
      new FriendlyErrorsPlugin({
        color: 'green',
        compilationSuccessInfo: {
          messages: [
            'Client available on:',
            ...ips.map((ip) => `http://${ip}:${port}`),
            isUseHost && `https://${host}`,
          ].filter(Boolean),
        },
        onErrors: null,
      }),
    ],
    performance: {
      hints: false,
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'async',
    //     minSize: 0,
    //     maxSize: 1024 * 1024 * 3, // 2mb
    //     maxAsyncRequests: 30,
    //     maxInitialRequests: 30,
    //     cacheGroups: {
    //       commons: {
    //         name: 'commons',
    //         minChunks: 2,
    //         priority: 0,
    //       },
    //     },
    //   },
    // }
  }
}
