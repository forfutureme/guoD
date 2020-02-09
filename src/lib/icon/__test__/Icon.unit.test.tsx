/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 15:56:56
 * @Desc: icon 单元测试文件
 */
import renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import React from 'react'
import Icon from '../Icon'

describe('Icon单元测试', () => {
  it('测试icon普通渲染', () => {
    const json = renderer.create(<Icon name="qq" />).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('测试icon的点击事件', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="qq" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})
