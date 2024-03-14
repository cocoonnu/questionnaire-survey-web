import React from 'react'
import { Empty } from 'antd'
import { getQuestionComConfByType } from '@/components/QuestionGenerator'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import type { QuestionComProps } from '@/components/QuestionGenerator/type'

const NoProp = () => {
  return <Empty description="未选中组件" style={{ marginTop: 32 }} />
}

const ComponentProps = () => {
  const { selectedId, updateQuestionComInfoProps, getQuestionComInfoById } = useEditQuestionStore()

  // 获取当前选中的问卷组件信息和配置
  const questionComInfo = getQuestionComInfoById(selectedId)
  const questionComConfig = getQuestionComConfByType(questionComInfo?.type || '')

  // 未选中任何问卷组件
  if (!questionComConfig) return <NoProp />

  // 表单修改的回调函数
  const onChange = (newProps: QuestionComProps) => {
    updateQuestionComInfoProps(questionComInfo?.id || '', newProps)
  }

  // 渲染当前选中的问卷属性组件
  const { PropComponent } = questionComConfig
  const { props, isLocked } = questionComInfo || {}
  return <PropComponent {...props} disabled={isLocked} onChange={onChange} />
}

export default ComponentProps
