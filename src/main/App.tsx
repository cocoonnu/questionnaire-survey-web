import 'antd/dist/antd.css'
import React from 'react'
import { HashRouter as RouterMain } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { ConfigProvider as EUIConfigProvider } from '@hose/eui'
import zhCN from 'antd/es/locale/zh_CN'
import Routes from '../routers' // 路由
import GlobalLayerManager from './components/GlobalLayerManager'
import GlobalWatchEvent from './components/GlobalWatchEvent'

import './reset.less'
import { AliveScope } from 'react-activation'

const App = () => {
  return (
    <EUIConfigProvider locale={zhCN}>
      <ConfigProvider locale={zhCN}>
        <AliveScope>
          <RouterMain>
            <Routes />
            <GlobalLayerManager />
            <GlobalWatchEvent />
          </RouterMain>
        </AliveScope>
      </ConfigProvider>
    </EUIConfigProvider>
  )
}

export default App
