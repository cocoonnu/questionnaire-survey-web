import type { QuestionComProps } from '@/components/QuestionGenerator/type'

/** 后端存储的问卷组件信息 */
export interface QuestionCompInfo {
  /** 问卷组件id */
  id: string
  /** 问卷组件类型 */
  type: string
  /** 问卷组件名称 */
  title: string
  /** 问卷组件是否隐藏 */
  isHidden?: boolean
  /** 问卷组件是否锁定 */
  isLocked?: boolean
  /** 问卷组件props属性 */
  props: QuestionComProps
}
