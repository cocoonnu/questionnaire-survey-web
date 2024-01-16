module.exports = function (api) {
  api.cache(true)
  const { FIG_ENV } = process.env || {}
  const isProd = ['pre', 'prod'].includes(FIG_ENV)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['ie 11', 'last 2 version', '> 5%', 'not dead'],
          },
          modules: false,
          corejs: '3',
          useBuiltIns: 'usage',
        },
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    plugins: [
      // isProd && ['transform-remove-console', { exclude: ['info', 'error', 'warn'] }],
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
          absoluteRuntime: false,
          helpers: true,
          regenerator: true,
          proposals: true,
        },
      ],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      '@babel/proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      '@babel/plugin-proposal-function-sent',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-transform-destructuring',
      '@babel/plugin-transform-arrow-functions',
      [
        '@babel/plugin-transform-modules-commonjs',
        {
          allowTopLevelThis: true,
        },
      ],
      'react-activation/babel'[
        ('import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd')
      ],
      [
        'import',
        { libraryName: '@hose/eui', libraryDirectory: 'es/components', style: false },
        '@hose/eui',
      ],
    ].filter(Boolean),
    env: {
      production: {
        plugins: [
          'transform-react-remove-prop-types',
          '@babel/plugin-transform-react-inline-elements',
          '@babel/plugin-transform-react-constant-elements',
        ],
      },
      development: {
        // plugins: ['react-hot-loader/babel'],
      },
    },
  }
}
