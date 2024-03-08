import React from 'react'
import { Button, Modal } from 'antd'
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

  return (
    <div className={styles['personal-center']}>
      <Button type="text" icon={<UserOutlined />} size="large">
        个人中心
      </Button>
      <LogoutOutlined
        rotate={-90}
        style={{ cursor: 'pointer', fontSize: 18 }}
        onClick={logoutClick}
      />
    </div>
  )
}

export default PersonalCenter
