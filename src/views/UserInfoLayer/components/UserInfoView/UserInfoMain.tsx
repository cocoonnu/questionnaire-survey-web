import React from 'react'
import { Button, Avatar } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { app } from '@/utils/tools/app_utils'
import avatar from '@/assets/images/avatar.jpg'
import styles from './index.module.less'

const UserInfoMain = () => {
  const userInfoEdit = () => {
    app.open('@UserInfo:UserInfoEdit')
  }

  return (
    <div className={styles['layer-wrapper']}>
      <div className={styles['title-wrapper']}>
        <h3>账户信息</h3>
        <Button size="small" type="link" icon={<EditOutlined />} onClick={userInfoEdit} />
      </div>

      <div className={styles['user-info-wrapper']}>
        <div className={styles['user-info-text']}>
          <div>性别：男</div>
          <div>用户名：cocoon</div>
          <div>用户ID：28065255754432334</div>
        </div>
        <Avatar src={avatar} size={64} />
      </div>

      <div className={styles['title-wrapper']}>
        <h3>账户设置</h3>
      </div>

      <div className={styles['user-setting-wrapper']}>
        <div className={styles['user-setting-line']}>
          <span>密码</span>
          <Button type="link">更换</Button>
        </div>
        <div className={styles['user-setting-line']}>
          <span>手机号：18579152306</span>
          <Button type="link">更换</Button>
        </div>
      </div>
    </div>
  )
}

export default UserInfoMain
