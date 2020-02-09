/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 14:05:56
 * @Desc: Icon 组件
 */
import React from 'react'
// 引入所有svg
import '@svg'
import './icon.scss'
import {prefixClass, joinClassName} from '@utils/classNameHandle'
const fixClass = prefixClass('guo-icon')

// 定义props 继承自React提供的SVG属性
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: React.FC<IconProps> = ({name, className, ...restProps}) => {
  return (
    <svg className={joinClassName(fixClass(), className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Icon
