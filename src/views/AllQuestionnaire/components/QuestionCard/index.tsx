import React from 'react'
import { Tag } from 'antd'
import { StarTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import QuestionCardInfo from './QuestionCardInfo'
import questionnaireSurveyImg from '@/assets/images/questionnaireSurveyImg.png'
import styles from './index.module.less'

const QuestionCard = () => {
  return (
    <div className={styles['question-card']}>
      <div className={styles['question-card-cover']}>
        <div
          className={styles['cover-thumb']}
          style={{ backgroundImage: `url(${questionnaireSurveyImg})` }}
        />
        <Tag color="success" className={styles['cover-status']}>
          答题中
        </Tag>
        <StarTwoTone className={styles['cover-star']} style={{ fontSize: 16 }} />
      </div>
      <div className={styles['question-card-name']}>
        <Link className={styles['name-text']} to="/editQuestion">
          问卷标题
        </Link>
      </div>
      <QuestionCardInfo />
    </div>
  )
}

export default QuestionCard
