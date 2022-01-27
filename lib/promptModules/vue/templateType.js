/**
 * @name: template
 * @description：template.js
 * @date: 2022/1/21 15:51
 * @author: yf_hu
 */
const inquirer = require("inquirer");
const {cloneCode} = require("../../../lib/utils.js")
module.exports = (data) => {
  const promptList = {
    type: 'list',
    message: '模板类型:',
    name: 'templateType',
    default: "1",
    choices: [],
  }
  let list = []
  if (data.frameType === "1") {
    if (data.cliType === "1") {
      list = [
        {
          name: "Mobile (vue 2x)",
          value: "1",
          link: "github:huyafei/vue-mobile-template"
        },
        {
          name: "Mobile (vue 3x)",
          value: "2",
          link: "github:huyafei/vue3-mobile-template"
        },
        {
          name: "Admin (vue 2x)",
          value: "3",
          linkL: "github:huyafei/vue-admin-template"
        },
        {
          name: "Admin (vue 3x) (暂无)",
          value: "4",
          link: ""
        }
      ]

    } else if (data.cliType === "2") {
      list = [
        {
          name: "Mobile",
          value: "1",
          link: "github:huyafei/vite-mobile-template"
        },
        {
          name: "Admin (暂无)",
          value: "2",
          link: ""
        }
      ]
    }
  }
  promptList.choices.push(...list)
  inquirer.prompt(promptList).then((answers) => {
    let item = promptList.choices.find((item) => item.value === answers.templateType)
    if (item?.link) {
      cloneCode(item?.link, data.projectName, {...data, ...answers})
    } else {
      console.log("非常抱歉，还没有该模板哦！")
      console.log("https://github.com/vensst/vensst-cli/issues")
    }
  })
}
