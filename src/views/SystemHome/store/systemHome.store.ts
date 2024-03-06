import { create } from 'zustand'
import { DB } from '@/utils/tools/db_utils'
import { LOCALSTORAGE_KEY } from '@/consts'
import { getUserInfoService } from '@/services/userInfo.services'

export interface SystemHomeStore {
  getUserInfo: () => any
}

export const useSystemHomeStore = create<SystemHomeStore>((set, get) => ({
  getUserInfo: async () => {
    const userId = DB.LS.get(LOCALSTORAGE_KEY.userId) || ''
    const userInfo = await getUserInfoService(userId)
    console.log('', userInfo)
  },
}))
