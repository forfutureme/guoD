/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-11 21:52:03
 * @Desc: 按钮 单元测试
 */
import renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import React from 'react'
import Button from '../Button'

describe('Button测试', () => {
  it('测试Button渲染', () => {
    const json = renderer.create(<Button />)
    expect(json).toMatchSnapshot()
  })
  it('测试Button点击事件', () => {
    const fn = jest.fn()
    const component = mount(<Button onClick={fn} />)
    component.find('button').simulate('click')
    expect(fn).toBeCalled()
  })
})
