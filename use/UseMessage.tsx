/**
 * @format
 * @Author: Firmiana
 * @Date: 2020-03-04 11:01:28
 * @Desc: 使用Message
 */
import React, {useState} from 'react'
import Message from '@lib/message/Message'
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
        Msg弹框
      </Button>
      <Message visible={vMsg} type="warning" showIcon={true} deleteIcon={false}>
        hh , this is a message ~ 哈哈哈
      </Message>
    </div>
  )
}

export default UseMessage
