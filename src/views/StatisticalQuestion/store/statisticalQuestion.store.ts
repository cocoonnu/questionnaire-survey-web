import { create } from 'zustand'
import { getQuestionInfoByIdService } from '@/services/questionInfo.services'
import { getAnswerInfoListService } from '@/services/answerInfo.services'
import type { AnswerInfo } from '@/services/answerInfo.services'
import type { QuestionComInfo } from '@/services/questionInfo.services'
import type { StatisticalTableData } from '../types'

export interface StatisticalQuestionStore {
  selectedId: string
  questionId: string
  questionName: string
  answerTotal: number
  answerInfoList: AnswerInfo[]
  questionComInfoList: QuestionComInfo[]

  getQuestionInfoById: () => void
  getAnswerInfoList: () => void
  getTableDataBySelectedId: (selectedId: string) => StatisticalTableData[]
}

export const useStatisticalQuestionStore = create<StatisticalQuestionStore>((set, get) => ({
  selectedId: '',
  questionId: '',
  questionName: '',
  answerTotal: 0,
  answerInfoList: [],
  questionComInfoList: [],

  getQuestionInfoById: async () => {
    const { questionId } = get()
    const res = await getQuestionInfoByIdService(questionId)
    const initList = res.questionComInfoList.map((item) => ({
      ...item,
      props: JSON.parse(item.props),
    }))
    set({
      questionId: res.id,
      questionName: res.name,
      questionComInfoList: initList || [],
    })
  },

  getAnswerInfoList: async () => {
    const { questionId } = get()
    const res = await getAnswerInfoListService(questionId)
    if (res) {
      const answerInfoList = res.map((item) => ({
        ...item,
        answerMap: JSON.parse(item.answerMap),
      }))
      set({ answerInfoList, answerTotal: res.length || 0 })
    }
  },

  getTableDataBySelectedId: (selectedId) => {
    const { answerInfoList } = get()
    const tableDataBySelectedId: StatisticalTableData[] = answerInfoList
      .filter((item) => item.answerMap?.[selectedId]) // 先过滤掉不存在当前问卷组件的答卷
      .map((item, index) => ({
        order: index,
        address: item.address,
        createdTime: item.createdTime,
        answerText: item.answerMap?.[selectedId] || '',
      }))
    return tableDataBySelectedId
  },
}))
