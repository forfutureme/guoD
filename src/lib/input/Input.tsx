/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-13 08:40:49
 * @Desc: Input 组件
 */
import React from 'react'
import './input.scss'
import {prefixClass, joinClassName} from '@utils/classNameHandle'
const fixClass = prefixClass('guo-input')
interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  count?: boolean
  type?: string
}
const Input: React.FC<props> = ({
  className,
  type = 'text',
  count = false,
  value,
  maxLength,
  ...rest
}) => {
  return (
    <div className={fixClass('box')}>
      <input
        className={joinClassName(fixClass(), className)}
        type={type}
        value={value}
        maxLength={maxLength}
        {...rest}
      />
      {count && maxLength && (
        <span className={fixClass('num')}>
          {value.toString().length}/{maxLength}
        </span>
      )}
    </div>
  )
}
export default Input
