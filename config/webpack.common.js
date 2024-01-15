const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const ESLintPlugin = require('eslint-webpack-plugin')
const { version, subversion, IS_PRIVATE } = require('../package.json')
const paths = require('./paths')
const { isEsbuild } = require('./consts.config')
const swcConfig = require('./.swcrc.js')

const isDev = ['dev'].includes(process.env.FIG_ENV)
const extensionWebpackConfig = require(`./webpack.${isDev ? 'dev' : 'prod'}.js`)

let shouldUseSourceMap = process.env.GENERATE_SOURCEMAP === 'false'
if (isDev) shouldUseSourceMap = true

const cssRegex = /\.css$/
const cssModuleRegex = /\.module.css$/
const lessRegex = /\.(less)$/
const lessModuleRegex = /\.module.(less)$/

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    isDev && 'style-loader',
    !isDev && {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // esModule: false,
        publicPath: '../',
      },
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: '[local]__[hash:base64:5]',
        },
        sourceMap: shouldUseSourceMap,
        ...cssOptions,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          ident: 'postcss',
        },
      },
    },
    // {
    //   loader: 'style-resources-loader',
    //   options: {
    //     patterns: [paths.appCssVariable],
    //   },
    // },
  ].filter(Boolean)

  if (preProcessor) {
    if (Array.isArray(preProcessor)) {
      loaders = [...loaders, ...preProcessor]
    } else {
      loaders.push(preProcessor)
    }
  }

  return loaders
}

const baseWebpackConfig = {
  target: 'web',
  entry: {
    app: [paths.appIndexJs],
  },
  output: {
    path: paths.appBuild,
    publicPath: paths.publicUrlOrPath,
    library: `${paths.appPackageJson.name}-[name]`,
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        include: [paths.appSrc],
        exclude: /node_modules/,
        use: [
          !isEsbuild && {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              sourceMaps: shouldUseSourceMap,
              inputSourceMap: shouldUseSourceMap,
            },
          },
          isEsbuild && {
            loader: 'swc-loader',
            options: swcConfig(isDev),
          },
        ].filter(Boolean),
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({
          modules: false,
        }),
        sideEffects: true,
      },
      {
        test: cssModuleRegex,
        include: [paths.appSrc],
        use: getStyleLoaders({}),
      },
      {
        test: lessRegex,
        include: [
          paths.appSrc,
          paths.ekdLayerModules,
          paths.resolveApp('node_modules/antd'),
          // paths.resolveApp('node_modules/draft-js'),
          // paths.resolveApp('node_modules/react-draft-wysiwyg/dist/'),
        ],
        exclude: lessModuleRegex,
        use: getStyleLoaders(
          {
            modules: false,
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
              sourceMap: shouldUseSourceMap,
            },
          },
        ),
        sideEffects: true,
      },
      {
        test: lessModuleRegex,
        include: [paths.appSrc, paths.ekdLayerModules],
        use: getStyleLoaders({}, 'less-loader'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        include: [paths.appSrc, paths.ekdLayerModules],
        type: 'asset',
        generator: {
          filename: 'static/img/[name][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 4,
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        type: 'asset/resource',
        include: [paths.appSrc, paths.ekdLayerModules],
        generator: {
          filename: 'static/font/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': paths.appSrc,
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    fallback: {
      buffer: require.resolve('buffer'),
      process: require.resolve('process/browser'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      asset: require.resolve('assert'),
      fs: require.resolve('browserify-fs'),
    },
  },
  plugins: [
    process.env.ANA_TYPE === 'true' && new BundleAnalyzerPlugin({ analyzerPort: 'auto' }),

    // new ESLintPlugin({
    //   fix: true,
    //   lintDirtyModulesOnly: true,
    // }),

    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment/,
    }),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      favicon: paths.appIco,
      inject: true,
      minify: {
        removeComments: !isDev,
        collapseWhitespace: !isDev,
        removeAttributeQuotes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      config: {
        FIG_ENV: process.env.FIG_ENV,
      },
    }),

    new MiniCssExtractPlugin({
      filename: isDev ? 'static/css/[name].css' : 'static/css/[name].[contenthash:6].css',
      chunkFilename: isDev
        ? 'static/css/[name].chunk.css'
        : 'static/css/[name].[contenthash:6].chunk.css',
      ignoreOrder: true,
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: require.resolve('process/browser'),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...process.env,
        WEB_VERSION: `${version}.${subversion || 0}`,
        IS_PRIVATE: IS_PRIVATE === 'true',
      }),
    }),

    new WebpackBar({
      name: paths.appPackageJson.name,
      color: '#00AFF2',
      profile: true,
      minimal: false,
      compiledIn: false,
    }),
  ].filter(Boolean),
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
}

module.exports = merge(baseWebpackConfig, extensionWebpackConfig(paths))
