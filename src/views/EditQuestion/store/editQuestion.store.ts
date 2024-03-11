import { create } from 'zustand'
import type { QuestionCompInfo } from '@/services/question.services'

export interface EditQuestionStore {
  questionComInfoList: QuestionCompInfo[]
}

export const useEditQuestionStore = create<EditQuestionStore>((set, get) => ({
  questionComInfoList: [
    {
      id: 'c2',
      type: 'questionTitle', // 组件类型，不能重复，前后端统一好
      title: '标题',
      isHidden: false,
      isLocked: false,
      props: { text: '个人信息调研', level: 1, isCenter: false },
    },
    {
      id: 'c3',
      type: 'questionInput',
      title: '输入框1',
      isHidden: false,
      isLocked: false,
      props: { title: '你的姓名', placeholder: '请输入姓名...' },
    },
    {
      id: 'c4',
      type: 'questionInput',
      title: '输入框2',
      isHidden: false,
      isLocked: false,
      props: { title: '你的电话', placeholder: '请输入电话...' },
    },
  ],
}))
