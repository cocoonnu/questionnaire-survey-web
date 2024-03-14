import React from 'react'
import { Typography } from 'antd'
import { QuestionTitleDefaultProps } from '../types'
import type { QuestionTitleProps } from '../types'

const Component = (props: QuestionTitleProps) => {
  const { text, level, isCenter } = { ...QuestionTitleDefaultProps, ...props }

  const genFontSize = () => {
    if (level === 1) return '24px'
    if (level === 2) return '20px'
    if (level === 3) return '16px'
    return '16px'
  }

  return (
    <Typography.Title
      level={level}
      style={{
        textAlign: isCenter ? 'center' : 'start',
        marginBottom: '0',
        fontSize: genFontSize(),
      }}
    >
      {text}
    </Typography.Title>
  )
}

export default Component
