import React from 'react'
import { Typography, Input } from 'antd'
import { QuestionInputDefaultProps } from '../types'
import type { QuestionInputProps } from '../types'

const QuestionInput = (props: QuestionInputProps) => {
  const { title, placeholder } = { ...QuestionInputDefaultProps, ...props }

  return (
    <div>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <div>
        <Input placeholder={placeholder} />
      </div>
    </div>
  )
}

export default QuestionInput
