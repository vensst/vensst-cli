#!/usr/bin/env node
'use strict'

//解析node 输入的指令
const program = require('commander');

// 定义脚手架的文件路径，__dirname是当前文件所在的路径
process.env.NODE_PATH = __dirname + '/../node_modules/'

//版本
const {version} = require("../package.json")



program
  .version(version,'-v, --version','输出vensst-cli版本')
  .option("-h, --help",'显示命令帮助')

program
  .command('create <projectName>')
  .description('创建一个项目模版')
  .action((projectName) =>{
    require("../lib/create")(projectName)
  })


/**
 * process.argv 返回数组 [0]node.exe路劲  [1]正在执行的 JavaScript 文件的路径  [*]命令行参数
 * http://nodejs.cn/api/process/process_argv.html
 * program.parse()解析
 */
program.parse(process.argv);

//program.args  返回没有使用的选项 格式[]
if (!program.args.length) {
  program.help()
}
