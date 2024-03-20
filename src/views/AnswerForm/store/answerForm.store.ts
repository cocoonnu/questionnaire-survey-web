import React from 'react'
import { create } from 'zustand'
import { getQuestionInfoByIdService } from '@/services/questionInfo.services'
import type { QuestionComInfo } from '@/services/questionInfo.services'
import type { FormInstance } from 'antd'

export interface AnswerFormStore {
  formRef: React.RefObject<FormInstance>
  questionId: string
  questionComInfoList: QuestionComInfo[]

  getQuestionInfoById: () => Promise<void>
}

export const useAnswerFormStore = create<AnswerFormStore>((set, get) => ({
  questionId: '',
  questionComInfoList: [],
  formRef: React.createRef(),

  getQuestionInfoById: async () => {
    const { questionId } = get()
    if (questionId === '' || !questionId) return
    const res = await getQuestionInfoByIdService(questionId)
    const initList = res.questionComInfoList?.map((item) => ({
      ...item,
      props: JSON.parse(item.props),
    }))
    set({
      questionId: res.id,
      questionComInfoList: initList,
    })
  },
}))
