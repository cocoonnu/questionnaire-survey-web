import questionInputConfig from './QuestionInput'
import questionInfoConfig from './QuestionInfo'
import questionTextareaConfig from './QuestionTextarea'
import questionCheckboxConfig from './QuestionCheckbox'
import questionRadioConfig from './QuestionRadio'
import questionSelectConfig from './QuestionSelect'
import type { QuestionComConfig } from './type'

/** 问卷生成器配置列表 */
export const questionComConfigList: QuestionComConfig[] = [
  questionInputConfig,
  questionInfoConfig,
  questionRadioConfig,
  questionTextareaConfig,
  questionCheckboxConfig,
  questionSelectConfig,
]

/** 问卷生成器配置分组 */
export const questionComConfigGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    groupConfigs: [questionInfoConfig],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    groupConfigs: [questionInputConfig, questionTextareaConfig],
  },
  {
    groupId: 'chooseGroup',
    groupName: '用户选择',
    groupConfigs: [questionRadioConfig, questionCheckboxConfig, questionSelectConfig],
  },
]

/** 通过问卷组件类型获取问卷生成器配置 */
export const getQuestionComConfByType = (type: string) => {
  return questionComConfigList.find((c) => c.type === type)
}
