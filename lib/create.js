/**
 * @name: create
 * @description：create.js
 * @date: 2022/1/21 17:34
 * @author: yf_hu
 */
const frameType = require('../lib/promptModules/frameType.js')
const create = (name) => {
  frameType(name)
}
module.exports = (...args) => {
  create(...args)
}
