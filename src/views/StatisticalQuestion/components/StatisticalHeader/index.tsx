import React from 'react'
import { Button, Space, message } from 'antd'
import clipboardCopy from 'clipboard-copy'
import TooltipParcel from '@/components/TooltipParcel'
import { navigate } from '@/utils/tools/router_utils'
import { LeftOutlined } from '@ant-design/icons'
import { useStatisticalQuestionStore } from '../../store/statisticalQuestion.store'
import styles from './index.module.less'

const StatisticalHeader = () => {
  const answerTotal = useStatisticalQuestionStore((state) => state.answerTotal)
  const questionId = useStatisticalQuestionStore((state) => state.questionId)
  const questionName = useStatisticalQuestionStore((state) => state.questionName)
  const answerFormLink = `${window.location.origin}/#/answerForm/${questionId}`

  const copyLink = () => {
    clipboardCopy(answerFormLink)
      .then(() => message.success('复制成功'))
      .catch(() => message.error('复制失败'))
  }

  const openLink = () => {
    window.open(answerFormLink)
  }

  const editQuestion = () => {
    navigate(`/editQuestion/${questionId}`)
    useStatisticalQuestionStore.setState({ selectedId: '' })
  }

  const goBack = () => {
    navigate('/')
    useStatisticalQuestionStore.setState({ selectedId: '' })
  }

  return (
    <div className={styles['statistical-header']}>
      <div className={styles['statistical-header-left']}>
        <Button type="link" icon={<LeftOutlined />} onClick={goBack}>
          返回主页
        </Button>
        <TooltipParcel titleClassName={styles['statistical-title']} title={questionName} />
      </div>
      <div className={styles['statistical-header-center']}>
        <div className={styles['center-link']}>
          <TooltipParcel
            titleClassName={styles['link-wrapper']}
            title={answerFormLink}
            isShowTooltip={false}
          />
        </div>
        <Space>
          <Button type="primary" onClick={copyLink}>
            复制链接
          </Button>
          <Button onClick={openLink}>打开</Button>
        </Space>
      </div>
      <div className={styles['statistical-header-right']}>
        <Space>
          <div className={styles['total-wrapper']}>答卷数量: {answerTotal}</div>
          <Button type="primary" onClick={editQuestion}>
            编辑问卷
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default StatisticalHeader
