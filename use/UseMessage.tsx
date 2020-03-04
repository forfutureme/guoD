/**
 * @format
 * @Author: Firmiana
 * @Date: 2020-03-04 11:01:28
 * @Desc: 使用Message
 */
import React, {useState} from 'react'
import Message, {message} from '@lib/message/Message'
import Button from '@lib/button/Button'

const UseMessage: React.FC = () => {
  const [vMsg, setVMsg] = useState(false)

  return (
    <div className="message-use">
      <Button
        theme="primary"
        onClick={() => {
          setVMsg(!vMsg)
        }}>
        Message弹框
      </Button>
      <Button
        theme="primary"
        onClick={() => {
          message({
            text: 'hh , this is a Msg ~ 哈哈哈',
            type: 'warning',
            icon: true,
            dismissible: false,
            time: 3000
          })
        }}>
        Msg弹框
      </Button>
      <Button
        theme="primary"
        onClick={() => {
          message.success({
            text: 'hh , this is a success Msg ~ 哈哈哈'
          })
        }}>
        Msg 成功弹框
      </Button>
      <Message
        visible={vMsg}
        type="warning"
        icon={true}
        dismissible={false}
        time={3000}>
        hh , this is a message ~ 哈哈哈
      </Message>
    </div>
  )
}

export default UseMessage
