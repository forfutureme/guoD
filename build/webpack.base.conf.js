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
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.svg', '.scss'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@lib': path.resolve(__dirname, '../src/lib'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@image': path.resolve(__dirname, '../src/assets/image'),
      '@svg': path.resolve(__dirname, '../src/assets/svg'),
      '@scss': path.resolve(__dirname, '../src/assets/scss')
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
      },
      // 图片 音频文件
      {
        test: /\.(png|jpg|jpeg|gif|mp3)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]?[hash]'
            }
          }
        ]
      },
      // svg
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {}
          }
        ]
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name].[ext]?[hash]'
            }
          }
        ]
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
