import React from 'react'
import { Button, Dropdown, message } from 'antd'
import {
  PlayCircleOutlined,
  PieChartOutlined,
  DeleteOutlined,
  MoreOutlined,
  PauseCircleOutlined,
} from '@ant-design/icons'
import { navigate } from '@/utils/tools/router_utils'
import { useAllQuestionnaireStore } from '../../store/allQuestionnaire.store'
import styles from './index.module.less'
import type { MenuProps } from 'antd'
import type { QuestionInfo } from '@/services/questionInfo.services'

const QuestionCardInfo = (props: QuestionInfo) => {
  const { id, answerCount, isStarred, isPublished } = props
  const updateQuestionInfo = useAllQuestionnaireStore((state) => state.updateQuestionInfo)

  const moreMenuItems: MenuProps['items'] = [
    {
      key: 'star',
      label: isStarred ? '取消星标' : '星标',
    },
    {
      key: 'delivery',
      label: '投放问卷',
    },
    {
      key: 'saveAsTemplate',
      label: '保存为模板',
    },
  ]

  const moreMenuOnClick: MenuProps['onClick'] = async ({ key }) => {
    if (key === 'star') {
      const res = await updateQuestionInfo({ ...props, isStarred: isStarred ? 0 : 1 })
      if (res) message.success(isStarred ? '取消星标成功' : '星标成功')
    }
    if (key === 'delivery') {
      if (!isPublished) {
        message.warn('问卷未发布，无法投放')
        return
      }
      // 新建窗口打开
      window.open(`${window.location.origin}/#/answerForm/${id}`)
    }
  }

  return (
    <div className={styles['question-card-info']}>
      <div className={styles['info-statistics']}>
        <div className={styles['info-statistics-num']}>{answerCount || 0}份</div>
        <span className={styles['info-statistics-id']}>
          <span className={styles['id-title']}>ID</span>
          <span className={styles['id-content']}>{id?.substring(0, 8)}</span>
        </span>
      </div>
      <div className={styles['info-operation']} id="info-operation">
        <Button
          type="text"
          icon={isPublished ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
          size="small"
          className={styles['button-item']}
          onClick={async () => {
            const res = await updateQuestionInfo({ ...props, isPublished: isPublished ? 0 : 1 })
            if (res) message.success(isPublished ? '停止成功' : '发布成功')
          }}
        >
          {isPublished ? '停止' : '发布'}
        </Button>
        <Button
          type="text"
          icon={<PieChartOutlined />}
          size="small"
          className={styles['button-item']}
          onClick={() => navigate(`/statisticalQuestion/${id}`)}
        >
          统计
        </Button>
        <Button
          type="text"
          icon={<DeleteOutlined />}
          size="small"
          className={styles['button-item']}
          onClick={async () => {
            const res = await updateQuestionInfo({ ...props, isDeleted: 1 })
            if (res) message.success('删除成功')
          }}
        >
          删除
        </Button>
        <Dropdown trigger={['click']} menu={{ items: moreMenuItems, onClick: moreMenuOnClick }}>
          <MoreOutlined className={styles['more-icon']} />
        </Dropdown>
      </div>
    </div>
  )
}

export default QuestionCardInfo
