/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-13 08:01:52
 * @Desc: Dialog单元测试
 */
// import renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import React from 'react'
import Dialog from '../Dialog'

describe('Dialog测试', () => {
  // it('dialog-基本渲染', () => {
  //   const json = renderer.create(
  //     <Dialog visible={true} closeFn={() => {}}>
  //       单元测试
  //     </Dialog>
  //   )
  //   expect(json).toMatchSnapshot()
  // })
  it('dialog-关闭事件', () => {
    const fn = jest.fn()
    const component = mount(
      <Dialog visible={true} closeFn={fn}>
        关闭事件
      </Dialog>
    )
    component.find('.guo-dialog-close').simulate('click')
    expect(fn).toBeCalled()
  })
})
