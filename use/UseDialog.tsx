/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-12 07:45:10
 * @Desc: 使用Dialog
 */
import React, {useState} from 'react'
import Button from '@lib/button/Button'
import Dialog, {model, alert, confrim} from '@lib/dialog/Dialog'

const UseDialog: React.FC = () => {
  const [vOne, setVOne] = useState(false)
  const [vTwo, setVTwo] = useState(false)
  return (
    <div className="dialog-use">
      <h3>dialog</h3>
      <div className="dialog-area">
        <div className="dialog-area-normal">
          <Button
            onClick={() => {
              setVOne(!vOne)
            }}>
            普通Dialog
          </Button>
          <Dialog
            visible={vOne}
            title="基础Dialog"
            // maskCloseOn={true}
            closeFn={() => {
              setVOne(false)
            }}>
            最普通的Dialog
          </Dialog>
        </div>
        <div className="dialog-area-btn">
          <Button
            onClick={() => {
              setVTwo(!vTwo)
            }}>
            有Button的Dialog
          </Button>
          <Dialog
            visible={vTwo}
            title="基础Dialog"
            maskCloseOn={true}
            closeFn={() => {
              setVTwo(false)
            }}
            buttons={[
              <Button key="cancel" onClick={() => setVTwo(false)}>
                取消
              </Button>,
              <Button key="sure" theme="primary" onClick={() => setVTwo(false)}>
                确定
              </Button>
            ]}>
            最普通的Dialog
          </Dialog>
        </div>
        <div className="dialog-area-model">
          <Button
            onClick={() => {
              model({
                content: 'Model'
              })
            }}>
            model方法
          </Button>
        </div>
        <div className="dialog-area-alert">
          <Button
            onClick={() => {
              alert('alert')
            }}>
            alert方法
          </Button>
        </div>
        <div className="dialog-area-confrim">
          <Button
            onClick={() => {
              confrim({
                content: 'confrim',
                yes: () => {}
              })
            }}>
            confrim方法
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UseDialog
