import { message } from 'antd'
import cloneDeep from 'lodash.clonedeep'
import { ADD_QUESTION_COM } from '../constants'
import { generateRandomString } from '@/utils/tools/random_utils'
import type { EditQuestionStore } from './editQuestion.store'

type SetType = (
  partial:
    | EditQuestionStore
    | Partial<EditQuestionStore>
    | ((state: EditQuestionStore) => EditQuestionStore | Partial<EditQuestionStore>),
  replace?: boolean | undefined,
) => void

type GetType = () => EditQuestionStore

export interface EditHeaderStore {
  /** 选中上一个问卷组件 */
  selectPrevQuestionCom: () => void

  /** 选中下一个问卷组件 */
  selectNextQuestionCom: () => void

  /** 删除选中的问卷组件 */
  deleteSelectedQuestionCom: () => void

  /** 隐藏选中的问卷组件 */
  hideSelectedQuestionCom: () => void

  /** 锁定选中的问卷组件 */
  lockSelectedQuestionCom: () => void

  /** 复制选中的问卷组件 */
  copySelectedQuestionCom: () => void

  /** 重置问卷组件列表 */
  resetQuestionComInfoList: () => void
}

export const useEditHeaderStore = (set: SetType, get: GetType): EditHeaderStore => ({
  selectPrevQuestionCom: () => {
    /**
     * 当处于第一个问卷组件时不处理，否则选中上一个问卷组件
     */
    const { questionComInfoList, selectedId } = get()
    const index = questionComInfoList.findIndex((item) => item.id === selectedId)
    if (index === 0) return
    set({ selectedId: questionComInfoList[index - 1].id })
  },

  selectNextQuestionCom: () => {
    /**
     * 当处于第最后个问卷组件时不处理，否则选中下一个问卷组件
     */
    const { questionComInfoList, selectedId } = get()
    const index = questionComInfoList.findIndex((item) => item.id === selectedId)
    if (index === questionComInfoList.length - 1) return
    set({ selectedId: questionComInfoList[index + 1].id })
  },

  deleteSelectedQuestionCom: () => {
    /**
     * 当问卷组件数量等于1时提示“一份问卷至少需要一个组件”
     * 当删除的是最后一道题目时，自动选中上一个问卷组件
     * 当删除一道题目时，自动选中下一个问卷组件
     */
    const { questionComInfoList, selectedId } = get()
    if (questionComInfoList.length <= 1) {
      message.error('一份问卷至少需要一个题目')
      return
    }

    const index = questionComInfoList.findIndex((item) => item.id === selectedId)
    if (index === questionComInfoList.length - 1) {
      set({ selectedId: questionComInfoList[index - 1].id })
    } else {
      set({ selectedId: questionComInfoList[index + 1].id })
    }
    set({
      questionComInfoList: questionComInfoList.filter((item) => item.id !== selectedId),
    })
    message.success('删除成功')
  },

  hideSelectedQuestionCom: () => {
    /**
     * 只需要控制一个组件的显示与隐藏
     */
    const { questionComInfoList, selectedId } = get()
    const index = questionComInfoList.findIndex((item) => item.id === selectedId)
    const { isHidden } = questionComInfoList[index]

    const newList = [...questionComInfoList]
    newList[index].isHidden = isHidden === 1 ? 0 : 1
    set({ questionComInfoList: newList })
  },

  lockSelectedQuestionCom: () => {
    /**
     * 只需要控制一个组件的锁定状态
     */
    const { questionComInfoList, selectedId } = get()
    const index = questionComInfoList.findIndex((item) => item.id === selectedId)
    const { isLocked } = questionComInfoList[index]

    const newList = [...questionComInfoList]
    newList[index].isLocked = isLocked === 1 ? 0 : 1
    set({ questionComInfoList: newList })
  },

  copySelectedQuestionCom: () => {
    /**
     * 当点击复制一个问卷组件后直接在它的下方深拷贝一份，并且选中
     */
    const { questionComInfoList, selectedId } = get()
    const index = questionComInfoList.findIndex((item) => item.id === selectedId)
    const newQuestionComInfo = cloneDeep(questionComInfoList[index])
    newQuestionComInfo.id = ADD_QUESTION_COM + generateRandomString()

    // 在questionComInfoList的index的后面插入newQuestionComInfo
    const newList = [
      ...questionComInfoList.slice(0, index + 1),
      newQuestionComInfo,
      ...questionComInfoList.slice(index + 1),
    ]
    set({ questionComInfoList: newList, selectedId: newQuestionComInfo.id })
    message.success('复制成功')
  },

  resetQuestionComInfoList: () => {
    const { questionComInfoListInit } = get()
    set({
      selectedId: '',
      questionComInfoList: cloneDeep(questionComInfoListInit),
    })
    message.success('重置成功')
  },
})
