/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-16 10:10:18
 * @Desc: Layout单元测试
 */
import renderer from 'react-test-renderer'
import React from 'react'
import Layout, {Aside, Content, Header, Footer} from '../Layout'

describe('Layout测试', () => {
  it('测试Layout渲染', () => {
    const json = renderer
      .create(
        <Layout>
          <Aside></Aside>
          <Layout>
            <Header>Header</Header>
          </Layout>
        </Layout>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  it('测试Aside渲染', () => {
    const json = renderer.create(<Aside>Aside</Aside>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('测试Content渲染', () => {
    const json = renderer.create(<Content>Content</Content>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('测试Header渲染', () => {
    const json = renderer.create(<Header>Header</Header>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('测试Footer渲染', () => {
    const json = renderer.create(<Footer>Footer</Footer>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
