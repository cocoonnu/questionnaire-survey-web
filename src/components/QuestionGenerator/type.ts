import type { FC } from 'react'
import type { QuestionInputProps } from './QuestionInput/types'
import type { QuestionInfoProps } from './QuestionInfo/types'
import type { QuestionRadioProps } from './QuestionRadio/types'
import type { QuestionCheckboxProps } from './QuestionCheckbox/types'
import type { QuestionTextareaProps } from './QuestionTextarea/types'
import type { QuestionSelectProps } from './QuestionSelect/types'

/** 问卷组件props类型 */
export type QuestionComProps = QuestionInfoProps &
  QuestionInputProps &
  QuestionTextareaProps &
  QuestionRadioProps &
  QuestionCheckboxProps &
  QuestionSelectProps

export enum QuestionComType {
  questionInput = 'questionInput',
  questionInfo = 'questionInfo',
  questionTextarea = 'questionTextarea',
  questionRadio = 'questionRadio',
  questionCheckbox = 'questionCheckbox',
  questionSelect = 'questionSelect',
}

/** 问卷生成器配置类型 */
export interface QuestionComConfig {
  /** 问卷组件名称 */
  title: string
  /** 问卷组件类型 */
  type: QuestionComType
  /** 问卷静态组件渲染 */
  Component: FC<any>
  /** 问卷属性组件渲染 */
  PropComponent: FC<any>
  /** 问卷组件默认props类型 */
  defaultProps: any
}
