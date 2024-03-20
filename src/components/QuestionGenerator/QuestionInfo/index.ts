import Component from './components/Component'
import PropComponent from './components/PropComponent'
import { QuestionInfoDefaultProps } from './types'
import { QuestionComType } from '../type'
import type { QuestionComConfig } from '../type'

/** 问卷标题信息配置 */
const questionInfoConfig: QuestionComConfig = {
  title: '问卷标题信息',
  type: QuestionComType.questionInfo,
  Component,
  PropComponent,
  defaultProps: QuestionInfoDefaultProps,
}

export default questionInfoConfig
