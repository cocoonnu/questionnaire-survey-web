import React, { useEffect } from 'react'
import { Button, Avatar } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { app } from '@/utils/tools/app_utils'
import { useUserInfoStore } from '../../store/userInfo.store'
import styles from './index.module.less'
import { EDIT_TYPE } from '../../constants'

const UserInfoMain = () => {
  const { phone, username, sex, id, avatar } = useUserInfoStore((s) => s.userInfo)
  const getUserInfo = useUserInfoStore((s) => s.getUserInfo)

  useEffect(() => {
    getUserInfo()
  }, [getUserInfo])

  const userInfoEdit = async (editType: EDIT_TYPE) => {
    const res = await app.open('@UserInfo:UserInfoEdit', { editType })
    if (res) getUserInfo()
  }

  return (
    <div className={styles['layer-wrapper']}>
      <div className={styles['title-wrapper']}>
        <h3>账户信息</h3>
        <Button
          size="small"
          type="link"
          icon={<EditOutlined />}
          onClick={() => userInfoEdit(EDIT_TYPE.userInfo)}
        />
      </div>

      <div className={styles['user-info-wrapper']}>
        <div className={styles['user-info-text']}>
          <div>性别：{sex ? (sex === 'man' ? '男' : '女') : '-'}</div>
          <div>用户名：{username || '-'}</div>
          <div>用户ID：{id || '-'}</div>
        </div>
        <Avatar src={avatar ? `/api/userInfo/avatarDownload/${avatar}` : ''} size={64} />
      </div>

      <div className={styles['title-wrapper']}>
        <h3>账户设置</h3>
      </div>

      <div className={styles['user-setting-wrapper']}>
        <div className={styles['user-setting-line']}>
          <span>密码</span>
          <Button type="link" onClick={() => userInfoEdit(EDIT_TYPE.password)}>
            更换
          </Button>
        </div>
        <div className={styles['user-setting-line']}>
          <span>手机号：{phone || '-'}</span>
          <Button type="link" onClick={() => userInfoEdit(EDIT_TYPE.phone)}>
            更换
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserInfoMain
