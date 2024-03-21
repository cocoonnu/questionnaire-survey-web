import axios from 'axios'
import request from '@/utils/request'

/** 提交问卷 */
export const submitAnswerInfoService = async (data: {
  questionId: string
  answerMap: any
  address: string
}) => {
  return await request.post<boolean>('/answerInfo/submitAnswerInfo', {
    data,
  })
}

/** 查询当前用户地理位置 */
export const getUserAddressService = async () => {
  const res = await axios.get('/address/ws/location/v1/ip', {
    params: { key: 'OF2BZ-Z57R3-TLF3M-RHVG3-JQCWE-4WFYY' },
  })
  if (res.data?.result) return res.data.result?.ad_info
  return null
}

export interface AnswerInfo {
  questionId: string
  answerMap: Record<string, string>
  createdTime: string
  address: string
  orderNumber: number
}
