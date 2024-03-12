import React from 'react'
import classNames from 'classnames'
import LoadingBox from '@/components/LoadingBox'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import { getQuestionComConfByType } from '@/components/QuestionGenerator'
import styles from './index.module.less'
import type { MouseEvent } from 'react'
import type { QuestionCompInfo } from '@/services/question.services'

const EditCanvas = () => {
  const selectedId = useEditQuestionStore((state) => state.selectedId)
  const questionComInfoList = useEditQuestionStore((state) => state.questionComInfoList)

  const getQuestionComponent = (item: QuestionCompInfo) => {
    const { type, props } = item
    const questionComConf = getQuestionComConfByType(type)
    if (!questionComConf) return null
    return React.createElement(questionComConf.Component, props)
  }

  const getComponentClassName = (item: QuestionCompInfo) => {
    return classNames(styles['component-wrapper'], {
      [styles.selected]: item.id === selectedId,
    })
  }

  const componentClick = (e: MouseEvent, item: QuestionCompInfo) => {
    e.stopPropagation()
    useEditQuestionStore.setState({ selectedId: item.id })
  }

  return (
    <div className={styles['edit-canvas']}>
      <LoadingBox loading={false} iconSize="large">
        {questionComInfoList.map((item) => {
          return (
            <div
              key={item.id}
              className={getComponentClassName(item)}
              onClick={(e) => componentClick(e, item)}
            >
              <div className={styles['pointer-none']}>{getQuestionComponent(item)}</div>
            </div>
          )
        })}
      </LoadingBox>
    </div>
  )
}

export default EditCanvas
