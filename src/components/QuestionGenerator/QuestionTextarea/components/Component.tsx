import React from 'react'
import { Typography, Input } from 'antd'
import { QuestionTextareaDefaultProps } from '../types'
import type { QuestionTextareaProps } from '../types'

const Component = (props: QuestionTextareaProps) => {
  const { title, placeholder } = { ...QuestionTextareaDefaultProps, ...props }

  return (
    <div>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <div>
        <Input.TextArea placeholder={placeholder} />
      </div>
    </div>
  )
}

export default Component
