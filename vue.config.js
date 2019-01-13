const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // resolve: {
  //   alias: {
  //     '@': resolve('src'),
  //     _com: resolve('src/components'),
  //     _styles: resolve('src/assets/styles'),
  //     _img: resolve('src/assets/images')
  //   }
  // }  // cli3.XX无效需要以下去间接修改
  chainWebpack: config => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('_com', resolve('src/components'))
        .set('_styles', resolve('src/assets/styles'))
        .set('_img', resolve('src/assets/images'))
        .set('_page', resolve('src/pages'))
  },
}