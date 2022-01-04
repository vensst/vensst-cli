#!/usr/bin/env node
'use strict'

// 定义脚手架的文件路径，__dirname是当前文件所在的路径
process.env.NODE_PATH = __dirname + '/../node_modules/'
//解析node 输入的指令
const program = require('commander');
const {vuePromptList} = require('../lib/promptList.js');
const {cloneCode} = require("../lib/utils.js")
//版本
const {version} = require("../package.json")

const inquirer = require("inquirer");
program.version(version,'-v, --version','output the current version')

program.command('create-vue-mobile-template <projectName>')  //配置命令的名字 参数必选用<>，非必选用[]
  .alias('cvmt') // 用于 执行命令的别名
  .description('创建vue移动端项目模版')  // 命令描述
  .action((projectName) => {
    projectName=projectName.trim()
    if(projectName){
      inquirer.prompt(vuePromptList).then(async (answers) => {
        cloneCode("github:huyafei/vue-mobile-template", projectName,answers)
      })
    }
  })

program.command('create-vue-admin-template <projectName>')  //配置命令的名字 参数必选用<>，非必选用[]
  .alias('cvat') // 用于 执行命令的别名
  .description('创建vue后台管理项目模版')  // 命令描述
  .action((projectName) => {
    projectName=projectName.trim()
    if(projectName){
      inquirer.prompt(vuePromptList).then(async (answers) => {
        cloneCode("github:huyafei/vue-admin-template", projectName,answers)
      })
    }
  })

/**
 * process.argv 返回数组 [0]node.exe路劲  [1]正在执行的 JavaScript 文件的路径  [*]命令行参数
 * http://nodejs.cn/api/process/process_argv.html
 */
program.parse(process.argv);

//program.args  返回没有使用的选项 格式[]
if (!program.args.length) {
  program.help()
}
