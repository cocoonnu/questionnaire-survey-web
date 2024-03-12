import { app } from './app_utils'
import { routerList, globalRouterList } from '@/routers/routerList'
import { EVENT_NAME } from '@/constants/eventListener'
import type { NavigateFunction } from 'react-router-dom'
import type { RouterItem } from '@/routers/types'

/** 路由跳转方法，同useNavigate()方法使用 */
export const navigate: NavigateFunction = (...args) => {
  app.emit(EVENT_NAME.useNavigate, ...args)
}

/** 路由菜单映射 */
export const routerMenuMap = {
  ...routerList?.reduce((preValues, curValue) => {
    const newValues = preValues
    if (curValue.path) newValues[curValue.path] = curValue
    return newValues
  }, {}),
  ...globalRouterList?.reduce((preValues, curValue) => {
    const newValues = preValues
    if (curValue.path) newValues[curValue.path] = curValue
    return newValues
  }, {}),
}

/**
 * 获取当前路由的路由菜单配置
 * @path 路径地址
 * @return 路由配置
 */
export const getRouteInfo = (path: string) => {
  return (routerMenuMap[path] as RouterItem) || {}
}
