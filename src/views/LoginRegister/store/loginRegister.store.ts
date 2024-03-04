import React from 'react'
import { create } from 'zustand'
import type { FormInstance } from 'antd'

export interface LoginRegisterStore {
  formRef: React.RefObject<FormInstance>
  loginSubmit: () => any
}

export const useLoginRegisterStore = create<LoginRegisterStore>((set, get) => ({
  formRef: React.createRef(),

  loginSubmit: () => {
    const { formRef } = get()
    formRef.current?.validateFields()
    console.log('', formRef.current?.getFieldsValue())
  },
}))
