const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
  // 生产模式
  mode: 'production',
  // 开发工具，开启 source map，编译调试
  devtool: 'source-map',
  module: {},
  output: {
    filename: 'js/[name].[contenthash:8].js',
    clean: true,
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'img/[name].[contenthash:8].[ext]'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css'
    })
  ]
})
