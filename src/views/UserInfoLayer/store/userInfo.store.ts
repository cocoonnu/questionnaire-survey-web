import React from 'react'
import { create } from 'zustand'
import { DB } from '@/utils/tools/db_utils'
import { LOCALSTORAGE_KEY } from '@/consts'
import { getUserInfoService, updateUserInfoService } from '@/services/userInfo.services'
import type { FormInstance } from 'antd'
import type { UserInfo } from '@/services/userInfo.services'

export interface UserInfoStore {
  btnLoading: boolean
  userInfo: UserInfo
  userInfoFormRef: React.RefObject<FormInstance>
  getUserInfo: () => any
  updateUserInfo: () => any
}

export const useUserInfoStore = create<UserInfoStore>((set, get) => ({
  userInfo: {},
  btnLoading: false,
  userInfoFormRef: React.createRef(),

  getUserInfo: async () => {
    const userId = DB.LS.get(LOCALSTORAGE_KEY.userId) || ''
    const userInfo = await getUserInfoService(userId)
    set({ userInfo })
  },

  updateUserInfo: async () => {
    const { userInfoFormRef } = get()
    const { phone, avatar, username, sex, password } =
      await userInfoFormRef.current?.validateFields()
    set({ btnLoading: true })
    const res = await updateUserInfoService({ phone, sex, username, avatar, password })
    set({ btnLoading: false })
    return res
  },
}))
