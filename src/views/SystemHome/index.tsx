import React, { useEffect } from 'react'
import { useSystemHomeStore } from './store/systemHome.store'

const SystemHome = () => {
  const getUserInfo = useSystemHomeStore((s) => s.getUserInfo)

  useEffect(() => {
    getUserInfo()
  }, [getUserInfo])

  return <div>全部问卷</div>
}

export default SystemHome
