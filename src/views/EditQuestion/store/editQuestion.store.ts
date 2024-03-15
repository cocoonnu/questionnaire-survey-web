import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { LEFT_PANEL_KEY, RIGHT_PANEL_KEY } from '../constants'
import { useEditHeaderStore } from './editHeader.store'
import type { EditHeaderStore } from './editHeader.store'
import type { QuestionComConfig, QuestionComProps } from '@/components/QuestionGenerator/type'
import type { QuestionCompInfo, QuestionInfoType } from '@/services/question.services'
import { message } from 'antd'

export interface EditQuestionStore extends EditHeaderStore {
  /** 左侧面板选中的tab */
  leftSelectedTab: LEFT_PANEL_KEY
  /** 右侧面板选中的tab */
  rightSelectedTab: RIGHT_PANEL_KEY
  /** 当前选中的问卷组件id */
  selectedId: string
  /** 问卷信息 */
  questionInfo: QuestionInfoType
  /** 问卷组件信息列表 */
  questionComInfoList: QuestionCompInfo[]

  /** 根据id获取questionComInfo，默认为选中的id */
  getQuestionComInfoById: (id?: string) => QuestionCompInfo | null

  /** 点击左侧面板组件库的组件回调函数  */
  addQuestionComInfo: (config: QuestionComConfig) => void

  /** 根据id更新questionComInfoList中的props属性 */
  updateQuestionComInfoProps: (id: string, newProps: QuestionComProps) => void

  /** 保存按钮 */
  saveQuestion: () => Promise<void>
}

export const useEditQuestionStore = create<EditQuestionStore>((set, get) => ({
  selectedId: '',
  leftSelectedTab: LEFT_PANEL_KEY.componentLib,
  rightSelectedTab: RIGHT_PANEL_KEY.componentProps,
  questionInfo: {
    id: '2806525575',
    name: '前端工程师问卷调查',
    desc: '这是一份前端工程师的问卷调查',
    createdTime: '2023-06-01 12:00:00',
    creatorId: '2221352523423423',
    isDeleted: false,
    isPublished: false,
  },
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

  ...useEditHeaderStore(set, get),

  getQuestionComInfoById: (id?) => {
    const { selectedId, questionComInfoList } = get()
    const idValue = id || selectedId
    return questionComInfoList.find((item) => item.id === idValue) || null
  },

  addQuestionComInfo: (config) => {
    const questionComInfo: QuestionCompInfo = {
      id: nanoid(),
      type: config.type,
      title: config.title,
      isHidden: false,
      isLocked: false,
      props: config.defaultProps,
    }
    const { selectedId, questionComInfoList } = get()
    const newQuestionComInfoList = questionComInfoList.concat()

    const index = questionComInfoList.findIndex((item) => item.id === selectedId)
    if (index < 0) {
      // 当前未选中任何问卷组件则在末尾新增组件
      newQuestionComInfoList.push(questionComInfo)
    } else {
      // 在当前选中的问卷组件后面新增组件
      newQuestionComInfoList.splice(index + 1, 0, questionComInfo)
    }

    set({
      questionComInfoList: newQuestionComInfoList,
      selectedId: questionComInfo.id,
      rightSelectedTab: RIGHT_PANEL_KEY.componentProps,
    })
  },

  updateQuestionComInfoProps: (id, newProps) => {
    const { questionComInfoList } = get()
    const newQuestionComInfoList = questionComInfoList.concat()
    const index = questionComInfoList.findIndex((item) => item.id === id)
    if (index < 0) return

    // 更新对应问卷组件信息的prop属性
    const { props } = newQuestionComInfoList[index]
    newQuestionComInfoList[index].props = { ...props, ...newProps }
    set({ questionComInfoList: newQuestionComInfoList })
  },

  saveQuestion: async () => {
    const { questionComInfoList, questionInfo } = get()
    console.log('', questionComInfoList, questionInfo)
    message.success('保存成功')
  },
}))
