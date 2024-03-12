import { create } from 'zustand'
import { LEFT_PANEL_KEY } from '../constants'
import type { QuestionCompInfo } from '@/services/question.services'

export interface EditQuestionStore {
  /** 左侧面板选中的tab */
  leftSelectedTab: LEFT_PANEL_KEY
  /** 当前选中的问卷组件id */
  selectedId: string
  /** 问卷页面信息 */
  questionComInfoList: QuestionCompInfo[]
}

export const useEditQuestionStore = create<EditQuestionStore>((set, get) => ({
  selectedId: '',
  leftSelectedTab: LEFT_PANEL_KEY.componentLib,
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
