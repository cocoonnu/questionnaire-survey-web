/** 判断鼠标焦点是否在body上而不是输入框 */
export const isActiveElementValid = () => {
  const activeElem = document.activeElement
  if (activeElem === document.body) return true
  if (activeElem?.matches('div[role="button"]')) return true
  return false
}

/**
 * 判断元素是否在视区中
 * @param el 被判断元素
 * @param scrollEl 滚动条所在元素
 * @returns
 */
export const isInView = (element, scrollEl) => {
  if (!element || !scrollEl) return true
  const viewPortHeight = scrollEl.clientHeight // 滚动元素的高度
  const offsetTop = element?.offsetTop // 当前元素距离父元素顶部的距离
  const scrollTop = scrollEl?.scrollTop // 滚动条的滚动距离
  /**
   * 判断是否在滚动元素的视区内
   * 1.当前元素距离滚动元素顶部的距离 > 滚动条滚动的距离
   * 2.当前元素距离滚动元素顶部的距离 <= 滚动元素的高度 + 滚动条的滚动距离
   */
  const isInViewFlag = offsetTop > scrollTop && offsetTop <= viewPortHeight + scrollTop
  return isInViewFlag
}

/**
 * 滚动到指定元素位置
 */
export const domScrollTo = (domId: string, opts?: ScrollIntoViewOptions) => {
  const anchorElement = document.getElementById(domId)
  if (anchorElement) {
    anchorElement.scrollIntoView({ behavior: 'smooth', ...opts })
  }
}
