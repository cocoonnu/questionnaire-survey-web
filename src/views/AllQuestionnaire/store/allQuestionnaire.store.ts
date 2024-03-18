import React from 'react'
import { create } from 'zustand'
import { getQuestionInfoListService } from '@/services/questionInfo.services'
import type { FormInstance } from 'antd'
import type { QuestionInfo } from '@/services/questionInfo.services'

export interface AllQuestionnaireStore {
  questionInfoList: QuestionInfo[]
  searchFormRef: React.RefObject<FormInstance>
  searchLoading: boolean
  resetSearchForm: () => void
  submitSearchForm: () => void
  getQuestionInfoList: (value: Partial<QuestionInfo>) => void
}

export const useAllQuestionnaireStore = create<AllQuestionnaireStore>((set, get) => ({
  searchLoading: false,
  questionInfoList: [],
  searchFormRef: React.createRef(),

  getQuestionInfoList: async (value) => {
    set({ searchLoading: true })
    const res = await getQuestionInfoListService({ ...value })
    set({ searchLoading: false })
    if (!res) return
    set({ questionInfoList: res })
  },

  resetSearchForm: () => {
    get().searchFormRef.current?.resetFields()
  },

  submitSearchForm: async () => {
    const { searchFormRef, getQuestionInfoList } = get()
    const value = searchFormRef.current?.getFieldsValue()
    getQuestionInfoList(value)
  },
}))
