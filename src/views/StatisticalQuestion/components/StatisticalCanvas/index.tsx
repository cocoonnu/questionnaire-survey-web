import React from 'react'
import classNames from 'classnames'
import { getQuestionComConfByType } from '@/components/QuestionGenerator'
import { useStatisticalQuestionStore } from '../../store/statisticalQuestion.store'
import styles from './index.module.less'
import type { MouseEvent } from 'react'
import type { QuestionComInfo } from '@/services/questionInfo.services'

const StatisticalCanvas = () => {
  const selectedId = useStatisticalQuestionStore((state) => state.selectedId)
  const questionComInfoList = useStatisticalQuestionStore((state) => state.questionComInfoList)

  const getQuestionComponent = (item: QuestionComInfo) => {
    const { type, props } = item
    const questionComConf = getQuestionComConfByType(type)
    if (!questionComConf) return null
    return React.createElement(questionComConf.Component, props)
  }

  const getComponentClassName = (item: QuestionComInfo) => {
    return classNames(styles['component-wrapper'], {
      [styles.selected]: item.id === selectedId,
      [styles.hidden]: item.isHidden,
    })
  }

  const componentClick = (e: MouseEvent, item: QuestionComInfo) => {
    e.stopPropagation()
    useStatisticalQuestionStore.setState({
      selectedId: item.id,
    })
  }

  return (
    <div className={styles['statistical-canvas']}>
      {questionComInfoList.map((item) => {
        return (
          <div
            id={item.id}
            key={item.id}
            className={getComponentClassName(item)}
            onClick={(e) => componentClick(e, item)}
          >
            <div className={styles['pointer-none']}>{getQuestionComponent(item)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default StatisticalCanvas
