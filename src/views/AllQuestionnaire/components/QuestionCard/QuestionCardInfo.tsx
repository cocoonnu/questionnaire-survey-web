import React from 'react'
import { Button } from 'antd'
import { PlayCircleOutlined, PieChartOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const QuestionCardInfo = () => {
  return (
    <div className={styles['question-card-info']}>
      <div className={styles['info-statistics']}>
        <div className={styles['info-statistics-num']}>0份</div>
        <span className={styles['info-statistics-id']}>
          <span className={styles['id-title']}>ID</span>
          <span className={styles['id-content']}>{'1768894164450226178'.substring(0, 8)}</span>
        </span>
      </div>
      <div className={styles['info-operation']}>
        <Button
          type="text"
          icon={<PlayCircleOutlined />}
          size="small"
          className={styles['button-item']}
        >
          发布
        </Button>
        <Button
          type="text"
          icon={<PieChartOutlined />}
          size="small"
          className={styles['button-item']}
        >
          统计
        </Button>
        <Button
          type="text"
          icon={<DeleteOutlined />}
          size="small"
          className={styles['button-item']}
        >
          删除
        </Button>
      </div>
    </div>
  )
}

export default QuestionCardInfo
