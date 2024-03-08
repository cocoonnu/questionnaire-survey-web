import React from 'react'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import avatar from '@/assets/images/avatar.jpg'
import styles from './index.module.less'

const UserInfoView = React.forwardRef(() => {
  return (
    <div className={styles['layer-wrapper']}>
      <div className={styles['user-info-wrapper']}>
        <div className={styles['title-wrapper']}>
          <div className={styles.title}>账户信息</div>
          <Button size="small" type="link" icon={<EditOutlined />} />
        </div>
        <div className={styles['info-wrapper']}>
          <img className={styles['avatar-img']} src={avatar} />
          <div className={styles['text-wrapper']}>
            <div>性别：男</div>
            <div>用户名：cocoon</div>
            <div>ID：28065255754432334</div>
          </div>
        </div>
      </div>

      <div className={styles['user-setting-wrapper']}>
        <div className={styles.title}>账户设置</div>
        <div className={styles['info-wrapper']}>
          <div className={styles['info-line']}>
            <span>密码</span>
            <Button type="link">更换</Button>
          </div>
          <div className={styles['info-line']}>
            <span>手机号：18579152306</span>
            <Button type="link">更换</Button>
          </div>
        </div>
      </div>
    </div>
  )
})
export default UserInfoView
