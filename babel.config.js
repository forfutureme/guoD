/**
 * @format
 * @Author: huweijian
 * @Date: 2020-01-09 11:01:34
 * @Desc: babel配置
 */

module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: ['@babel/plugin-proposal-optional-chaining']
}
