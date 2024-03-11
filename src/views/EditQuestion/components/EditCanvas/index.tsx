import React from 'react'
import LoadingBox from '@/components/LoadingBox'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import { getQuestionComConfByType } from '@/components/QuestionGenerator'
import styles from './index.module.less'
import type { QuestionCompInfo } from '@/services/question.services'

const EditCanvas = () => {
  const questionComInfoList = useEditQuestionStore((state) => state.questionComInfoList)

  const getQuestionComponent = (item: QuestionCompInfo) => {
    const { type, props } = item
    const questionComConf = getQuestionComConfByType(type)
    if (!questionComConf) return null
    return React.createElement(questionComConf.Component, props)
  }

  return (
    <div className={styles['edit-canvas']}>
      <LoadingBox loading={false} iconSize="large">
        {questionComInfoList.map((item) => {
          return (
            <div className={styles['component-wrapper']} key={item.id}>
              <div className={styles['pointer-none']}>{getQuestionComponent(item)}</div>
            </div>
          )
        })}
      </LoadingBox>
    </div>
  )
}

export default EditCanvas
