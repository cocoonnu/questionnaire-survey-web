import React from 'react'
import { Button, Modal } from 'antd'
import { app } from '@/utils/tools/app_utils'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { useLoginRegisterStore } from '@/views/LoginRegister/store/loginRegister.store'
import styles from './index.module.less'

const PersonalCenter = () => {
  const logoutSubmit = useLoginRegisterStore((s) => s.logoutSubmit)

  const logoutClick = () => {
    Modal.confirm({
      title: '确定退出登录吗?',
      okText: '确定',
      cancelText: '取消',
      maskClosable: true,
      centered: true,
      onOk: logoutSubmit,
    })
  }

  const userInfoClick = () => {
    app.open('@UserInfo:UserInfoView')
  }

  return (
    <div className={styles['personal-center']}>
      <Button type="text" icon={<UserOutlined />} size="large" onClick={userInfoClick}>
        个人中心
      </Button>
      <Button
        type="text"
        size="large"
        onClick={logoutClick}
        icon={<LogoutOutlined rotate={-90} />}
      />
    </div>
  )
}

export default PersonalCenter
