/**
 * @name: data.js
 * @description：data.js
 * @date: 2022/10/18 14:08
 * @author: yf_hu
 */
const frameList = [
  {
    name: "vue@2",
    value: "vue@2"
  },
  {
    name: "vue@3",
    value: "vue@3"
  }
]
const projectList = {
  'vue@2': [
    {
      name: "vue2.x + vue-cli5.x (移动)",
      value: "vue@2-cli-mobile",
      description: "vue2.x + vue-cli5.x 移动端开发模板",
      frame: "vue@2",
      buildType: "cli",
      platformType: "mobile",
      type: "github",
      user: "huyafei",
    },
    {
      name: "vue2.7.x + vite3.x (移动)",
      value: "vue@2-vite-mobile",
      description: "vue2.7.x + vite3.x 移动端开发模板",
      frame: "vue@2",
      buildType: "vite",
      platformType: "mobile",
      type: "github",
      user: "huyafei",
    },
    {
      name: "vue2.x + vue-cli5.x (后台)",
      value: "vue@2-cli-admin",
      description: "vue2.x + vue-cli5.x 后台管理系统开发模板",
      frame: "vue@2",
      buildType: "cli",
      platformType: "admin",
      type: "github",
      user: "huyafei",
    },
    {
      name: "vue2.7.x + vite3.x (后台)",
      value: "vue@2-vite-admin",
      description: "vue2.7.x + vite3.x 后台管理系统开发模板",
      frame: "vue@2",
      buildType: "vite",
      platformType: "admin",
      type: "github",
      user: "huyafei",
    },
  ],
  'vue@3': [
    {
      name: "vue3.x + vue-cli5.x (移动)",
      value: "vue@3_cli_mobile",
      description: "vue3.x + vue-cli5.x 移动端开发模板",
      frame: "vue@3",
      buildType: "cli",
      platformType: "mobile",
      type: "github",
      user: "huyafei",
    },
    {
      name: "vue3.x + vite3.x (移动)",
      value: "vue@3-vite-mobile",
      description: "vue3.x + vite3.x 移动端开发模板",
      frame: "vue@3",
      buildType: "vite",
      platformType: "mobile",
      type: "github",
      user: "huyafei",
    },
    {
      name: "vue3.x + vue-cli5.x (后台)",
      value: "vue@3-cli-admin",
      description: "vue3.x + vue-cli5.x 后台管理系统开发模板",
      frame: "vue@3",
      buildType: "cli",
      platformType: "admin",
      type: "github",
      user: "huyafei",
    },
    {
      name: "vue3.x + vite3.x (后台)",
      value: "vue@3-vite-admin",
      description: "vue3.x + vite3.x 后台管理系统开发模板",
      frame: "vue@3",
      buildType: "vite",
      platformType: "admin",
      type: "github",
      user: "huyafei",
    }
  ]
}


module.exports = {
  frameList,
  projectList
}
