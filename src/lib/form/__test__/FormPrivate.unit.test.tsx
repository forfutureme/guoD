/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-15 10:41:46
 * @Desc: FormPrivate 单元测试
 */
import renderer from 'react-test-renderer'
import React from 'react'
import FormPrivate from '../FormPrivate'

describe('formPrivate测试', () => {
  it('测试formPrivate渲染', () => {
    const formData = {
      name: ''
    }
    const fileds = [
      {
        label: '姓名',
        name: 'name',
        input: {type: 'text'}
      }
    ]
    const json = renderer
      .create(
        <FormPrivate
          formData={formData}
          fileds={fileds}
          onSubmit={() => {}}
          button={<></>}
        />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
