import request from '@/utils/request'
import type { TEMPLATE_KEY } from '@/constants/menu'
import type { QuestionComProps } from '@/components/QuestionGenerator/type'

/** 根据问卷ID获取问卷信息 */
export const getQuestionInfoByIdService = async (id: string) => {
  return await request.get<QuestionInfo>('/questionInfo/getQuestionInfoById', {
    params: { id },
  })
}

/** 更新或保存问卷信息 */
export const saveQuestionInfoService = async (questionInfo: Partial<QuestionInfo>) => {
  return await request.post<QuestionInfo>('/questionInfo/saveQuestionInfo', {
    data: questionInfo,
  })
}

/** 查询问卷列表 */
export const getQuestionInfoListService = async (questionInfo: Partial<QuestionInfo>) => {
  return await request.post<QuestionInfo[]>('/questionInfo/getQuestionInfoList', {
    data: questionInfo,
  })
}

/** 问卷信息 */
export interface QuestionInfo {
  /** 问卷id */
  id: string
  /** 问卷模板 */
  template: TEMPLATE_KEY
  /** 问卷名 */
  name: string
  /** 创建人ID */
  userId: string
  /** 问卷组件列表 */
  questionComInfoList: any[]
  /** 问卷创建时间 */
  createdTime: string
  /** 问卷是否发布 */
  isPublished: boolean
  /** 问卷是否删除 */
  isDeleted: boolean
  /** 问卷是否星标 */
  isStarred: boolean
  /** 答卷数量 */
  answerCount: number
}

/** 问卷组件信息 */
export interface QuestionComInfo {
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
