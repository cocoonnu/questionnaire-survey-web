import { getI18n } from '@/utils/tools/i18n'
import type { FormComponentItem } from '../types/formType'
import { FORM_TYPE } from '../types/formType'

export const placeholderBuilder = (item: FormComponentItem) => {
  if (item.placeholder) return item.placeholder
  let placeholder = ''
  switch (item.type) {
    case FORM_TYPE.select:
      placeholder = item?.placeholder || getI18n('请选择选项')
      break
    default:
      placeholder = item?.placeholder || getI18n('请输入内容')
      break
  }
  return placeholder
}
