import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionTitleDefaultProps } from './types'
import type { QuestionComConfig } from '../type'

/** 标题组件配置 */
const questionTitleConfig: QuestionComConfig = {
  title: '问卷标题',
  type: 'questionTitle',
  Component,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
}

export default questionTitleConfig
