import type { FC } from 'react'
import type { QuestionTitleProps } from './QuestionTitle/types'
import type { QuestionInputProps } from './QuestionInput/types'

/** 问卷组件props类型 */
export type QuestionComProps = QuestionTitleProps | QuestionInputProps

/** 问卷生成器配置 */
export interface QuestionComConfig {
  /** 问卷组件名称 */
  title: string
  /** 问卷组件类型 */
  type: string
  /** 问卷组件渲染 */
  Component: FC<QuestionComProps>
  /** 问卷组件默认props类型 */
  defaultProps: QuestionComProps
}
