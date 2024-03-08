import { create } from 'zustand'
import { DB } from '@/utils/tools/db_utils'
import { LOCALSTORAGE_KEY } from '@/consts'
import { getUserInfoService } from '@/services/userInfo.services'

export interface SystemHomeStore {}

export const useSystemHomeStore = create<SystemHomeStore>((set, get) => ({}))
