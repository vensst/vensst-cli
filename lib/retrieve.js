/**
 * @name: selectFrame
 * @description：selectFrame.js
 * @date: 2022/10/18 15:48
 * @author: yf_hu
 */
const selectFrame = require("./promptModules/selectFrame")
const inputProjectName = require("./promptModules/inputProjectName")
const DATA = require('./data.js')

const retrieve = (projectType) => {
  if (projectType) {
    const _projectType = projectType.toLowerCase();
    const frame = DATA.frameList.find(item => item.name === _projectType)
    if (frame) {
      inputProjectName({frame: frame.value})
    } else {
      console.log(`暂时没有${projectType}框架模板，请从下面选择。`)
      selectFrame()
    }

  } else {
    selectFrame()
  }
}


module.exports = (args) => {
  retrieve(args)
}
