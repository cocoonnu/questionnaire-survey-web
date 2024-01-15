import React from 'react'
import { Layout } from '@hose/eui'
import { Outlet } from 'react-router-dom'
import LayoutHeader from './LayoutHeader'
import MenuSider from './MenuSider'
import PageContentTabs from './PageContentTabs'
import styles from './index.module.less'

const BaseLayout = () => {
  return (
    <Layout className={styles['base-layout-wrap']}>
      <LayoutHeader />
      <Layout>
        <MenuSider />
        <Layout
          id="layout-content"
          style={{
            minHeight: 'calc(100vh - var(--layoutHeaderHeight))',
            overflow: 'hidden',
          }}
        >
          <PageContentTabs />
          <Layout.Content className={styles['layout-content']}>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
