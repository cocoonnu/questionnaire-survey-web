import type { FC } from 'react'
import type { QuestionTitleProps } from './QuestionTitle/types'
import type { QuestionInputProps } from './QuestionInput/types'
import type { QuestionInfoProps } from './QuestionInfo/types'
import type { QuestionRadioProps } from './QuestionRadio/types'
import type { QuestionCheckboxProps } from './QuestionCheckbox/types'
import type { QuestionTextareaProps } from './QuestionTextarea/types'
import type { QuestionParagraphProps } from './QuestionParagraph/types'

/** 问卷组件props类型 */
export type QuestionComProps =
  | QuestionTitleProps
  | QuestionInputProps
  | QuestionParagraphProps
  | QuestionInfoProps
  | QuestionTextareaProps
  | QuestionRadioProps
  | QuestionCheckboxProps

/** 问卷生成器配置类型 */
export interface QuestionComConfig {
  /** 问卷组件名称 */
  title: string
  /** 问卷组件类型 */
  type: string
  /** 问卷静态组件渲染 */
  Component: FC<any>
  /** 问卷属性组件渲染 */
  PropComponent: FC<any>
  /** 问卷组件默认props类型 */
  defaultProps: QuestionComProps
}
