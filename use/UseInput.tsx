/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-14 07:13:29
 * @Desc: input组件使用示例
 */
import React, {useState} from 'react'

import Input from '@lib/input/Input'

const UseInput: React.FC = () => {
  const [value, setValue] = useState('text')
  return (
    <div className="ues-input">
      <h3>Input</h3>
      <div className="input-area">
        <h4>普通的input</h4>
        <Input
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
        />
        <h4>显示已输入字数和可输入字数input</h4>
        <Input
          value={value}
          count={true}
          maxLength={10}
          onChange={e => {
            setValue(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default UseInput
