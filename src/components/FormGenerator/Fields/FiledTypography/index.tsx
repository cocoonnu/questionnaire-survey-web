import React from 'react'
import { Typography } from 'antd'
import type { FormComponentItem } from '../../types/formType'

export interface FiledTypographyProps extends FormComponentItem {
  title: string
  desc?: string
  isTitleCenter?: boolean
  isParagraphCenter?: boolean
}

const FiledTypography = ({
  title,
  desc,
  isParagraphCenter,
  isTitleCenter,
}: FiledTypographyProps) => {
  const descTextList = desc?.split('\n') || []

  return (
    <div>
      <Typography.Title style={{ fontSize: '24px', textAlign: isTitleCenter ? 'center' : 'start' }}>
        {title}
      </Typography.Title>
      {descTextList?.length > 0 && (
        <Typography.Paragraph style={{ textAlign: isParagraphCenter ? 'center' : 'start' }}>
          {descTextList.map((t, index) => (
            <span key={index}>
              {index > 0 && <br />}
              {t}
            </span>
          ))}
        </Typography.Paragraph>
      )}
    </div>
  )
}

export default FiledTypography
