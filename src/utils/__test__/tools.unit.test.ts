/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-15 08:42:20
 * @Desc: 工具方法单元测试
 */
import {isEmpty, isNotEmpty} from '../tools'

describe('测试tools所有方法', () => {
  describe('测试isEmpty方法', () => {
    it('传入空字符串', () => {
      const result = isEmpty('')
      expect(result).toEqual(true)
    })
    it('传入null', () => {
      const result = isEmpty(null)
      expect(result).toEqual(true)
    })
    it('传入undefined', () => {
      const result = isEmpty(undefined)
      expect(result).toEqual(true)
    })
    it('插入有效字符串', () => {
      const result = isEmpty('abc')
      expect(result).toEqual(false)
    })
  })
  describe('测试isNotEmpty方法', () => {
    it('传入空字符串', () => {
      const result = isNotEmpty('')
      expect(result).toEqual(false)
    })
    it('传入null', () => {
      const result = isNotEmpty(null)
      expect(result).toEqual(false)
    })
    it('传入undefined', () => {
      const result = isNotEmpty(undefined)
      expect(result).toEqual(false)
    })
    it('插入有效字符串', () => {
      const result = isNotEmpty('abc')
      expect(result).toEqual(true)
    })
  })
})
