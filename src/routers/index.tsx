import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LazyComponent from '@/components/LazyComponent'
import { isMobile } from '@/utils/tools/browser_utls'
import { globalRouterList, routerList } from './routerList' // 路由配置
import PrivateRoute from './PrivateRoute'
import BaseLayout from '@/layout/BaseLayout'
import type { RouterItem, RoutersState } from './types'
import KeepAliveWrapper from './KeepAliveWrapper'
import NoMatch from '@/components/NoMatch'

const isH5Flag = isMobile()

/** 路由生成处理 */
export const interceptorRoute = (item: RouterItem) => {
  if (item.redirect) {
    return (
      <Route
        path={item.path}
        element={<Navigate replace to={item.redirect || ''} />}
        key={item.path}
      />
    )
  }

  let newComponent = item.component
  if (!item.component) {
    newComponent = isH5Flag ? item.componentH5 : item.componentPc
  }
  const Page = LazyComponent(newComponent)

  return (
    <Route
      path={item.path}
      element={
        <KeepAliveWrapper>
          <PrivateRoute
            meta={item.meta || {}}
            title={item.title}
            key={item.path}
            component={Page}
          />
        </KeepAliveWrapper>
      }
      key={item.path}
    />
  )
}

class Routers extends React.Component<any, RoutersState> {
  render() {
    return (
      <Routes>
        {globalRouterList?.map((item) => {
          return interceptorRoute(item)
        })}
        <Route path="/app" element={<BaseLayout />}>
          {routerList.map((item) => {
            return interceptorRoute(item)
          })}
          <Route path="*" element={<NoMatch />} key="noMatch" />
        </Route>
        <Route path="*" element={<NoMatch />} key="noMatch" />
      </Routes>
    )
  }
}

export default Routers
