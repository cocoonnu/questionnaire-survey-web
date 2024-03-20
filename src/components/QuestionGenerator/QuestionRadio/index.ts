import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionRadioDefaultProps } from './types'
import { QuestionComType } from '../type'
import type { QuestionComConfig } from '../type'

/** 单项框配置 */
const questionRadioConfig: QuestionComConfig = {
  title: '单项框',
  type: QuestionComType.questionRadio,
  Component,
  PropComponent,
  defaultProps: QuestionRadioDefaultProps,
}

export default questionRadioConfig
