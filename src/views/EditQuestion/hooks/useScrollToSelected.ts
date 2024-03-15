import { useEffect } from 'react'

/**
 * 监听selectedId使画布滚动到选中的问卷组件位置
 */
export const useScrollToSelectedId = (selectedId: string) => {
  useEffect(() => {
    const editCanvasElement = document.getElementById('edit-canvas')
    if (!editCanvasElement || !selectedId) return
    const selectedQuestionComElement = document.getElementById(selectedId)
    selectedQuestionComElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [selectedId])
}

/**
 * 监听selectedIndex使画布滚动到选中的问卷组件位置
 */
export const useScrollToSelectedIndex = (selectedIndex: number, selectedId: string) => {
  useEffect(() => {
    const editCanvasElement = document.getElementById('edit-canvas')
    if (!editCanvasElement || !selectedId) return
    const selectedQuestionComElement = document.getElementById(selectedId)
    selectedQuestionComElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [selectedIndex])
}
