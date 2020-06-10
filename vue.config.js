//配置多页面
const glob = require('glob')
function getEntry(url) {
  let entrys = {}
  glob.sync(url).forEach(item => {
    // splice(-3)取数组后三项
    let urlArr = item.split('/').splice(-3)
    entrys[urlArr[1]] = {
      entry: 'src/pages/' + urlArr[1] + '/' + 'index.js',
      template: 'src/pages/' + urlArr[1] + '/' + 'index.html',
      filename: urlArr[1] + '.html',
      title: 'pages-' + urlArr[1]
    }
  })
  return entrys
}
let pages = getEntry('./src/pages/**?/*.html')
module.exports = {
  pages,
  assetsDir:'./',
  publicPath:'/dianzi/'
}

//代替原来的webpack.base.config，别名
// const path = require('path');
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   lintOnSave: true,
//   chainWebpack: (config) => {
//     config.resolve.alias
//         .set('@$', resolve('src'))
//         .set('assets', resolve('src/assets'))
//         .set('components', resolve('src/components'))
//     // .set('layout',resolve('src/layout'))
//     // .set('base',resolve('src/base'))
//     // .set('static',resolve('src/static'))
//   }
// }
