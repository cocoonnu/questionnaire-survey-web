const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  plugins: [
    'autoprefixer',
    'postcss-flexbugs-fixes',
    'postcss-safe-parser',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      },
    ]
  ],
};
