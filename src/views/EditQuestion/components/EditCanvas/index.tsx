import React, { useEffect } from 'react'
import classNames from 'classnames'
import LoadingBox from '@/components/LoadingBox'
import { RIGHT_PANEL_KEY } from '../../constants'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import { getQuestionComConfByType } from '@/components/QuestionGenerator'
import styles from './index.module.less'
import type { MouseEvent } from 'react'
import type { QuestionCompInfo } from '@/services/question.services'

const EditCanvas = () => {
  const selectedId = useEditQuestionStore((state) => state.selectedId)
  const questionComInfoList = useEditQuestionStore((state) => state.questionComInfoList)

  useEffect(() => {
    // 滚动到选中的问卷组件位置
    const editCanvasElement = document.getElementById('edit-canvas')
    if (!editCanvasElement || !selectedId) return
    const selectedQuestionComElement = document.getElementById(selectedId)
    selectedQuestionComElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [selectedId])

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
    // 更新选中的问卷组件和将右侧面板切换到组件属性
    useEditQuestionStore.setState({
      selectedId: item.id,
      rightSelectedTab: RIGHT_PANEL_KEY.componentProps,
    })
  }

  return (
    <div className={styles['edit-canvas']} id="edit-canvas">
      <LoadingBox loading={false} iconSize="large">
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
      </LoadingBox>
    </div>
  )
}

export default EditCanvas
