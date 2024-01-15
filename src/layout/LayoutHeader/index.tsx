import React, { useEffect } from 'react'
import { Layout, Divider } from '@hose/eui'
import { getI18n } from '@/utils/tools/i18n'
import LOGO from '@/assets/images/logo.svg'
import MenuStaff from './MenuStaff'
import { useLayoutStore } from '@/store/layout.store'
import styles from './index.module.less'

const { Header } = Layout

const LayoutHeader = () => {
  const { getUserInfo } = useLayoutStore()

  const init = async () => {
    const userInfoRes = await getUserInfo()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Header className={styles['layout-header']}>
      <div className={styles['header-logo']}>
        <img src={LOGO} />
        <Divider className={styles['divider-wrapper']} type="vertical" />
        <span className={styles['header-title']}>{getI18n('合思档案')}</span>
      </div>
      <ul className={styles['menu-ul']}>
        {/* {globalCommonStore.topMenuGroup?.map((item) => {
            return (
              <li
                key={item.value}
                className={vm.currentGroup === item.value ? 'active' : 'list'}
                onClick={() => vm.changeMenuGroup(item.value)}
              >
                {item.title}
              </li>
            )
          })} */}
      </ul>
      <div className={styles['header-menu']}>
        <MenuStaff />
      </div>
    </Header>
  )
}

export default LayoutHeader
