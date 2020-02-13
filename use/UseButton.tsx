/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-12 07:43:06
 * @Desc: 使用Button
 */
import React from 'react'
import Button from '@lib/button/Button'

const UseButton: React.FC = () => {
  return (
    <div className="button-use">
      <h3>button</h3>
      <div className="button-area">
        <Button>默认</Button>
        <Button
          theme="primary"
          onClick={() => {
            console.log(123)
          }}>
          提交
        </Button>
        <Button theme="error">Error</Button>
      </div>
    </div>
  )
}

export default UseButton
