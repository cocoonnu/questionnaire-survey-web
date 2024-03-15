/**
 * 判断当前鼠标焦点元素是否运行使用快捷键
 * 主要是为了防止在输入框中使用到自定义快捷键
 */
export const isActiveElementValid = () => {
  const activeElem = document.activeElement
  // 如果是body则运行
  if (activeElem === document.body) return true
  // 如果是div[role="button"]元素则运行
  if (activeElem?.matches('div[role="button"]')) return true
  // 如果是button标签则允许
  if (activeElem?.matches('button')) return true
  return false
}
