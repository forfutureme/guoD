/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-15 07:49:24
 * @Desc: 表单单纯版
 */
import React from 'react'

import Input from '@lib/input/Input'
import './FormPrivate.scss'
import {joinClassName, prefixClass} from '@utils/classNameHandle'
const fixClass = prefixClass('guo-form')
export type formDataProps = {
  [key: string]: any
}

interface props extends React.FormHTMLAttributes<HTMLFormElement> {
  formData: formDataProps
  fileds: Array<{name: string; label: string; input: {type: string}}>
  onSubmit: (info: formDataProps) => void
  button: React.ReactFragment
}

const FormPrivate: React.FC<props> = ({
  className,
  formData,
  fileds,
  onSubmit,
  button
}) => {
  const inputChange = (name: string, value: string) => {
    onSubmit({
      [name]: value
    })
  }
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }
  return (
    <form
      className={joinClassName(fixClass('private'), className)}
      onSubmit={submit}>
      {fileds.map(({name, label, input}) => (
        <div key={name} className="box">
          <label className="label">{label}</label>
          <Input
            type={input.type}
            value={formData[name]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputChange(name, e.target.value)
            }}
          />
        </div>
      ))}
      <div>{button}</div>
    </form>
  )
}

export default FormPrivate
