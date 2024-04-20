import React from 'react'
import { Typography, Select } from 'antd'
import { QuestionSelectDefaultProps } from '../types'
import type { QuestionSelectProps } from '../types'

const Component = (props: QuestionSelectProps) => {
  const { title, options = [], selectedValue } = { ...QuestionSelectDefaultProps, ...props }

  return (
    <div>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Select options={options} value={selectedValue} style={{ width: '100%' }} />
    </div>
  )
}

export default Component
