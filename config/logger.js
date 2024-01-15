const chalk = require('chalk')
const ip = require('ip')
const divider = chalk.gray('\n-----------------------------------')

const logger = {
  error: (err) => {
    console.error(chalk.red(err))
  },

  // 应用启动时触发
  appStarted: (port, host, addStr) => {
    console.log(`Server started ! ${chalk.green('✓')}\n${addStr}`)

    console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `)
  },
}

module.exports = logger
