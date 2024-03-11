import request from '@/utils/request'

/** 用户信息类型 */
export interface UserInfo {
  id?: string
  username?: string
  phone?: string
  email?: string
  sex?: string
  avatar?: string
  password?: string
}

/** 获取当前登录的用户信息 */
export const getUserInfoService = async (userId: string) => {
  return await request.get<UserInfo>('/userInfo/getByUserId', {
    params: { userId },
  })
}

/** 更新当前登录的用户信息 */
export const updateUserInfoService = async (userInfo: UserInfo) => {
  return await request.post<UserInfo>('/userInfo/updateUserInfo', {
    data: userInfo,
  })
}
