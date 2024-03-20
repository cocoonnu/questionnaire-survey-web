import { create } from 'zustand'
import { getQuestionInfoByIdService } from '@/services/questionInfo.services'

export interface AnswerFormStore {
  /** 问卷id */
  questionId: string

  /** 获取问卷信息 */
  getQuestionInfoById: () => Promise<void>
}

export const useAnswerFormStore = create<AnswerFormStore>((set, get) => ({
  questionId: '',

  getQuestionInfoById: async () => {
    const { questionId } = get()
    if (questionId === '' || !questionId) return
    const res = await getQuestionInfoByIdService(questionId)
    const initList = res.questionComInfoList?.map((item) => ({
      ...item,
      isHidden: item.isHidden === 1,
      isLocked: item.isLocked === 1,
      props: JSON.parse(item.props),
    }))
    console.log('initList', initList)
    // set({
    //   questionId: res.id,
    //   questionComInfoList: cloneDeep(initList),
    //   questionComInfoListInit: cloneDeep(initList),
    // })
  },
}))
