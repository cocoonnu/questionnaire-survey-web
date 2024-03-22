import React from 'react'
import { create } from 'zustand'
import { message } from 'antd'
import { getQuestionInfoByIdService } from '@/services/questionInfo.services'
import { QuestionComType } from '@/components/QuestionGenerator/type'
import { submitAnswerInfoService, getUserAddressService } from '@/services/answerInfo.services'
import type { FormInstance } from 'antd'
import type { QuestionComInfo } from '@/services/questionInfo.services'

export interface AnswerFormStore {
  formRef: React.RefObject<FormInstance>
  questionId: string
  isPublished: boolean
  questionComInfoList: QuestionComInfo[]
  isFinished: boolean
  submitLoading: boolean

  getQuestionInfoById: () => void
  submitAnswerInfo: () => void
}

export const useAnswerFormStore = create<AnswerFormStore>((set, get) => ({
  isPublished: true,
  isFinished: false,
  submitLoading: false,
  questionId: '',
  questionComInfoList: [],
  formRef: React.createRef(),

  getQuestionInfoById: async () => {
    const { questionId } = get()
    if (questionId === '' || !questionId) return
    const res = await getQuestionInfoByIdService(questionId)
    const initList = res.questionComInfoList
      .filter((item) => item?.isHidden !== 1)
      .map((item) => ({
        ...item,
        props: JSON.parse(item.props),
      }))
    if (res.name) window.document.title = `${res.name} - 小智问卷`
    set({
      questionId: res.id,
      isFinished: false,
      isPublished: res.isPublished === 1,
      questionComInfoList: initList || [],
    })
  },

  submitAnswerInfo: async () => {
    const { formRef, questionComInfoList, questionId } = get()

    set({ submitLoading: true })
    const formData = await formRef.current?.validateFields()
    const addressData = await getUserAddressService()
    const address = addressData ? addressData.province + addressData.city : '未知属地'
    const answers = Object.values(formData)
      .filter(Boolean)
      .map((item) => item?.toString() || '')
    const questionComIds = questionComInfoList
      .map((item) => {
        if (item.type === QuestionComType.questionInfo) return undefined
        return item.id
      })
      .filter(Boolean) as string[]

    let answerMap = {}
    questionComIds.forEach((item, indx) => {
      answerMap = { ...answerMap, [item]: answers[indx] }
    })

    const res = await submitAnswerInfoService({
      questionId,
      address,
      answerMap: JSON.stringify(answerMap),
    })
    set({ submitLoading: false })
    if (res) {
      message.success('提交问卷成功')
      set({ isFinished: true })
    }
  },
}))
