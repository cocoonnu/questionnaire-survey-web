import Component from './components/Component'
import { QuestionTitleDefaultProps } from './types'
import type { QuestionComConfig } from '../type'

/** 标题组件配置 */
const questionTitleConfig: QuestionComConfig = {
  title: '标题',
  type: 'questionTitle',
  Component,
  defaultProps: QuestionTitleDefaultProps,
}

export default questionTitleConfig
