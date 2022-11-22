/**
 * @name: selectProject
 * @description：selectProject.js
 * @date: 2022/10/19 10:16
 * @author: yf_hu
 */
const inquirer = require("inquirer");
const cloneCode = require("../util/cloneCode.js")
const DATA = require("../data");

const selectProject = (args) => {
  const initParams = {
    type: 'list',
    message: 'Choosing a development Project:',
    name: 'project',
    default: null,
    choices: [],
  }

  const projectList = DATA.projectList[args.frame]
  initParams.default = projectList[0]?.value
  initParams.choices = projectList


  inquirer.prompt(initParams).then(async (answers) => {
    const projectInfo = projectList.find(item => item.value === answers.project)
    const templateUrl = `${projectInfo.type}:${projectInfo.user}/${projectInfo.value.replace('@', '_')}-template`;
    await cloneCode({...args, ...answers, templateUrl})

    // if (item.type && item.user && item.templateName) {
    //   const link = `${item.type}:${item.user}/${item.templateName}`;
    //   console.log(link, args.projectName, {...args, ...answers})
    //   cloneCode(link, args.projectName, {...args, ...answers})
    // } else {
    //   console.log("非常抱歉，还没有该模板哦！")
    //   console.log("https://github.com/vensst/vensst-cli/issues")
    // }
  })
}
module.exports = (args) => {
  selectProject(args)
}
