/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-08 08:50:29
 * @Desc: webpack基础配置
 */

const path = require('path')
const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const env = process.env.NODE_ENV
const port = process.env.port
if (env) {
  console.log(
    chalk.cyan(
      ' Starting the ' +
        chalk.bgGreen(chalk.black(`${env || ' develop '}`)) +
        ' env...'
    )
  )
}
module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.svg'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@lib': path.resolve(__dirname, '../src/lib')
    }
  },
  module: {
    // unknownContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      // scss样式文件
      {
        test: /\.s(c|a)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  // 插件
  plugins: [
    new ProgressBarPlugin({
      format:
        chalk.green.bold('✔ Webpack') +
        ' [:bar] ' +
        chalk.green.bold(':percent') +
        ' (:elapsed seconds)',
      clear: false,
      width: 40,
      callback: () => {
        if (port) {
          console.log(
            '  App running at:  ' + chalk.cyan(`http://localhost:${port}/`)
          )
        }
      }
    })
  ],
  // 打印信息
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}
