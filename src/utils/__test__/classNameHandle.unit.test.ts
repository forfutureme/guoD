/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 15:02:56
 * @Desc: classNameHandle 单元测试文件
 */
import {joinClassName, prefixClass} from '../classNameHandle'
describe('测试classHandle文件', () => {
  describe('测试joinClassName方法', () => {
    it('接受一个className', () => {
      const result = joinClassName('abc')
      expect(result).toEqual('abc')
    })
    it('接受二个参数', () => {
      const result = joinClassName('a', 'b')
      expect(result).toEqual('a b')
    })
    it('接受包含undefined的参数', () => {
      const result = joinClassName('a', undefined)
      expect(result).toEqual('a')
    })
  })
  describe('测试prefixClass方法', () => {
    const fix = prefixClass('bui-dialog')
    it('不传参数', () => {
      const str = fix()
      expect(str).toEqual('bui-dialog')
    })
    it('传一个参数', () => {
      const str = fix('title')
      expect(str).toEqual('bui-dialog-title')
    })
    it('传多个参数', () => {
      const str = fix('title-close')
      expect(str).toEqual('bui-dialog-title-close')
    })
  })
})
