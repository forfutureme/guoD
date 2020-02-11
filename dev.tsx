/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-08 09:18:32
 * @Desc: 开发时入口文件
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './dev.scss'

import Hello from '@lib/hello/Hello'
// import HelloEvent from '@lib/hello/HelloEvent'
// import HelloImage from '@lib/hello/HelloImage'
import Icon from '@lib/icon/Icon'

ReactDOM.render(
  <div className="main">
    <Hello />
    {/* <HelloEvent /> */}
    {/* <HelloImage /> */}
    <div className="icon-use">
      <h3>icon</h3>
      <div className="icon-area">
        <Icon name="qq" />
        <Icon name="loading" />
        <Icon name="close" style={{color: '#f00'}} />
      </div>
    </div>
  </div>,
  document.getElementById('app')
)
