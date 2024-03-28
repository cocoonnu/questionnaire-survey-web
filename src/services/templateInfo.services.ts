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

/** 删除问卷模板 */
export const deleteTemplateInfoService = async (id: string) => {
  return await request.del<boolean>('/templateInfo/deleteTemplateInfo', {
    params: { id },
  })
}

/** 获取问卷模板 */
export const getTemplateInfoByIdService = async (id: string) => {
  return await request.get<TemplateInfo>('/templateInfo/getTemplateInfoById', {
    params: { id },
  })
}

export interface TemplateInfo {
  id: string
  type: TEMPLATE_KEY
  name: string
  createdTime: string
  comInfoList: any
  isPre: 0 | 1
  userId: string
}
