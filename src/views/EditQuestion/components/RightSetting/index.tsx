import React from 'react'
import { Tabs } from 'antd'
import ComponentProps from './ComponentProps'
import { RIGHT_PANEL_KEY } from '../../constants'
import { FileTextOutlined } from '@ant-design/icons'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import styles from './index.module.less'

const RightSetting = () => {
  const rightSelectedTab = useEditQuestionStore((state) => state.rightSelectedTab)

  const tabItems = [
    // {
    //   key: RIGHT_PANEL_KEY.pageSetting,
    //   label: (
    //     <span>
    //       <SettingOutlined />
    //       页面设置
    //     </span>
    //   ),
    // },
    {
      key: RIGHT_PANEL_KEY.componentProps,
      label: (
        <span>
          <FileTextOutlined />
          组件属性
        </span>
      ),
    },
  ]

  return (
    <div className={styles['right-setting']}>
      <Tabs
        activeKey={rightSelectedTab}
        items={tabItems}
        onChange={(activeKey) =>
          useEditQuestionStore.setState({ rightSelectedTab: activeKey as RIGHT_PANEL_KEY })
        }
      />
      <div className={styles['right-setting-content']}>
        {rightSelectedTab === RIGHT_PANEL_KEY.componentProps ? <ComponentProps /> : <div>111</div>}
      </div>
    </div>
  )
}

export default RightSetting
