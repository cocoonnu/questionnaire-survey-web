import React from 'react'
import { Tabs } from 'antd'
import ComponentLib from './ComponentLib'
import { LEFT_PANEL_KEY } from '../../constants'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import styles from './index.module.less'

const LeftPanel = () => {
  const leftSelectedTab = useEditQuestionStore((state) => state.leftSelectedTab)

  const tabItems = [
    {
      key: LEFT_PANEL_KEY.componentLib,
      label: (
        <span>
          <AppstoreOutlined />
          组件库
        </span>
      ),
    },
    {
      key: LEFT_PANEL_KEY.layerAttribute,
      label: (
        <span>
          <BarsOutlined />
          图层
        </span>
      ),
    },
  ]

  return (
    <div className={styles['left-panel']}>
      <Tabs
        items={tabItems}
        onChange={(activeKey) =>
          useEditQuestionStore.setState({ leftSelectedTab: activeKey as LEFT_PANEL_KEY })
        }
      />
      <div className={styles['left-panel-content']}>
        {leftSelectedTab === LEFT_PANEL_KEY.componentLib ? <ComponentLib /> : <div />}
      </div>
    </div>
  )
}

export default LeftPanel
