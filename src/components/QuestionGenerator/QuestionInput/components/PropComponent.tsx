import React, { useEffect } from 'react'
import { Form, Input } from 'antd'
import type { QuestionInputProps } from '../types'

const PropComponent = (props: QuestionInputProps) => {
  const { onChange, disabled, ...formProps } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(formProps)
  }, [formProps, form])

  const handleValuesChange = () => {
    onChange?.(form.getFieldsValue())
  }

  return (
    <Form layout="vertical" form={form} onValuesChange={handleValuesChange} disabled={disabled}>
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="提示文案" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default PropComponent
