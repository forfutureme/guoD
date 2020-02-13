/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-12 07:39:47
 * @Desc: 使用icon
 */
import React from 'react'
import Icon from '@lib/icon/Icon'

const UseIcon: React.FC = () => {
  return (
    <div className="icon-use">
      <h3>icon</h3>
      <div className="icon-area">
        <Icon name="qq" />
        <Icon name="loading" />
        <Icon name="close" style={{color: '#f00'}} />
      </div>
    </div>
  )
}

export default UseIcon
