/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-08 09:18:32
 * @Desc: 开发时入口文件
 */

import React from 'react'
import ReactDOM from 'react-dom'

import Hello from '@lib/hello/Hello'

ReactDOM.render(
  <div className="main">
    <Hello />
  </div>,
  document.getElementById('app')
)
