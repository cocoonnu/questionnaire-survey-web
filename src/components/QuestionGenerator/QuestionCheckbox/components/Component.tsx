import React from 'react'
import { Typography, Checkbox, Space } from 'antd'
import { QuestionCheckboxDefaultProps } from '../types'
import type { QuestionCheckboxProps } from '../types'

const Component = (props: QuestionCheckboxProps) => {
  const {
    title,
    options = [],
    selectedValue,
    isVertical,
  } = { ...QuestionCheckboxDefaultProps, ...props }

  return (
    <div>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Checkbox.Group value={selectedValue}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options.map((opt) => {
            const { value, label } = opt || {}
            return (
              <Checkbox key={value} value={value}>
                {label}
              </Checkbox>
            )
          })}
        </Space>
      </Checkbox.Group>
    </div>
  )
}

export default Component
