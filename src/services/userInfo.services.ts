import request from '@/utils/request'
import type { UserInfo } from '@/types'

/** 获取当前登录的用户信息 */
export const getUserInfoService = async (userId: string) => {
  return await request.get<UserInfo>('/userInfo/getByUserId', {
    params: { userId },
  })
}
