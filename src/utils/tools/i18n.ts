/**
 * 多语言函数，同i18n.get语法相同
 * 例如：i18n.get('请输入{__k0}，参数{__k1}', { __k0: field.label, __k1: field.title })
 */
export const getI18n = (str: string, fieldsMapping?: Record<string, string | number>) => {
  // return i18n.get(str, fieldsMapping)
  let newStr = str
  if (fieldsMapping) {
    Object.entries(fieldsMapping).forEach(([key, value]) => {
      newStr = newStr.replace(new RegExp(`{${key}}`, 'g'), `${value}`)
    })
  }
  return newStr
}
