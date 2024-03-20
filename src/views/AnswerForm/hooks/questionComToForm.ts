import { generateRandomString } from '@/utils/tools/random_utils'
import { FORM_TYPE } from '@/components/FormGenerator/types/formType'
import { QuestionComType } from '@/components/QuestionGenerator/type'
import type { QuestionComInfo } from '@/services/questionInfo.services'
import type { FormComponentsProps } from '@/components/FormGenerator/types/formType'

export const questionComToForm = (questionComInfo: QuestionComInfo): FormComponentsProps => {
  const { isParagraphCenter, isTitleCenter, title, desc, options, isVertical, selectedValue } =
    questionComInfo.props
  const field = questionComInfo.type + generateRandomString()
  const label = questionComInfo.props.title || ''

  switch (questionComInfo.type) {
    case QuestionComType.questionInfo:
      return {
        field,
        label,
        type: FORM_TYPE.typography,
        hiddenLabel: true,
        optional: true,
        title,
        desc,
        isParagraphCenter,
        isTitleCenter,
      }

    case QuestionComType.questionInput:
      return {
        field,
        label,
        type: FORM_TYPE.input,
      }

    case QuestionComType.questionTextarea:
      return {
        field,
        label,
        type: FORM_TYPE.input,
        isTextArea: true,
      }

    case QuestionComType.questionRadio:
      return {
        field,
        label,
        type: FORM_TYPE.radioGroup,
        defaultValue: selectedValue,
        direction: isVertical ? 'vertical' : 'horizontal',
        options: options?.map(({ text, value }) => ({ value, label: text || '' })),
      }
    case QuestionComType.questionCheckbox:
      return {
        field,
        label,
        type: FORM_TYPE.checkbox,
        defaultValue: selectedValue,
        direction: isVertical ? 'vertical' : 'horizontal',
        options: options?.map(({ text, value }) => ({ value, label: text || '' })),
      }

    default:
      return {
        field,
        label,
        type: FORM_TYPE.input,
        hiddenLabel: true,
        optional: true,
      }
  }
}
