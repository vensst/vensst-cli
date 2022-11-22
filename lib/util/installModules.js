const ora = require('ora')
const spinner = ora('Loading...');
const chalk = require('chalk');
const {exec} = require('child_process');
const consoleStatus = require("./consoleStatus.js")
/**
 * 安装依赖
 * @param answers {Object} 命令交互数据
 * @param options {Object} 配置项 例如：{cwd: `${process.cwd()}/${projectName}`}
 * @param projectName {string} 项目名称
 */
const installModules = function (answers, options, projectName) {
  const c = `${answers.installType} install`
  spinner.start(c);
  //安装依赖
  exec(c, options, function (err, stdout, stderr) {
    //err为null为成功
    if (err) {
      spinner.fail(chalk.red(`依赖安装失败 ${err}`))
      spinner.stop()
      process.exit()
    } else {
      spinner.succeed('依赖安装成功')
      spinner.stop()
      consoleStatus(projectName, answers)
    }
  });
}
module.exports = {
  installModules
}
