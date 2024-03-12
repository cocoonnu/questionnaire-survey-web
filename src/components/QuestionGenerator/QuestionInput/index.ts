import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionInputDefaultProps } from './types'
import type { QuestionComConfig } from '../type'

/** 输入框组件配置 */
const questionInputConfig: QuestionComConfig = {
  title: '单行输入框',
  type: 'questionInput',
  Component,
  PropComponent,
  defaultProps: QuestionInputDefaultProps,
}

export default questionInputConfig
