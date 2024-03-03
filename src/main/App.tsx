import React from 'react'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { ConfigProvider as EUIConfigProvider } from '@hose/eui'
import { AliveScope } from 'react-activation'
import zhCN from 'antd/es/locale/zh_CN'
import Routes from '../routers'
import GlobalLayerManager from './components/GlobalLayerManager'
import GlobalWatchEvent from './components/GlobalWatchEvent'

import './reset.less'
import 'antd/dist/antd.css'
// import './theme.less'

const App = () => {
  return (
    <EUIConfigProvider locale={zhCN}>
      <ConfigProvider locale={zhCN}>
        <AliveScope>
          <HashRouter>
            <Routes />
            <GlobalLayerManager />
            <GlobalWatchEvent />
          </HashRouter>
        </AliveScope>
      </ConfigProvider>
    </EUIConfigProvider>
  )
}

export default App
