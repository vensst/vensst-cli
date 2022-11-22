/**
 * @name: getFiglet
 * @description: getFiglet.js
 * @date: 2022/11/21 14:43
 * @author: yf_hu
 */
const figlet = require('figlet');

/**
 * 文字效果
 * @param text
 * @return {Promise<unknown>}
 */
const getFiglet = async function (text) {
  return new Promise(function (resolve, reject) {
    figlet(text, function (err, data) {
      if (err) {
        console.log(err)
        return resolve('')
      }
      resolve(data)
    });
  })
}

module.exports = getFiglet
