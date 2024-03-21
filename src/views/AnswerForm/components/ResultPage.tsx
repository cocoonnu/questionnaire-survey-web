import React from 'react'
import { Result } from 'antd'
import styles from './index.module.less'

export interface ResultPageProps {
  status: 'warning' | 'error' | 'success' | 'info'
  title: string
}

const ResultPage = ({ status, title }: ResultPageProps) => {
  return (
    <div className={styles['result-page']}>
      <Result status={status} title={title} />
    </div>
  )
}

export default ResultPage
