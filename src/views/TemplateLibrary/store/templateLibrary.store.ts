import { create } from 'zustand'
import { message } from 'antd'
import {
  getTemplateInfoListService,
  deleteTemplateInfoService,
} from '@/services/templateInfo.services'
import type { TEMPLATE_KEY } from '@/constants/menu'
import type { TemplateInfo } from '@/services/templateInfo.services'

export interface TemplateLibraryStore {
  templateType: string
  templateInfoList: TemplateInfo[]

  getTemplateInfoList: () => void
  deleteTemplateInfo: (id: string) => void
}

export const useTemplateLibraryStore = create<TemplateLibraryStore>((set, get) => ({
  templateType: '',
  templateInfoList: [],

  getTemplateInfoList: async () => {
    const { templateType } = get()
    const res = await getTemplateInfoListService({ type: templateType as TEMPLATE_KEY })
    if (res) set({ templateInfoList: res })
  },

  deleteTemplateInfo: async (id: string) => {
    const { getTemplateInfoList } = get()
    const res = await deleteTemplateInfoService(id)
    if (res) {
      message.success('删除成功')
      getTemplateInfoList()
    }
  },
}))
