const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { EsbuildPlugin } = require('esbuild-loader')
const { isEsbuild } = require('./consts.config')
const paths = require('./paths')

module.exports = (config) => {
  const shouldUseSourceMap = ['dev'].includes(config.env.FIG_ENV)

  return {
    mode: 'production',
    devtool: false, // nosources-source-map
    output: {
      filename: 'static/js/[name].[contenthash:6].js',
      chunkFilename: 'static/js/[name].[contenthash:6].chunk.js',
    },
    optimization: {
      minimize: true,
      minimizer: [
        !isEsbuild &&
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
              },
              mangle: {
                safari10: true,
              },
              keep_classnames: true,
              keep_fnames: true,
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
          }),
        !isEsbuild &&
          new CssMinimizerPlugin({
            parallel: true,
          }),
        isEsbuild &&
          new EsbuildPlugin({
            target: 'es2016',
            legalComments: 'none',
            css: true,
          }),
      ].filter(Boolean),
      splitChunks: {
        chunks: 'async',
        minSize: 0,
        maxSize: 1024 * 1024 * 3,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          // styles: {
          //   name: 'styles',
          //   type: 'css/mini-extract',
          //   chunks: 'all',
          //   enforce: true,
          // },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 0,
          },
          // vendor: {
          //   test: /[\\/]node_modules[\\/]/,
          //   name(module) {
          //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          //     return `${packageName.replace('@', '')}`;
          //   },
          //   minChunks: 2,
          // },
        },
      },
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.appPublic,
            to: paths.appBuild,
            globOptions: {
              dot: true,
              gitignore: true,
              ignore: ['**/index.html', '**/favicon.ico'],
            },
          },
        ],
      }),

      new CleanWebpackPlugin(), // 清除之前打包文件
    ].filter(Boolean),
    performance: {
      hints: false,
    },
  }
}
