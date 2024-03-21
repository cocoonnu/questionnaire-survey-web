import React, { useEffect } from 'react'
import { nanoid } from 'nanoid'
import { Form, Input, Checkbox, Select, Button } from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
import type { QuestionCheckboxProps, OptionType } from '../types'

const PropComponent = (props: QuestionCheckboxProps) => {
  const { title, isVertical, selectedValue, options = [], onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, isVertical, selectedValue, options })
  }, [title, isVertical, selectedValue, options, form])

  const handleValuesChange = () => {
    const { options, selectedValue } = form.getFieldsValue()
    // 将text和value的值相等
    const newOptions = options.map((item) => ({ ...item, value: item.text }))
    form.setFieldsValue({ options: newOptions })

    // 当删除的是下面默认选中的选项数组里面的值，则需要将数组对应的值删除
    const newSelectedValue = selectedValue.filter((item) =>
      options.find((option) => option?.value === item),
    )
    form.setFieldValue('selectedValue', newSelectedValue)
    onChange?.(form.getFieldsValue())
  }

  const renderOptionsItem = (field, remove) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Form.Item
          noStyle
          name={[field.name, 'text']}
          validateTrigger={['onChange', 'onBlur']}
          rules={[
            {
              required: true,
              message: '请输入选项文字',
            },
            {
              validator: (_, text) => {
                if (!text) return Promise.resolve()
                const { options: optionsValue = [] } = form.getFieldsValue()
                const num = optionsValue.filter((opt: OptionType) => opt.text === text).length
                if (num === 1) return Promise.resolve()
                return Promise.reject(new Error('选项文字与其他选项重复了'))
              },
            },
          ]}
        >
          <Input placeholder="请输入选项文字" style={{ width: '90%' }} />
        </Form.Item>

        {field?.key === 0 ? null : <MinusCircleOutlined onClick={() => remove(field?.name)} />}
      </div>
    )
  }

  const renderAddOptionBtn = (add) => {
    return (
      <Form.Item>
        <Button
          type="primary"
          onClick={() => {
            add({ text: '', value: nanoid() })
            form.validateFields()
          }}
          style={{ width: '100%' }}
          icon={<PlusOutlined />}
        >
          添加选项
        </Button>
      </Form.Item>
    )
  }

  return (
    <Form layout="vertical" onValuesChange={handleValuesChange} disabled={disabled} form={form}>
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>

      <Form.List name="options">
        {(fields, { add, remove }) => (
          <Form.Item label="选项" required={true}>
            {fields.map((field) => (
              <Form.Item key={field.key}>{renderOptionsItem(field, remove)}</Form.Item>
            ))}
            {renderAddOptionBtn(add)}
          </Form.Item>
        )}
      </Form.List>

      <Form.Item label="默认选中" name="selectedValue">
        <Select
          allowClear
          mode="multiple"
          value={selectedValue}
          options={options
            .map(({ text, value }) => ({ value, label: text || '' }))
            .filter((item) => item.label)}
        />
      </Form.Item>
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
