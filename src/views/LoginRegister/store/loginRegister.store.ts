import React from 'react'
import { create } from 'zustand'
import { DB } from '@/utils/tools/db_utils'
import { LOCALSTORAGE_KEY } from '@/consts'
import { navigate } from '@/utils/tools/router_utils'
import { LOGIN_METHOD, PAGE_LAYOUT } from '../consts'
import {
  LoginByPasswordService,
  LoginByCaptchaService,
  registerService,
} from '@/services/user.services'
import { message, type FormInstance } from 'antd'

export interface LoginRegisterStore {
  pageLayout: PAGE_LAYOUT
  loginMethod: string | number
  loginFormRef: React.RefObject<FormInstance>
  registerFormRef: React.RefObject<FormInstance>
  loginSubmit: () => any
  registerSubmit: () => any
}

export const useLoginRegisterStore = create<LoginRegisterStore>((set, get) => ({
  pageLayout: PAGE_LAYOUT.loginLayout,
  loginMethod: LOGIN_METHOD.password,
  loginFormRef: React.createRef(),
  registerFormRef: React.createRef(),

  loginSubmit: async () => {
    const { loginFormRef, loginMethod } = get()
    const loginService =
      loginMethod === LOGIN_METHOD.password ? LoginByPasswordService : LoginByCaptchaService
    const formData = await loginFormRef.current?.validateFields()
    const userId = await loginService(formData)
    if (!userId) return

    // 登录成功后的回调
    navigate('/app/systemHome')
    DB.LS.set(LOCALSTORAGE_KEY.userId, userId)
    message.success('欢迎进入小智问卷')
  },

  registerSubmit: async () => {
    const { registerFormRef } = get()
    const formData = await registerFormRef.current?.validateFields()
    const userId = await registerService(formData)
    if (!userId) return

    // 注册成功后的回调
    navigate('/app/systemHome')
    DB.LS.set(LOCALSTORAGE_KEY.userId, userId)
    message.success('欢迎进入小智问卷')
  },
}))
