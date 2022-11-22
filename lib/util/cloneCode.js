const download = require('download-git-repo');
const ora = require('ora')
const spinner = ora('Loading...');
const chalk = require('chalk');
const consoleStatus = require("./consoleStatus.js")
const setJsonFile = require("./setJsonFile.js")
const generateReadme = require("./generateReadme.js")

/**
 * downloading a template
 * @param args {Object} args
 * @return {Promise<void>}
 */
const cloneCode = async function (args) {
  spinner.start('正在下载...');
  download(args.templateUrl, args.projectName, async function (err) {
      if (err) { // 失败
        spinner.fail(chalk.red(`下载失败 ${err}`))
        spinner.stop()
        process.exit()
      } else { // 成功
        // 修改 package.json 中内容
        const jsonFilePath = `${process.cwd()}/${args.projectName}/package.json`
        await setJsonFile(jsonFilePath, {name: args.projectName, version: '0.1.0'})

        // 重新生成 README.md
        const readmeFilePath = `${process.cwd()}/${args.projectName}/README.md`
        await generateReadme(readmeFilePath, args)

        spinner.succeed('下载成功')
        spinner.stop()
        await consoleStatus(args)
      }
    }
  );
}

module.exports = cloneCode
