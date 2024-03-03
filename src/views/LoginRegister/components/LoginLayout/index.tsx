import React from 'react'
import { Segmented } from 'antd'
import styles from './index.module.less'

const LoginLayout = () => {
  return (
    <div className={styles['login-layout']}>
      <Segmented block size="middle" options={['密码登录', '验证码登录']} />
    </div>
  )
}

export default LoginLayout
