/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-16 08:48:22
 * @Desc: Layout 布局组件
 */
import React from 'react'
import Aside from './Aside'
import './layout.scss'
import {joinClassName, prefixClass} from '@utils/classNameHandle'
const fixClass = prefixClass('guo-layout')

interface props extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FC<props> = ({className, children, ...rest}) => {
  const childrenArray = children as Array<React.ReactElement>
  const hasAside =
    childrenArray &&
    childrenArray.reduce &&
    childrenArray.reduce((result, node) => result || node.type === Aside, false)
  return (
    <div
      className={joinClassName(
        fixClass(),
        className,
        hasAside ? fixClass('has-aside') : ''
      )}
      {...rest}>
      {children}
    </div>
  )
}

export default Layout
export {default as Aside} from './Aside'
export {default as Content} from './Content'
export {default as Header} from './Header'
export {default as Footer} from './Footer'
