/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-15 08:40:53
 * @Desc: 工具类方法
 */
/**
 * 判断字符串是否为空
 * @param str
 */
export const isEmpty = (str: any) =>
  str === '' || str === null || str === undefined
/**
 * 判断字符串是否不为空
 * @param str
 */
export const isNotEmpty = (str: any) => !isEmpty(str)
