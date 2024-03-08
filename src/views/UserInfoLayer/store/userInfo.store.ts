import React from 'react'
import { create } from 'zustand'
import { DB } from '@/utils/tools/db_utils'
import { LOCALSTORAGE_KEY } from '@/consts'
import { getUserInfoService } from '@/services/userInfo.services'
import { type FormInstance } from 'antd'

export interface UserInfoStore {
  userInfoFormRef: React.RefObject<FormInstance>
  getUserInfo: () => any
}

export const useUserInfoStore = create<UserInfoStore>((set, get) => ({
  userInfoFormRef: React.createRef(),

  getUserInfo: async () => {
    const userId = DB.LS.get(LOCALSTORAGE_KEY.userId) || ''
    const userInfo = await getUserInfoService(userId)
    console.log('', userInfo)
  },
}))
