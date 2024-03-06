import React, { useEffect } from 'react'
import { useSystemHomeStore } from './store/systemHome.store'

const SystemHome = () => {
  const getUserInfo = useSystemHomeStore((s) => s.getUserInfo)

  useEffect(() => {
    getUserInfo()
  }, [])

  return <div>SystemHome </div>
}

export default SystemHome
