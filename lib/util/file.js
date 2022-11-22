const fs = require('fs-extra');

/**
 * 判断是否存在某个文件
 * https://www.nodeapp.cn/fs.html#fs_fs_access_path_mode_callback
 * @param filePath {string}文件路劲
 * @return {boolean}
 */
const hasFile = function (filePath) {
  try {
    fs.accessSync(filePath)
    return true
  } catch (e) {
    return false
  }
}

/**
 * 删除文件
 * @param filePath
 * @returns {Promise<unknown>}
 */
const delFile = function (filePath) {
  try {
    fs.unlinkSync(filePath)
    return true
  } catch (e) {
    return false
  }
}

/**
 * 写入文件
 * @param answers
 * @param projectName
 */
const writeFile = function (filePath, content) {
  fs.writeFileSync(filePath, content)
}

module.exports = {
  hasFile,
  delFile,
  writeFile
}
