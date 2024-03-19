import { create } from 'zustand'
import { getRecycleBinListService } from '@/services/questionInfo.services'
import type { QuestionInfo } from '@/services/questionInfo.services'

export interface RecycleBinStore {
  isDesc: boolean
  page: number
  pageSize: number
  recycleBinList: QuestionInfo[]

  getRecycleBinList: () => void
}

export const useRecycleBinStore = create<RecycleBinStore>((set, get) => ({
  isDesc: true,
  page: 1,
  pageSize: 10,
  recycleBinListTotal: 0,
  recycleBinList: [],

  getRecycleBinList: async () => {
    const { isDesc, page, pageSize } = get()
    const res = await getRecycleBinListService({ isDesc, page, pageSize })
    if (!res) return
    set({ recycleBinList: res.records })
  },
}))
