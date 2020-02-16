/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-16 08:48:22
 * @Desc: Aside 布局组件
 */
import React from 'react'

import {joinClassName, prefixClass} from '@utils/classNameHandle'
const fixClass = prefixClass('guo-layout')

interface props extends React.HTMLAttributes<HTMLElement> {}

const Coontent: React.FC<props> = ({className, children, ...rest}) => {
  return (
    <div className={joinClassName(fixClass('content'), className)} {...rest}>
      {children}
    </div>
  )
}

export default Coontent
