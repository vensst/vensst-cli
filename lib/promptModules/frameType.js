/**
 * @name: frameType
 * @description：frameType.js
 * @date: 2022/1/21 16:10
 * @author: yf_hu
 */
const inquirer = require("inquirer");
const {exec} = require('child_process');
const cliType = require("./vue/cliType")

module.exports = (projectName) => {
  inquirer
    .prompt({
      type: 'list',
      message: '请选择框架类型:',
      name: 'frameType',
      default: "1",
      choices: [
        {
          name: "Vue",
          value: "1"
        },
        {
          name: "React (暂无)",
          value: "2"
        },
        {
          name: "Angular (暂无)",
          value: "3"
        }
      ],
    })
    .then(async (answers) => {
      if(answers.frameType === "1"){
        cliType({projectName,...answers})
      }else {
        console.log("非常抱歉，还没有该模板哦！")
        console.log("https://github.com/vensst/vensst-cli/issues")
      }
    })
}
