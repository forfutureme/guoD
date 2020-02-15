/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-15 08:48:02
 * @Desc: FormPrivate 对应的验证器
 */
import {isEmpty, isNotEmpty} from '@utils/tools'
// eslint-disable-next-line no-unused-vars
import {formDataProps} from './FormPrivate'
interface ruleDetail {
  required?: boolean
  minLength?: number
  maxLength?: number
  reg?: RegExp
  validate?: (name: string) => Promise<boolean>
}
interface rulesProps {
  key: string
  ruelList: Array<ruleDetail>
}
type dataRules = Array<rulesProps>
interface ErrorType {
  [key: string]: string
}
const formPrivateValidataor = async (
  formData: formDataProps,
  rules: dataRules
): Promise<any> => {
  let error = {}
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]
    const key = rule.key
    const ruelList = rule.ruelList
    if (ruelList.length) {
      for (let j = 0; j < ruelList.length; j++) {
        const item = ruelList[j]
        // console.log('item', item)
        const value = formData[key]
        // console.log('value', value, isEmpty(value))
        if (item.required && isEmpty(value)) {
          // console.log('是空')
          return {errMsg: `${key}不能为空`}
        }
        if (item.validate && isNotEmpty(value)) {
          const res = await item.validate(value)
          return {errMsg: res ? `${key}已存在` : undefined}
        }
      }
    }
  }
  return error
}
export default formPrivateValidataor
