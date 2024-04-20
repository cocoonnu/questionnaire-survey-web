import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionSelectDefaultProps } from './types'
import { QuestionComType } from '../type'
import type { QuestionComConfig } from '../type'

/** 单项框配置 */
const questionSelectConfig: QuestionComConfig = {
  title: '单项框',
  type: QuestionComType.questionSelect,
  Component,
  PropComponent,
  defaultProps: QuestionSelectDefaultProps,
}

export default questionSelectConfig
