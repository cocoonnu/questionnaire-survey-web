import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { message } from 'antd'
import cloneDeep from 'lodash.clonedeep'
import { arrayMove } from '@dnd-kit/sortable'
import { LEFT_PANEL_KEY, RIGHT_PANEL_KEY } from '../constants'
import { useEditHeaderStore } from './editHeader.store'
import {
  getQuestionInfoByIdService,
  saveQuestionInfoService,
} from '@/services/questionInfo.services'
import { navigate } from '@/utils/tools/router_utils'
import { DB } from '@/utils/tools/db_utils'
import { LOCALSTORAGE_KEY } from '@/constants'
import { TEMPLATE_KEY } from '@/constants/menu'
import { QuestionComType } from '@/components/QuestionGenerator/type'
import type { EditHeaderStore } from './editHeader.store'
import type { QuestionComConfig, QuestionComProps } from '@/components/QuestionGenerator/type'
import type { QuestionComInfo } from '@/services/questionInfo.services'

export interface EditQuestionStore extends EditHeaderStore {
  /** 左侧面板选中的tab */
  leftSelectedTab: LEFT_PANEL_KEY
  /** 右侧面板选中的tab */
  rightSelectedTab: RIGHT_PANEL_KEY
  /** 当前选中的问卷组件id */
  selectedId: string
  /** 问卷名 */
  questionName: string
  /** 问卷id */
  questionId: string
  /** 问卷组件列表 */
  questionComInfoList: QuestionComInfo[]
  /** 问卷组件初始列表 */
  questionComInfoListInit: QuestionComInfo[]

  /** 获取问卷信息 */
  getQuestionInfoById: () => Promise<void>

  /** 根据问卷组件ID获取问卷组件信息 */
  getQuestionComInfoById: (id?: string) => QuestionComInfo | null

  /** 保存问卷信息 */
  saveQuestionInfo: () => Promise<void>

  /** 新增问卷组件  */
  addQuestionComInfo: (config: QuestionComConfig) => void

  /** 更新问卷组件的props属性 */
  updateQuestionComInfoProps: (id: string, newProps: QuestionComProps) => void

  /** 拖拽时的回调函数 */
  onDragEnd: (oldIndex: number, newIndex: number) => void
}

export const useEditQuestionStore = create<EditQuestionStore>((set, get) => ({
  selectedId: '',
  questionId: '',
  leftSelectedTab: LEFT_PANEL_KEY.componentLib,
  rightSelectedTab: RIGHT_PANEL_KEY.componentProps,
  questionName: '',
  questionComInfoList: [],
  questionComInfoListInit: [],

  ...useEditHeaderStore(set, get),

  getQuestionInfoById: async () => {
    const { questionId } = get()
    if (!questionId) {
      const intList: QuestionComInfo[] = [
        {
          id: nanoid(), // 先用nanoid生成，后面后端会覆盖掉
          title: '问卷信息',
          type: QuestionComType.questionInfo,
          isHidden: 0,
          isLocked: 0,
          props: {
            title: '问卷标题',
            desc: '请输入问卷描述...',
            isTitleCenter: true,
            isParagraphCenter: false,
          },
        },
      ]
      set({
        questionName: '问卷名',
        questionComInfoList: cloneDeep(intList),
        questionComInfoListInit: cloneDeep(intList),
      })
      return
    }
    const res = await getQuestionInfoByIdService(questionId)
    const initList = res.questionComInfoList?.map((item) => ({
      ...item,
      props: JSON.parse(item.props),
    }))
    set({
      questionId: res.id,
      questionName: res.name,
      questionComInfoList: cloneDeep(initList),
      questionComInfoListInit: cloneDeep(initList),
    })
  },

  saveQuestionInfo: async () => {
    const { questionId, questionName, questionComInfoList } = get()
    if (!questionId) {
      // 新建问卷信息
      const res = await saveQuestionInfoService({
        id: questionId,
        name: questionName,
        questionComInfoList: questionComInfoList.map((item) => ({
          ...item,
          props: JSON.stringify(item.props),
        })),
        userId: DB.LS.get(LOCALSTORAGE_KEY.userId),
        template: TEMPLATE_KEY.questionnaireSurvey,
      })
      if (res) {
        navigate(`/editQuestion/${res.id}`, { replace: true })
        message.success('保存成功')
      }
      return
    }
    // 更新问卷信息
    const res = await saveQuestionInfoService({
      id: questionId,
      name: questionName,
      questionComInfoList: questionComInfoList.map((item) => ({
        ...item,
        props: JSON.stringify(item.props),
      })),
    })
    if (res) message.success('保存成功')
  },

  getQuestionComInfoById: (id?) => {
    const { selectedId, questionComInfoList } = get()
    const idValue = id || selectedId
    return questionComInfoList.find((item) => item.id === idValue) || null
  },

  addQuestionComInfo: (config) => {
    const questionComInfo: QuestionComInfo = {
      id: nanoid(), // 先用nanoid生成，后面后端会覆盖掉
      type: config.type,
      title: config.title,
      isHidden: 0,
      isLocked: 0,
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

  onDragEnd: (oldIndex, newIndex) => {
    /**
     * 拖拽时传入拖拽前的位置index和拖拽后的位置index
     * 之后选中的拖拽的问卷组件和更新问卷组件列表
     */
    const { questionComInfoList } = get()
    const dragId = questionComInfoList.find((item, index) => index === oldIndex)?.id
    const newQuestionComInfoList = arrayMove(questionComInfoList, oldIndex, newIndex)
    set({ questionComInfoList: newQuestionComInfoList, selectedId: dragId })
  },
}))
