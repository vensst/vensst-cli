/**
 * @name: create
 * @description：create.js
 * @date: 2022/1/21 17:34
 * @author: yf_hu
 */

const retrieve = require('./retrieve.js')

/**
 * @name: create
 * @param projectType {string} 项目类型
 */
const create = (projectType) => {
  retrieve(projectType)
}

module.exports = (args) => {
  create(args)
}
