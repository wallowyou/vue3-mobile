const path = require('path');
const chalk = require('chalk');
const devMode = process.env.NODE_ENV==='development'
// 提示消息美化
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  entry: {
    app: [
      './src/main.ts'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'../src')
    },
    extensions: ['.ts', '.js', '.tsx', '.vue', '.json','.d.ts'],
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader',  exclude: /node_modules/},
      {
        test: /\.[jt]s$/,
        use: {
          loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015'
            },
        },
        exclude: /node_modules/,
      },  
      // {
      //   test: /\.[jt]s$/,
      //   use: {
      //       loader: 'ts-loader',
      //       options: {
      //           appendTsSuffixTo: [/\.vue$/],
      //       },
      //   },
      //   exclude: /node_modules/,
      // },  
      {
        test: /\.css$/i,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader','postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','less-loader'],
      },
      {
        test: /\.s(c|a)ss$/i,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'   
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  optimization: {
    removeEmptyChunks: false,
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
  },
  
  plugins: [
    // 进度条
    new ProgressBarPlugin({
      format: `:msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
    new HtmlWebpackPlugin({ 
      template: path.resolve(__dirname, '../public/index.html') ,
      title: '测试'
    }),
    new VueLoaderPlugin()
  ],
}