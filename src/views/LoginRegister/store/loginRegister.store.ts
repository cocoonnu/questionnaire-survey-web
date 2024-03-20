import React from 'react'
import { message } from 'antd'
import { create } from 'zustand'
import { DB } from '@/utils/tools/db_utils'
import { LOCALSTORAGE_KEY } from '@/constants'
import { navigate } from '@/utils/tools/router_utils'
import { LOGIN_METHOD, PAGE_LAYOUT } from '../constants'
import {
  LoginByPasswordService,
  LoginByCaptchaService,
  registerService,
  logoutService,
} from '@/services/user.services'
import type { FormInstance } from 'antd'

export interface LoginRegisterStore {
  btnLoading: boolean
  pageLayout: PAGE_LAYOUT
  loginMethod: string | number
  loginFormRef: React.RefObject<FormInstance>
  registerFormRef: React.RefObject<FormInstance>
  loginSubmit: () => any
  registerSubmit: () => any
  logoutSubmit: () => any
}

export const useLoginRegisterStore = create<LoginRegisterStore>((set, get) => ({
  btnLoading: false,
  pageLayout: PAGE_LAYOUT.loginLayout,
  loginMethod: LOGIN_METHOD.password,
  loginFormRef: React.createRef(),
  registerFormRef: React.createRef(),

  loginSubmit: async () => {
    const { loginFormRef, loginMethod } = get()
    set({ btnLoading: true })
    const loginService =
      loginMethod === LOGIN_METHOD.password ? LoginByPasswordService : LoginByCaptchaService
    const formData = await loginFormRef.current?.validateFields()
    const userId = await loginService(formData)
    set({ btnLoading: false })
    if (!userId) return

    // 登录成功后的回调
    navigate('/', { replace: true })
    DB.LS.set(LOCALSTORAGE_KEY.userId, userId)
    message.success('欢迎进入小智问卷')
  },

  registerSubmit: async () => {
    const { registerFormRef } = get()
    const formData = await registerFormRef.current?.validateFields()
    set({ btnLoading: true })
    const userId = await registerService(formData)
    set({ btnLoading: false })
    if (!userId) return

    // 注册成功后的回调
    navigate('/', { replace: true })
    DB.LS.set(LOCALSTORAGE_KEY.userId, userId)
    message.success('欢迎进入小智问卷')
  },

  logoutSubmit: async () => {
    const res = await logoutService()
    if (res) {
      DB.LS.remove(LOCALSTORAGE_KEY.userId)
      navigate('/loginRegister', { replace: true })
      return
    }
    message.error('退出登录失败')
  },
}))
