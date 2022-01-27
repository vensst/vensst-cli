/**
 * @name: cliType
 * @description：cliType.js
 * @date: 2022/1/24 9:32
 * @author: yf_hu
 */
const inquirer = require("inquirer");
const tplType = require("../vue/templateType");
module.exports = (data) => {
  inquirer.prompt({
    type: 'list',
    message: '请选择构建工具:',
    name: 'cliType',
    default: "2",
    choices: [
      {
        name: "vue-cli",
        value: "1"
      },
      {
        name: "vite",
        value: "2"
      }
    ],
  }).then(async (answers) => {
    tplType({...data, ...answers})
  })
}
