import React from 'react'
import { Typography } from 'antd'
import { QuestionParagraphDefaultProps } from '../types'
import type { QuestionParagraphProps } from '../types'

const Component = (props: QuestionParagraphProps) => {
  const { text = '', isCenter } = { ...QuestionParagraphDefaultProps, ...props }
  const textList = text.split('\n')

  return (
    <Typography.Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: '0' }}>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </Typography.Paragraph>
  )
}

export default Component
