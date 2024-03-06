import React, { useEffect } from 'react'
import { Button } from 'antd'
import { useSystemHomeStore } from './store/systemHome.store'
import { useLoginRegisterStore } from '@/views/LoginRegister/store/loginRegister.store'

const SystemHome = () => {
  const getUserInfo = useSystemHomeStore((s) => s.getUserInfo)
  const logoutSubmit = useLoginRegisterStore((s) => s.logoutSubmit)

  useEffect(() => {
    getUserInfo()
  }, [])

  return <Button onClick={logoutSubmit}>退出登录</Button>
}

export default SystemHome
