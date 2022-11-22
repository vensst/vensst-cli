const {hasFile, delFile, writeFile} = require('./file')
const description = {
  introduce:"该模版是通过 [vensst-cli](https://huyafei.github.io/yfhu-blog/cli/)中下载的模板"
}
const generateReadme = async function (filePath, args) {
  const content = [
    `# ${args.projectName}`,
    `${description.introduce}\n`,
    '## Use',
    '### Project setup',
    '```',
    `npm install`,
    '```',
    '### Compiles and hot-reloads for development',
    '```',
    `npm run dev`,
    '```',
    '### Compiles and minifies for production',
    '```',
    '// 生产测试环境',
    `npm run build:uat`,
    '// 生产正式环境',
    `npm run build`,
    '```',
    `### Lints and fixes files`,
    '```',
    `npm run lint`,
    '```',
    ''
  ].join('\n')
  if (hasFile(filePath)) {
    await delFile(filePath)
  }
  writeFile(filePath, content)
}

module.exports = generateReadme
