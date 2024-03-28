import React from 'react'
import { create } from 'zustand'
import {
  getQuestionInfoListService,
  updateQuestionInfoService,
} from '@/services/questionInfo.services'
import { addTemplateInfoService } from '@/services/templateInfo.services'
import type { FormInstance } from 'antd'
import type { TemplateInfo } from '@/services/templateInfo.services'
import type { QuestionInfo } from '@/services/questionInfo.services'

export interface AllQuestionnaireStore {
  questionInfoList: QuestionInfo[]
  searchFormRef: React.RefObject<FormInstance>
  searchLoading: boolean
  searchFilter: Partial<QuestionInfo>

  resetSearchForm: () => void
  submitSearchForm: () => void
  onChangeSearchForm: () => void
  updateQuestionInfo: (questionInfo: QuestionInfo) => Promise<boolean>
  addTemplateInfo: (questionInfo: QuestionInfo) => Promise<TemplateInfo>
}

export const useAllQuestionnaireStore = create<AllQuestionnaireStore>((set, get) => ({
  questionInfoList: [],
  searchLoading: false,
  searchFilter: {},
  searchFormRef: React.createRef(),

  submitSearchForm: async () => {
    set({ searchLoading: true })
    const res = await getQuestionInfoListService(get().searchFilter)
    set({ searchLoading: false })
    if (!res) return
    set({ questionInfoList: res || [] })
  },

  onChangeSearchForm: () => {
    const { searchFormRef } = get()
    set({ searchFilter: searchFormRef.current?.getFieldsValue() })
  },

  resetSearchForm: () => {
    const { searchFormRef } = get()
    searchFormRef.current?.resetFields()
    set({ searchFilter: {} })
  },

  updateQuestionInfo: async (questionInfo) => {
    const { submitSearchForm } = get()
    const res = await updateQuestionInfoService(questionInfo)
    if (!res) return false
    submitSearchForm()
    return true
  },

  addTemplateInfo: async (questionInfo) => {
    return await addTemplateInfoService({
      type: questionInfo.template,
      name: questionInfo.name,
      comInfoList: JSON.stringify(questionInfo.questionComInfoList),
      isPre: 0,
    })
  },
}))
