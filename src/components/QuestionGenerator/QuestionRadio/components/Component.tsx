import React from 'react'
import { Typography, Radio, Space } from 'antd'
import { QuestionRadioDefaultProps } from '../types'
import type { QuestionRadioProps } from '../types'

const Component = (props: QuestionRadioProps) => {
  const {
    title,
    options = [],
    selectedValue,
    isVertical,
  } = { ...QuestionRadioDefaultProps, ...props }

  return (
    <div>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Radio.Group value={selectedValue}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options.map((opt) => {
            const { value, text } = opt || {}
            return (
              <Radio key={value} value={value}>
                {text}
              </Radio>
            )
          })}
        </Space>
      </Radio.Group>
    </div>
  )
}

export default Component
