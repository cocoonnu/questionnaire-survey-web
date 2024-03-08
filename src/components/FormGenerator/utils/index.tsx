import type { FormComponentItem } from '../types/formType'
import { FORM_TYPE } from '../types/formType'

export const placeholderBuilder = (item: FormComponentItem) => {
  if (item.placeholder) return item.placeholder
  let placeholder = ''
  switch (item.type) {
    case FORM_TYPE.radioGroup:
      placeholder = item?.placeholder || '请选择选项'
      break
    default:
      placeholder = item?.placeholder || '请输入内容'
      break
  }
  return placeholder
}
