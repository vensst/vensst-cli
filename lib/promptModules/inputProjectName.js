/**
 * @name: inputProjectName
 * @description：inputProjectName.js
 * @date: 2022/10/18 16:14
 * @author: yf_hu
 */
const inquirer = require("inquirer");
const selectProject = require("./selectProject")

const inputProjectName = (args) => {
  // 初始参数
  const initParams = {
    type: 'input',
    name: 'projectName',
    message: 'Project name:',
    // default: '',
    filter(val) {
      return val.trim()
    },
    validate(val) {
      if(val){
        const validate = (val.trim().split(" ")).length === 1;
        return validate || 'There can be no Spaces between the project names！';
      }else return 'The project name is mandatory'

    },
    // transformer(val) {
    //   console.log(3,val)
    //   return val;
    // }
  }


  inquirer
    .prompt(initParams)
    .then(async (answers) => {
      selectProject({...args, ...answers,})
    })
}

module.exports = (args) => {
  inputProjectName(args)
}
