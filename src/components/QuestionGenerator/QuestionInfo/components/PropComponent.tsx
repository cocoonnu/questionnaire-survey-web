import React, { useEffect } from 'react'
import { Form, Input, Checkbox } from 'antd'
import type { QuestionInfoProps } from '../types'

const PropComponent = (props: QuestionInfoProps) => {
  const { title, desc, onChange, disabled, isTitleCenter, isParagraphCenter } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, desc, isParagraphCenter, isTitleCenter })
  }, [title, desc, form, isParagraphCenter, isTitleCenter])

  const handleValuesChange = () => {
    onChange?.(form.getFieldsValue())
  }

  return (
    <Form layout="vertical" onValuesChange={handleValuesChange} disabled={disabled} form={form}>
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入问卷标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="描述" name="desc">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="isTitleCenter" valuePropName="checked">
        <Checkbox>标题居中显示</Checkbox>
      </Form.Item>
      <Form.Item name="isParagraphCenter" valuePropName="checked">
        <Checkbox>描述居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
