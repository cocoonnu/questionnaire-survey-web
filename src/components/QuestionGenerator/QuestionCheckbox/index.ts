import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionCheckboxDefaultProps } from './types'
import { QuestionComType } from '../type'
import type { QuestionComConfig } from '../type'

/** 多项框配置 */
const questionCheckboxConfig: QuestionComConfig = {
  title: '多项框',
  type: QuestionComType.questionCheckbox,
  Component,
  PropComponent,
  defaultProps: QuestionCheckboxDefaultProps,
}

export default questionCheckboxConfig
