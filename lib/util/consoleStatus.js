const chalk = require('chalk');
const getFiglet = require("./getFiglet.js")

/**
 * 控制台输入成功状态
 * @param args {Object} args
 * @return {Promise<void>}
 */
const consoleStatus = async function (args) {
  console.log(await getFiglet('vensst-cli'))
  console.log(chalk.green('project init successfully!'))
  console.log("To get started:")
  console.log("")
  console.log(`${chalk.green(`  cd ${args.projectName}`)}`);
  console.log(`${chalk.green(`  npm install`)}`);
  console.log(`${chalk.green(`  npm run dev`)}`);
  console.log("")
  console.log("https://github.com/vensst/vensst-cli/issues")
  process.exit()
}

module.exports = consoleStatus
