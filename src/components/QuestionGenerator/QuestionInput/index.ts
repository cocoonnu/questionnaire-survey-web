import Component from './components/Component'
import { QuestionInputDefaultProps } from './types'
import type { QuestionComConfig } from '../type'

/** 输入框组件配置 */
const questionInputConfig: QuestionComConfig = {
  title: '标题',
  type: 'questionInput',
  Component,
  defaultProps: QuestionInputDefaultProps,
}

export default questionInputConfig
