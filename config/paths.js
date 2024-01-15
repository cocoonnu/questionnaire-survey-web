const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath =
  process.env.NODE_ENV === 'development'
    ? require(resolveApp('package.json')).homepage
    : process.env.PUBLIC_URL || '/'

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
]

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`)),
  )

  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }

  return resolveFn(`${filePath}.js`)
}

module.exports = {
  env: process.env,
  appPath: resolveApp('.'),
  appSrc: resolveApp('src'),
  appIndexJs: resolveModule(resolveApp, 'src/main/index'),
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIco: resolveApp('public/favicon.ico'),
  appCssVariable: resolveApp('src/main/variable.less'),
  appPackageJson: require(resolveApp('package.json')),
  proxySetup: require(resolveModule(resolveApp, 'config/setupProxy')),
  publicUrlOrPath,
  ekdLayerModules: resolveApp('node_modules/@ekd/enhance-layer-manager'),
  resolveApp,
}
