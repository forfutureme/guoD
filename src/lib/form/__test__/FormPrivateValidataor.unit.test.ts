/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-15 09:39:39
 * @Desc: FormPrivateValidataor 单元测试
 */
import formPrivateValidataor from '../FormPrivateValidataor'
describe('测试表单验证方法', () => {
  it('测试name必填，传空', async () => {
    const result = await formPrivateValidataor({name: ''}, [
      {
        key: 'name',
        ruelList: [{required: true}]
      }
    ])
    expect(result.errMsg).toEqual('name不能为空')
  })
  it('测试name必填，传有效值', async () => {
    const result = await formPrivateValidataor({name: 'x'}, [
      {
        key: 'name',
        ruelList: [{required: true}]
      }
    ])
    expect(result.errMsg).toEqual(undefined)
  })
  it('测试name不必填，传空', async () => {
    const result = await formPrivateValidataor({name: ''}, [
      {
        key: 'name',
        ruelList: [{required: false}]
      }
    ])
    expect(result.errMsg).toEqual(undefined)
  })
  it('测试name不必填，传有效值', async () => {
    const result = await formPrivateValidataor({name: 'x'}, [
      {
        key: 'name',
        ruelList: [{required: false}]
      }
    ])
    expect(result.errMsg).toEqual(undefined)
  })
  it('测试多个输入不能为空', async () => {
    const result = await formPrivateValidataor({name: 'x', sex: 's'}, [
      {
        key: 'name',
        ruelList: [{required: true}]
      },
      {
        key: 'sex',
        ruelList: [{required: true}]
      }
    ])
    expect(result.errMsg).toEqual(undefined)
  })
})
