import React from 'react'
import { create } from 'zustand'
import type { FormInstance } from 'antd'

export interface AllQuestionnaireStore {
  searchFormRef: React.RefObject<FormInstance>
}

export const useAllQuestionnaireStore = create<AllQuestionnaireStore>((set, get) => ({
  searchFormRef: React.createRef(),
}))
