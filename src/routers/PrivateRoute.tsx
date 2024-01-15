import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

// 校验当前用户登录状态
const PrivateRoute = ({ component: Component, meta, title }) => {
  const isPrivate = false

  useEffect(() => {
    if (title) document.title = title // 设置页面标题
    const checkPass = async () => {
      if (!isPrivate) {
        // window.location.href = CORGI_LOGIN_URL;
      }
    }
    checkPass()
  }, [isPrivate, title])

  // 校验是否需要登录
  return !meta.needLogin || isPrivate ? <Component /> : <Navigate replace to={{ pathname: '/' }} />
}

export default PrivateRoute
