import questionInputConfig from './QuestionInput'
import questionTitleConfig from './QuestionTitle'
import type { QuestionComConfig } from './type'

/** 问卷生成器配置列表 */
export const questionComConfigList: QuestionComConfig[] = [questionInputConfig, questionTitleConfig]

/** 问卷生成器配置分组 */
export const questionComConfigGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    groupConfigs: [questionTitleConfig],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    groupConfigs: [questionInputConfig],
  },
  // {
  //   groupId: 'chooseGroup',
  //   groupName: '用户选择',
  //   components: [QuestionRadioConf, QuestionCheckboxConf],
  // },
]

/** 通过问卷组件类型获取问卷生成器配置 */
export const getQuestionComConfByType = (type: string) => {
  return questionComConfigList.find((c) => c.type === type)
}