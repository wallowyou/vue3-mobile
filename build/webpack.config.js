const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode:"production",
  // 入口文件
  entry: path.resolve(__dirname, '../src/index.js'),
  // 打包输出
  output: {
    filename: '[name].bundle.js',
    clean: true,
    path: path.resolve(__dirname, '../dist/')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','less-loader'],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','sass-loader'],
      }
    ]
  },
  plugins: [   
    new HtmlWebpackPlugin({ 
      template: path.resolve(__dirname, '../public/index.html') ,
      title: '测试'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
  })
  ]
}