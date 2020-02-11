/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-11 20:57:58
 * @Desc: Button 按钮
 */
import React from 'react'
import './button.scss'
import {prefixClass, joinClassName} from '@utils/classNameHandle'
const fixClass = prefixClass('guo-button')

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string
}

const Button: React.FC<props> = ({
  theme = 'default',
  className,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={joinClassName(fixClass(), fixClass(theme), className)}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  )
}

export default Button
