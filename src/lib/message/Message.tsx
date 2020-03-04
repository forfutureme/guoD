/**
 * @format
 * @Author: Firmiana
 * @Date: 2020-03-04 10:37:28
 * @Desc: Message
 */

import React from 'react'
import './Message.scss'
import {prefixClass, joinClassName} from '@utils/classNameHandle'
const fixClass = prefixClass('guo-message')
import '@svg'

interface props {
  visible: boolean
  type?: string
  showIcon: boolean
  deleteIcon: boolean
}

const Message: React.FC<props> = ({
  visible,
  type = 'info',
  showIcon = true,
  deleteIcon = false,
  children
}) => {
  return visible ? (
    <div className={joinClassName(fixClass(), fixClass(type))}>
      {showIcon ? (
        <svg className={joinClassName(fixClass('icon'))}>
          <use xlinkHref={'#' + type} />
        </svg>
      ) : null}
      <p className={joinClassName(fixClass('content'))}>{children}</p>
      {deleteIcon ? (
        <svg
          className={joinClassName(fixClass('delete-icon'))}
          onClick={() => {
            // console.log('关闭Msg')
          }}>
          <use xlinkHref="#cancel" />
        </svg>
      ) : null}
    </div>
  ) : null
}

export default Message
