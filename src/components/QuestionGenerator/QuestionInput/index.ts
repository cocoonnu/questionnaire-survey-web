import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionInputDefaultProps } from './types'
import type { QuestionComConfig } from '../type'

/** 单行输入框配置 */
const questionInputConfig: QuestionComConfig = {
  title: '单行输入框',
  type: 'questionInput',
  Component,
  PropComponent,
  defaultProps: QuestionInputDefaultProps,
}

export default questionInputConfig
