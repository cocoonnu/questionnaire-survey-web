import { EVENT_NAME } from '@/consts/eventListener'
import { app } from './app_utils'
import type { NavigateFunction } from 'react-router-dom'

/**
 * 路由跳转方法，同useNavigate()方法使用
 */
export const navigate: NavigateFunction = (...args) => {
  app.emit(EVENT_NAME.useNavigate, ...args)
}
