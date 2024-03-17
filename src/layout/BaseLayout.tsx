import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { useLocation, Outlet } from 'react-router-dom'
import SiderMenu from './components/SiderMenu'
import HeaderMenu from './components/HeaderMenu'
import logImg from '@/assets/images/logo.png'
import { navigate } from '@/utils/tools/router_utils'
import { useLayoutStore } from '@/layout/store/layout.store'
import styles from './index.module.less'

const BaseLayout = () => {
  const location = useLocation()
  const monitorPathChange = useLayoutStore((s) => s.monitorPathChange)

  useEffect(() => {
    monitorPathChange(location.pathname)
  }, [location, monitorPathChange])

  return (
    <div className={styles['base-layout']}>
      <Layout.Header className={styles['base-layout-header']}>
        <div className={styles['header-logo']} onClick={() => navigate('/')}>
          <img className={styles['log-img']} src={logImg} />
          <div className={styles['log-title']}>小智问卷</div>
        </div>
        <HeaderMenu />
      </Layout.Header>
      <div className={styles['base-layout-main']}>
        <div className={styles['base-layout-sider']}>
          <SiderMenu />
        </div>
        <div className={styles['base-layout-content']}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default BaseLayout
