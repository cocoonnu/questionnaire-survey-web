import React from 'react'
import { Typography } from 'antd'
import styles from './index.module.less'
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
      <Typography.Title
        className={styles.title}
        style={{ textAlign: isTitleCenter ? 'center' : 'start' }}
      >
        {title}
      </Typography.Title>
      {descTextList?.length > 0 && (
        <Typography.Paragraph
          className={styles.typography}
          style={{ textAlign: isParagraphCenter ? 'center' : 'start' }}
        >
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
