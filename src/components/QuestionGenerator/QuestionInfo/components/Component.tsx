import React from 'react'
import { Typography } from 'antd'
import { QuestionInfoDefaultProps } from '../types'
import type { QuestionInfoProps } from '../types'

const Component = (props: QuestionInfoProps) => {
  const {
    title,
    desc = '',
    isTitleCenter,
    isParagraphCenter,
  } = { ...QuestionInfoDefaultProps, ...props }

  const descTextList = desc.split('\n')

  return (
    <div>
      <Typography.Title style={{ fontSize: '24px', textAlign: isTitleCenter ? 'center' : 'start' }}>
        {title}
      </Typography.Title>
      <Typography.Paragraph style={{ textAlign: isParagraphCenter ? 'center' : 'start' }}>
        {descTextList.map((t, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {t}
          </span>
        ))}
      </Typography.Paragraph>
    </div>
  )
}

export default Component
