const fs = require('fs-extra');
const {writeFile} = require('./file')
/**
 * 修改 json 文件中内容
 * @param filePath {string} 文件路径
 * @param _data {Object} 修改的内容
 */
const setJsonFile = function (filePath, _data) {
  // 读取 package.json 文件内容
  const jsonContent = fs.readFileSync(filePath, "utf-8")
  const _jsonContent = JSON.parse(jsonContent)
  Object.keys(_data).forEach(key => {
    _jsonContent[key] = _data[key]
  })
  writeFile(filePath, JSON.stringify(_jsonContent, null, 2));
};
module.exports = setJsonFile
