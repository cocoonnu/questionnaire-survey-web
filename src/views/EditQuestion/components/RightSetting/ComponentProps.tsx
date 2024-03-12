import React from 'react'
import { Empty } from 'antd'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import type { QuestionComProps } from '@/components/QuestionGenerator/type'

const NoProp = () => {
  return <Empty description="未选中组件" style={{ marginTop: 32 }} />
}

const ComponentProps = () => {
  const {
    selectedId,
    updateQuestionComInfoProps,
    getQuestionComConfigById,
    getQuestionComInfoById,
  } = useEditQuestionStore()

  // 获取当前选中的问卷组件信息和配置
  const questionComConfig = getQuestionComConfigById(selectedId)
  const questionComInfo = getQuestionComInfoById(selectedId)

  if (!questionComConfig) return <NoProp />

  const onChange = (newProps: QuestionComProps) => {
    updateQuestionComInfoProps(questionComInfo?.id || '', newProps)
  }

  // 渲染当前选中的问卷属性组件
  const { PropComponent } = questionComConfig
  return <PropComponent {...questionComInfo?.props} onChange={onChange} />
}

export default ComponentProps
