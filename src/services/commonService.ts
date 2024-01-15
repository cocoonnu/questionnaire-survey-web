import request from '../utils/request'

interface IQiniuToken {
  data: {
    uptoken?: string
  }
}

/**
 * 获取七牛token
 */
export const getQiniuToken = async (): Promise<string> => {
  const res = await request.get<IQiniuToken>(`/common/qiniu/token`)
  return res?.data?.uptoken || ''
}
