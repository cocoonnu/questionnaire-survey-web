import React from 'react'
import { Button, Space } from 'antd'
import TooltipParcel from '@/components/TooltipParcel'
import { navigate } from '@/utils/tools/router_utils'
import { LeftOutlined } from '@ant-design/icons'
import { useStatisticalQuestionStore } from '../../store/statisticalQuestion.store'
import styles from './index.module.less'

const StatisticalHeader = () => {
  const answerTotal = useStatisticalQuestionStore((state) => state.answerTotal)
  const questionId = useStatisticalQuestionStore((state) => state.questionId)
  const questionName = useStatisticalQuestionStore((state) => state.questionName)

  return (
    <div className={styles['statistical-header']}>
      <div className={styles['statistical-header-left']}>
        <Button type="link" icon={<LeftOutlined />} onClick={() => navigate('/')}>
          返回
        </Button>
        <TooltipParcel titleClassName={styles['statistical-title']} title={questionName} />
      </div>
      <div className={styles['statistical-header-center']}>
        <div className={styles['center-link']}>
          <TooltipParcel
            titleClassName={styles['link-wrapper']}
            title="http://localhost:3000/#/answerForm/1771020210108731393"
            isShowTooltip={false}
          />
        </div>
        <Space>
          <Button type="primary">复制链接</Button>
          <Button>打开</Button>
        </Space>
      </div>
      <div className={styles['statistical-header-right']}>
        <Space>
          <div className={styles['total-wrapper']}>答卷数量: {answerTotal}</div>
          <Button type="primary" onClick={() => navigate(`/editQuestion/${questionId}`)}>
            编辑问卷
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default StatisticalHeader
