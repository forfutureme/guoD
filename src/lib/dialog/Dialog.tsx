/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-12 07:22:22
 * @Desc: 弹窗
 */
import ReactDOM from 'react-dom'
import React from 'react'
import Icon from '@lib/icon/Icon'
import Button from '@lib/button/Button'
import './dialog.scss'
import {prefixClass} from '@utils/classNameHandle'
const fixClass = prefixClass('guo-dialog')

interface props {
  visible: boolean
  title?: string
  closeFn: () => void
  maskCloseOn?: boolean
  buttons?: Array<React.FunctionComponent | React.ReactElement>
}

const Dialog: React.FC<props> = ({
  visible,
  title,
  maskCloseOn,
  closeFn,
  buttons,
  children
}) => {
  return ReactDOM.createPortal(
    visible ? (
      <div className={fixClass()}>
        <div
          className={fixClass('mask')}
          onClick={maskCloseOn && closeFn}></div>
        <div className={fixClass('content')}>
          {title && <div className={fixClass('title')}>{title}</div>}
          <div className={fixClass('close')} onClick={closeFn}>
            <Icon name="close" />
          </div>

          <div className={fixClass('main')}>{children}</div>
          {buttons && buttons.length && (
            <div className={fixClass('footer')}>
              {buttons.map((button, index) =>
                React.cloneElement(button as React.ReactElement, {key: index})
              )}
            </div>
          )}
        </div>
      </div>
    ) : null,
    document.body
  )
}

type modelProps = {
  content: React.ReactNode
  buttons?: Array<React.FunctionComponent | React.ReactElement>
}

export const model = (props: modelProps): (() => void) => {
  const {content, buttons} = props
  const div = document.createElement('div')
  const closeFn = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    // 卸载组建上相关属性
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = (
    <Dialog visible={true} closeFn={closeFn} buttons={buttons}>
      {content}
    </Dialog>
  )
  ReactDOM.render(component, div)

  return closeFn
}

export const alert = (content: string): void => {
  const buttons = [
    <Button key="close" onClick={() => closeFn()}>
      关闭
    </Button>
  ]
  const closeFn = model({content, buttons})
}

interface confrimProps extends modelProps {
  yes?: () => void
  no?: () => void
}

export const confrim = (props: confrimProps) => {
  const {content, yes, no} = props
  const buttons = [
    <Button
      key="yes"
      onClick={() => {
        closeFn()
        yes && yes()
      }}>
      yes
    </Button>,
    <Button
      key="no"
      onClick={() => {
        closeFn()
        no && no()
      }}>
      no
    </Button>
  ]
  const closeFn = model({content, buttons})
}

export default Dialog
