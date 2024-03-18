import React from 'react'
import { Tag } from 'antd'
import { TEMPLATE_KEY } from '@/constants/menu'
import { StarTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import QuestionCardInfo from './QuestionCardInfo'
import votingTemplateImg from '@/assets/images/votingTemplateImg.png'
import onlineExaminationImg from '@/assets/images/onlineExaminationImg.png'
import questionnaireSurveyImg from '@/assets/images/questionnaireSurveyImg.png'
import styles from './index.module.less'
import type { QuestionInfo } from '@/services/questionInfo.services'
import { navigate } from '@/utils/tools/router_utils'

const QuestionCard = (props: QuestionInfo) => {
  const { isStarred, name, template, isPublished, id } = props

  const getBackgroundImage = () => {
    switch (template) {
      case TEMPLATE_KEY.questionnaireSurvey:
        return `url(${questionnaireSurveyImg})`
      case TEMPLATE_KEY.onlineExamination:
        return `url(${onlineExaminationImg})`
      case TEMPLATE_KEY.votingTemplate:
        return `url(${votingTemplateImg})`
      default:
        return `url(${questionnaireSurveyImg})`
    }
  }

  return (
    <div className={styles['question-card']}>
      <div
        className={styles['question-card-cover']}
        onClick={() => navigate(`/editQuestion/${id}`)}
      >
        <div className={styles['cover-img']} style={{ backgroundImage: getBackgroundImage() }} />
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
