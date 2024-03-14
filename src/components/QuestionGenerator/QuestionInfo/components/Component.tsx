import React from 'react'
import { Typography } from 'antd'
import { QuestionInfoDefaultProps } from '../types'
import type { QuestionInfoProps } from '../types'

const Component = (props: QuestionInfoProps) => {
  const { title, desc = '' } = { ...QuestionInfoDefaultProps, ...props }

  const descTextList = desc.split('\n')

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography.Title style={{ fontSize: '24px' }}>{title}</Typography.Title>
      <Typography.Paragraph>
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
