'use strict'
const fs = require('fs');
const download = require('download-git-repo');
const ora = require('ora')
const spinner = ora('Loading...');
const chalk = require('chalk');
const figlet = require('figlet');
const {exec} = require('child_process');

/**
 * 设置 package.json 中的 name 为当前项目名
 * @param obj
 */
const setPackageFeil = function (obj) {
  fs.readFile(`${process.cwd()}/${obj.projectName}/package.json`, (err, data) => {
    if (err) throw err;
    let _data = JSON.parse(data.toString())
    _data.name = obj.projectName
    _data.version = '1.0.0'
    let str = JSON.stringify(_data, null, 4);
    fs.writeFile(`${process.cwd()}/${obj.projectName}/package.json`, str, (err) => {
      if (err) throw err;
    })
  });
};
/**
 * 判断是否存在某个文件
 * @param filePath 文件路劲
 * @returns {Promise<unknown>}
 */
const isFileExisted = function (filePath) {
  return new Promise(function (resolve, reject) {
    fs.access(filePath, (err) => {
      if (err) {
        resolve(err.code);//ENOENT
      } else {
        resolve('existed');
      }
    })
  })
}
/**
 * 删除文件
 * @param filePath
 * @returns {Promise<unknown>}
 */
const delFile = function (filePath) {
  return new Promise(function (resolve, reject) {
    fs.unlink(filePath, function (err) {
      if (err) {
        reject(err.code)
      } else {
        resolve('success')
      }
    })
  })

}
/**
 * 创建.md文件
 * @param answers
 * @param projectName
 */
const createFile = function (projectName,answers) {
  const filePath = `${process.cwd()}/${projectName}/README`
  try {
    fs.writeFileSync(filePath + '.text',
      `# ${projectName}
## 使用
### 安装
\`\`\`shell
${answers.installType || 'npm'} install
\`\`\`
### 运行
\`\`\`shell
${answers.installType|| 'npm'} run dev
\`\`\`
### 编译
\`\`\`shell
${answers.installType|| 'npm'} run build
\`\`\`
        `);
    fs.renameSync(filePath + '.text', filePath + '.md')
  } catch (error) {
    spinner.fail(chalk.red(`${error}`))
  }
}
const setReadmeFeil = async function (projectName,answers) {
  let filePath = `${process.cwd()}/${projectName}/README.md`
  let statusMsg = await isFileExisted(filePath)
  if (statusMsg === 'existed') {
    await delFile(filePath)
  }
  createFile(projectName,answers)
}
const getFiglet = async function (text) {
  return new Promise(function (resolve, reject) {
    figlet(text, function (err, data) {
      if (err) {
        console.log(err)
        return resolve('')
      }
      resolve(data)
    });
  })
}
const consoleStatus=async function (projectName, answers) {
  console.log(await getFiglet('vensst-cli'))
  console.log(chalk.green('project init successfully!'))
  console.log("To get started:")
  console.log("")
  console.log(`  ${chalk.green(`cd ${projectName}`)}`);
  if(!answers.isAutoInstall){
    console.log(`${chalk.green(`  ${answers.installType ||'npm'} install`)}`);
  }
  console.log(`${chalk.green(`  ${answers.installType ||'npm'} run dev`)}`);
  console.log("")
  console.log("https://github.com/vensst/vensst-cli/issues")
  process.exit()
}
/**
 * 克隆代码
 * @param url gitHub仓库地址
 * @param projectName 创建的项目名称
 */
const cloneCode = async function (url, projectName, answers) {
  spinner.start('正在下载...');
  download(url, projectName, async function (err) {
      if (err) {
        spinner.fail(chalk.red(`下载失败 ${err}`))
        spinner.stop()
        process.exit()
      } else {
        spinner.succeed('下载成功')
        spinner.stop()
        //修改 package.json中的name
        setPackageFeil({projectName})
        setReadmeFeil(projectName,answers)
        if (answers.isAutoInstall) {
          await installModules(answers, {cwd: `${process.cwd()}/${projectName}`},projectName)
        }else {
          consoleStatus(projectName, answers)
        }

      }
    }
  );
}

/**
 * 安装依赖
 * @param answers
 * @param options
 * @param projectName
 */
const installModules = function (answers, options,projectName) {
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
  setPackageFeil,
  cloneCode,
  installModules
}
