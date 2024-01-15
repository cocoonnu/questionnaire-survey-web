// @ts-nocheck
import { message } from 'antd'
import { getI18n } from './i18n'

/** 判断是否能全屏 */
export const fullscreenEnabled = () => {
  return (
    document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
  )
}

export interface FullScreenData {
  fullDom: any
}

/** 全屏指定容器 */
export const fullScreen = ({ fullDom }: FullScreenData): boolean => {
  const element = fullDom
  if (!document?.fullscreenEnabled) {
    message.error(getI18n('全屏模式被禁用'))
    return false
  }
  let result = null
  if (element?.requestFullscreen) {
    result = element?.requestFullscreen()
  } else if (element?.mozRequestFullScreen) {
    result = element?.mozRequestFullScreen()
  } else if (element?.msRequestFullscreen) {
    result = element?.msRequestFullscreen()
  } else if (element?.webkitRequestFullscreen) {
    result = element?.webkitRequestFullScreen()
  }
  if (result) return true
  message.error('不支持全屏模式')
  return false
}

/** 取消全屏 */
export const cancelFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}
