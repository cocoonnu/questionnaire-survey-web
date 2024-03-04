import React from 'react'
import { create } from 'zustand'
import { LOGIN_METHOD, PAGE_LAYOUT } from '../consts'
import type { FormInstance } from 'antd'

export interface LoginRegisterStore {
  pageLayout: PAGE_LAYOUT
  loginMethod: string | number
  loginFormRef: React.RefObject<FormInstance>
  registerFormRef: React.RefObject<FormInstance>
  loginSubmit: () => any
}

export const useLoginRegisterStore = create<LoginRegisterStore>((set, get) => ({
  pageLayout: PAGE_LAYOUT.loginLayout,
  loginMethod: LOGIN_METHOD.password,
  loginFormRef: React.createRef(),
  registerFormRef: React.createRef(),

  loginSubmit: () => {
    const { loginFormRef } = get()
    loginFormRef.current?.validateFields()
  },
}))
