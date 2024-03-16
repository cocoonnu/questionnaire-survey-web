import React from 'react'
import classNames from 'classnames'
import { useScrollToSelectedId } from '../../hooks/useScrollToSelected'
import SortableItem from '@/components/DragSortable/SortableItem'
import SortableContainer from '@/components/DragSortable/SortableContainer'
import { RIGHT_PANEL_KEY } from '../../constants'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import { getQuestionComConfByType } from '@/components/QuestionGenerator'
import styles from './index.module.less'
import type { MouseEvent } from 'react'
import type { QuestionComInfo } from '@/services/questionInfo.services'

const EditCanvas = () => {
  const selectedId = useEditQuestionStore((state) => state.selectedId)
  const questionComInfoList = useEditQuestionStore((state) => state.questionComInfoList)
  const onDragEnd = useEditQuestionStore((state) => state.onDragEnd)

  useScrollToSelectedId(selectedId)

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
    // 更新选中的问卷组件和将右侧面板切换到组件属性
    useEditQuestionStore.setState({
      selectedId: item.id,
      rightSelectedTab: RIGHT_PANEL_KEY.componentProps,
    })
  }

  return (
    <div className={styles['edit-canvas']} id="edit-canvas">
      <SortableContainer items={questionComInfoList} onDragEnd={onDragEnd}>
        {questionComInfoList.map((item) => {
          return (
            <SortableItem key={item.id} id={item.id}>
              <div
                id={item.id}
                key={item.id}
                className={getComponentClassName(item)}
                onClick={(e) => componentClick(e, item)}
              >
                <div className={styles['pointer-none']}>{getQuestionComponent(item)}</div>
              </div>
            </SortableItem>
          )
        })}
      </SortableContainer>
    </div>
  )
}

export default EditCanvas
