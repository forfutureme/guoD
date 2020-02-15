/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-15 09:43:57
 * @Desc: 使用 Form
 */
import React, {useState} from 'react'

// eslint-disable-next-line no-unused-vars
import FormPrivate, {formDataProps} from '@lib/form/FormPrivate'
import Button from '@lib/button/Button'
import formPrivateValidataor from '@lib/form/formPrivateValidataor'

const UseFormPrivate: React.FC = () => {
  const [formData, setFormData] = useState<formDataProps>({
    name: ''
  })
  const fileds = [
    {
      label: '姓名',
      name: 'name',
      input: {type: 'text'}
    }
  ]
  const updateForm = (item: formDataProps) => {
    setFormData({
      ...formData,
      ...item
    })
  }
  const submit = async (item: formDataProps) => {
    const result = await formPrivateValidataor(item, [
      {
        key: 'name',
        ruelList: [
          {
            required: true
          }
        ]
      }
    ])
    console.log('result', result)
  }
  return (
    <div className="use-form">
      <h3>Form</h3>
      <div className="form-area">
        <h4>form private</h4>
        <FormPrivate
          formData={formData}
          fileds={fileds}
          onSubmit={item => {
            updateForm(item)
          }}
          button={
            <>
              <Button
                theme="primary"
                onClick={() => {
                  submit(formData)
                }}>
                提交
              </Button>
            </>
          }
        />
      </div>
    </div>
  )
}

export default UseFormPrivate
