/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-16 09:08:32
 * @Desc: Layout 使用
 */
import React from 'react'
import Layout, {Aside, Content, Header, Footer} from '@lib/layout/Layout'

const UseInput: React.FC = () => {
  return (
    <div className="use-layout">
      <h3>Layout</h3>
      <div className="layout-area">
        <h4>上中下Layout</h4>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
        <h4>上左右下</h4>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Aside>Aside</Aside>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        <h4>上右左下</h4>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Aside>Aside</Aside>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        <h4>左上中下</h4>
        <Layout>
          <Aside>Aside</Aside>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}

export default UseInput
