/**
 * @name: frame
 * @description：frame.js
 * @date: 2022/1/21 16:10
 * @author: yf_hu
 */
const inquirer = require("inquirer");
const DATA = require('../data.js')
const inputProjectName = require("./inputProjectName");

const selectFrame = () => {
  // 初始参数
  const initParams = {
    type: 'list',
    message: 'Select a frame:',
    name: 'frame',
    default: null,
    choices: [],
  }

  initParams.default = DATA.frameList[0]?.value
  initParams.choices = DATA.frameList

  inquirer
    .prompt(initParams)
    .then(async (answers) => {
      inputProjectName(answers)
    })
}

module.exports = () => {
  selectFrame()
}
