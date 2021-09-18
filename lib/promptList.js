'use strict'
const vuePromptList = [
  {
    type: 'list',
    message: '使用哪种包管理器安装依赖:',
    name: 'installType',
    choices: [
      "yarn",
      "npm",
      "cnpm",
    ],
  },
  {
    type: "confirm",
    message: "是否自动首次进行依赖安装?",
    name: "isAutoInstall",
  }
];

module.exports={
  vuePromptList
}
