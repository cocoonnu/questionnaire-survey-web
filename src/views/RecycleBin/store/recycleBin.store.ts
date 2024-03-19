import { create } from 'zustand'
import {
  getRecycleBinListService,
  batchUpdateQuestionInfoService,
  batchDeleteQuestionInfoService,
} from '@/services/questionInfo.services'
import { message } from 'antd'
import type { QuestionInfo } from '@/services/questionInfo.services'

export interface RecycleBinStore {
  isDesc: boolean
  page: number
  pageSize: number
  total: number
  recycleBinList: QuestionInfo[]
  selectedRowIds: React.Key[]
  selectedRows: QuestionInfo[]

  getRecycleBinList: () => void
  batchUpdateQuestionInfo: (questionInfoList: QuestionInfo[]) => void
  batchDeleteQuestionInfo: (questionInfoIdList: string[]) => void
}

export const useRecycleBinStore = create<RecycleBinStore>((set, get) => ({
  isDesc: true,
  page: 1,
  pageSize: 10,
  total: 0,
  recycleBinList: [],
  selectedRowIds: [],
  selectedRows: [],

  getRecycleBinList: async () => {
    const { isDesc, page, pageSize } = get()
    const res = await getRecycleBinListService({ isDesc, page, pageSize })
    if (!res) return
    set({ recycleBinList: res.records, total: res.total })
  },

  batchUpdateQuestionInfo: async (questionInfoList) => {
    const res = await batchUpdateQuestionInfoService(questionInfoList)
    if (!res) return
    message.success('恢复成功')
    set({ selectedRowIds: [], selectedRows: [] }) // 恢复成功后清空选中
    get().getRecycleBinList()
  },

  batchDeleteQuestionInfo: async (questionInfoIdList) => {
    const res = await batchDeleteQuestionInfoService(questionInfoIdList)
    if (!res) return
    message.success('彻底删除成功')
    set({ selectedRowIds: [], selectedRows: [] }) // 彻底删除成功后清空选中
    get().getRecycleBinList()
  },
}))
