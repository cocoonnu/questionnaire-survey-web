import React from 'react'
import UserName from './UserName'
import DropdownMenu from '@/components/DropdownMenu'
import { useLayoutStore } from '@/store/layout.store'
import styles from './index.module.less'

const MenuStaff = () => {
  const { userInfo, logout } = useLayoutStore()

  return (
    <DropdownMenu
      menus={[
        {
          key: 'logout',
          title: <span>退出</span>,
          onClick: logout,
        },
      ]}
    >
      <div className={styles['header-menu-trigger']}>
        <UserName user={userInfo} extra="|" />
      </div>
    </DropdownMenu>
  )
}

export default MenuStaff
