import questionInputConfig from './QuestionInput'
import questionTitleConfig from './QuestionTitle'
import type { QuestionComConfig } from './type'

/** 问卷生成器配置列表 */
export const questionComConfigList: QuestionComConfig[] = [questionInputConfig, questionTitleConfig]

/** 通过问卷组件类型获取问卷生成器配置 */
export const getQuestionComConfByType = (type: string) => {
  return questionComConfigList.find((c) => c.type === type)
}
