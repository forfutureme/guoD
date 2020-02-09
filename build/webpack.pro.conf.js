/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-08 09:01:28
 * @Desc: 生产时配置
 */

const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./webpack.base.conf')

module.exports = Object.assign({}, config, {
  mode: 'production',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: 'guoD',
    libraryTarget: 'umd'
  },
  plugins: baseConfig.plugins.concat([
    // 清空原构建后的文件夹
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    })
  ]),
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'React-dom'
    }
  }
})
