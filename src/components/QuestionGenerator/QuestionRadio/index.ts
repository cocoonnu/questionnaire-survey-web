import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionRadioDefaultProps } from './types'
import type { QuestionComConfig } from '../type'

/** 单项框配置 */
const questionRadioConfig: QuestionComConfig = {
  title: '单项框',
  type: 'questionRadio',
  Component,
  PropComponent,
  defaultProps: QuestionRadioDefaultProps,
}

export default questionRadioConfig
