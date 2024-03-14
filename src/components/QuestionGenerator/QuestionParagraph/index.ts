import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionParagraphDefaultProps } from './types'
import type { QuestionComConfig } from '../type'

/** 问卷段落配置 */
const questionParagraphConfig: QuestionComConfig = {
  title: '问卷段落',
  type: 'questionParagraph',
  Component,
  PropComponent,
  defaultProps: QuestionParagraphDefaultProps,
}

export default questionParagraphConfig
