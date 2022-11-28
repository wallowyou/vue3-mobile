const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
  // 开发模式
  mode: 'development',
  devServer: {
    port: 9000,
    hot: true,
    open: true
  },
  module: {},
  output: {
    filename: '[name].js',
    clean: true,
    path: path.resolve(__dirname, '../dist/'),
    assetModuleFilename: 'images/[name].[ext]'
  }
})
