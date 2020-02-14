/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-14 08:12:23
 * @Desc: Input组件单元测试
 */
import renderer from 'react-test-renderer'
import React from 'react'

import Input from '../Input'

describe('Input测试', () => {
  it('测试基本的input渲染', () => {
    const json = renderer.create(<Input />)
    expect(json).toMatchSnapshot()
  })
  it('测试限制输入长度的input', () => {
    const json = renderer.create(<Input maxLength={10} />)
    expect(json).toMatchSnapshot()
  })
  it('测试限制输入长度同时显示已输入字数的input', () => {
    const json = renderer.create(
      <Input maxLength={10} count={true} value="1" />
    )
    expect(json).toMatchSnapshot()
  })
})
