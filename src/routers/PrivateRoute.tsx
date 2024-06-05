import React, { useEffect } from 'react'
import type { RouterItem } from './types'

export interface PrivateRouteProps {
  item: RouterItem
  component: any
}

/** 私有化路由组件 */
const PrivateRoute = ({ component: Component, item }: PrivateRouteProps) => {
  useEffect(() => {
    // 设置页面元数据
    const { title } = item || {}
    if (title) {
      document.title = title
    } else {
      document.title = '小智问卷'
    }
  }, [item])

  return <Component />
}

export default PrivateRoute
