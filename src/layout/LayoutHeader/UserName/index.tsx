import React from 'react'
import classnames from 'classnames'
import { Avatar } from '@hose/eui'
import { OutlinedGeneralMember } from '@hose/eui-icons'
import styles from './index.module.less'

export interface UserNameProps {
  className?: string
  user: Record<string, any>
  size?: 'large' | 'small' | 'default' | number
  extra?: React.ReactNode
}

export const UserName: React.FC<UserNameProps> = ({ className, user, size = 'small', extra }) => {
  return (
    <span className={classnames(styles['user-name'], className)}>
      <Avatar size={size} icon={<OutlinedGeneralMember />} src={user?.avatar} />
      <span className={styles.name}>{user?.name || user?.cellphone}</span>
      {extra && <span className="extra">{extra}</span>}
    </span>
  )
}

export default UserName
