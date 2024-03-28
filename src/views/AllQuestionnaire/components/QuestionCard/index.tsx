import React from 'react'
import { Tag } from 'antd'
import { StarTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import QuestionCardInfo from './QuestionCardInfo'
import { getTemplateCover } from '@/utils/tools/template_utils'
import styles from './index.module.less'
import { navigate } from '@/utils/tools/router_utils'
import type { QuestionInfo } from '@/services/questionInfo.services'

const QuestionCard = (props: QuestionInfo) => {
  const { isStarred, name, template, isPublished, id } = props
  const templateCover = getTemplateCover(template)

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
        {isStarred && <StarTwoTone className={styles['cover-star']} style={{ fontSize: 16 }} />}
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
