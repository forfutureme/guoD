/**
 * @format
 * @Author: Firmiana
 * @Date: 2020-03-04 10:37:28
 * @Desc: Message
 * @TODO: 1.高度可变 2.边框(类型/颜色/圆角/属性) 3.主题？ 4.背景透明度
 * @TODO: 5.Icon(自定义/大图标) 6.文本属性 7.关闭(icon属性/文本) 8.过渡效果
 */
import ReactDOM from 'react-dom'
import React, {useEffect, useState} from 'react'
import './Message.scss'
import {prefixClass, joinClassName} from '@utils/classNameHandle'
import '@svg'

const fixClass = prefixClass('guo-message')

/**
 * @interface props
 * @visible 指定是否显示
 * @type 指定类型
 * @icon 指定显示图标
 * @dismissible 添加一个可以关闭警报的图标
 * @time 指定存在时间
 * @closeFunc Msg提供的关闭回调
 */
interface props {
  visible: boolean
  type?: string
  icon?: boolean
  dismissible?: boolean
  time?: number
  closeFunc?: () => void
}

const Message: React.FC<props> = ({
  visible,
  type = 'info',
  icon = true,
  dismissible = false,
  time = 3000,
  children = '',
  closeFunc
}) => {
  icon = children && icon
  dismissible = children && dismissible
  const [visibleLocal, setVisibleLocal] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      if (!dismissible) {
        setVisibleLocal(false)
      }
    }, time)
  }, [])
  return ReactDOM.createPortal(
    visible && visibleLocal ? (
      <div className={joinClassName(fixClass(), fixClass(type))}>
        {icon ? (
          <svg className={joinClassName(fixClass('icon'))}>
            <use xlinkHref={'#' + type} />
          </svg>
        ) : null}
        <p className={joinClassName(fixClass('content'))}>{children}</p>
        {dismissible ? (
          <svg
            className={joinClassName(fixClass('delete-icon'))}
            onClick={visibleLocal && closeFunc}>
            <use xlinkHref="#cancel" />
          </svg>
        ) : null}
      </div>
    ) : null,
    document.body
  )
}

/**
 * @text 指定内容
 * @type 指定类型
 * @icon 指定显示图标
 * @dismissible 添加一个可以关闭警报的图标
 * @time 指定存在时间
 */
type msgProps = {
  text?: React.ReactNode
  dismissible?: boolean
  type?: string
  icon?: boolean
  time?: number
}

const message = (props: msgProps): (() => void) => {
  const {text, dismissible, type, icon, time} = props
  const div = document.createElement('div')
  const closeFunc = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    // 卸载组建上相关属性
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = (
    <Message
      visible={true}
      closeFunc={closeFunc}
      dismissible={dismissible}
      icon={icon}
      time={time}
      type={type}>
      {text}
    </Message>
  )
  ReactDOM.render(component, div)
  return closeFunc
}
message.abc = () => {}
export {message}

export default Message
