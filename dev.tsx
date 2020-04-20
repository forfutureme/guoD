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
import UseIcon from './use/UseIcon'
import UseButton from './use/UseButton'
import UseDialog from './use/UseDialog'
import UseInput from './use/UseInput'
import UseFormPrivate from './use/UseFormPrivate'
import UseLayout from './use/UseLayout'
import UseMessage from './use/UseMessage'
import TestReactNode from './src/testNode'

ReactDOM.render(
  <div className="main">
    <Hello />
    {/* <HelloEvent /> */}
    {/* <HelloImage /> */}
    <UseIcon />
    <UseButton />
    <UseDialog />
    <UseInput />
    <UseFormPrivate />
    <UseLayout />
    <UseMessage />
    <TestReactNode />
  </div>,
  document.getElementById('app')
)
