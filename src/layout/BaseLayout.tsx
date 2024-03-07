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
  const { Header, Content, Sider } = Layout
  const location = useLocation()
  const monitorPathChange = useLayoutStore((s) => s.monitorPathChange)

  useEffect(() => {
    monitorPathChange(location.pathname)
  }, [location, monitorPathChange])

  return (
    <Layout className={styles['base-layout']}>
      <Header className={styles['base-layout-header']}>
        <div className={styles['header-logo']} onClick={() => navigate('/')}>
          <img className={styles['log-img']} src={logImg} />
          <div className={styles['log-title']}>小智问卷</div>
        </div>
        <HeaderMenu />
      </Header>
      <Layout>
        <Sider width={220} theme="light">
          <SiderMenu />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
