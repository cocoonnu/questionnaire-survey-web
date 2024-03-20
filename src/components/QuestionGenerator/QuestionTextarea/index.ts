import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionTextareaDefaultProps } from './types'
import { QuestionComType } from '../type'
import type { QuestionComConfig } from '../type'

/** 多行输入框配置 */
const questionTextareaConfig: QuestionComConfig = {
  title: '多行输入框',
  type: QuestionComType.questionTextarea,
  Component,
  PropComponent,
  defaultProps: QuestionTextareaDefaultProps,
}

export default questionTextareaConfig
