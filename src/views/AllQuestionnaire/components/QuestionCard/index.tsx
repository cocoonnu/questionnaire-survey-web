import React from 'react'
import { Tag, message } from 'antd'
import { StarTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import QuestionCardInfo from './QuestionCardInfo'
import { getTemplateCover } from '@/utils/tools/template_utils'
import styles from './index.module.less'
import { navigate } from '@/utils/tools/router_utils'
import { useAllQuestionnaireStore } from '../../store/allQuestionnaire.store'
import type { QuestionInfo } from '@/services/questionInfo.services'

const QuestionCard = (props: QuestionInfo) => {
  const { isStarred, name, template, isPublished, id } = props
  const templateCover = getTemplateCover(template)
  const updateQuestionInfo = useAllQuestionnaireStore((state) => state.updateQuestionInfo)

  return (
    <div className={styles['question-card']}>
      <div
        className={styles['question-card-cover']}
        onClick={() => navigate(`/editQuestion/${id}`)}
      >
        <div className={styles['cover-img']} style={{ backgroundImage: templateCover }} />
        {isPublished && (
          <Tag color="success" className={styles['cover-status']}>
            答题中
          </Tag>
        )}
        {isStarred && (
          <StarTwoTone
            onClick={async (e) => {
              e.stopPropagation()
              const res = await updateQuestionInfo({ ...props, isStarred: isStarred ? 0 : 1 })
              if (res) message.success(isStarred ? '取消星标成功' : '星标成功')
            }}
            className={styles['cover-star']}
            style={{ fontSize: 16 }}
          />
        )}
      </div>
      <div className={styles['question-card-name']}>
        <Link className={styles['name-text']} to={`/editQuestion/${id}`}>
          {name}
        </Link>
      </div>
      <QuestionCardInfo {...props} />
    </div>
  )
}

export default QuestionCard
