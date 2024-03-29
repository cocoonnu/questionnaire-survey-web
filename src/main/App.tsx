import React from 'react'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Routes from '../routers'
import GlobalLayerManager from './components/GlobalLayerManager'
import GlobalWatchEvent from './components/GlobalWatchEvent'
import './reset.less'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Routes />
        <GlobalLayerManager />
        <GlobalWatchEvent />
      </HashRouter>
    </ConfigProvider>
  )
}

export default App
