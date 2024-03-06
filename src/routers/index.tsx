import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LazyComponent from '@/components/LazyComponent'
import { isMobile } from '@/utils/tools/browser_utils'
import { globalRouterList, routerList } from './routerList'
import PrivateRoute from './PrivateRoute'
import BaseLayout from '@/layout/BaseLayout'
import KeepAliveWrapper from './KeepAliveWrapper'
import NoMatchPage from '@/components/NoMatchPage'
import type { RouterItem, RoutersState } from './types'

const interceptorRoute = (item: RouterItem) => {
  if (item.redirect) {
    const redirect = item.redirect || '/'
    return <Route path={item.path} key={item.path} element={<Navigate replace to={redirect} />} />
  }

  // 动态展示电脑端还是手机端
  let newComponent = item.component
  if (!newComponent) {
    newComponent = isMobile() ? item.componentH5 : item.componentPc
  }

  // 异步加载路由组件
  const lazyComponent = LazyComponent(newComponent)
  const getRouteComponent = () => {
    return (
      <KeepAliveWrapper>
        <PrivateRoute item={item} component={lazyComponent} />
      </KeepAliveWrapper>
    )
  }

  return <Route path={item.path} key={item.path} element={getRouteComponent()} />
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
          <Route path="*" element={<NoMatchPage />} key="noMatch" />
        </Route>
        <Route path="*" element={<NoMatchPage />} key="noMatch" />
      </Routes>
    )
  }
}

export default Routers
