import request from '@/utils/request'
import type { TEMPLATE_KEY } from '@/constants/menu'

/** 添加问卷模板 */
export const addTemplateInfoService = async (templateInfo: Partial<TemplateInfo>) => {
  return await request.post<TemplateInfo>('/templateInfo/addTemplateInfo', {
    data: templateInfo,
  })
}

/** 查询问卷模板列表 */
export const getTemplateInfoListService = async (templateInfo: Partial<TemplateInfo>) => {
  return await request.post<TemplateInfo[]>('/templateInfo/getTemplateInfoList', {
    data: templateInfo,
  })
}

export interface TemplateInfo {
  id: string
  type: TEMPLATE_KEY
  name: string
  createdTime: string
  comInfoList: any
  isPre: 0 | 1
}
