import React, { useState, useEffect } from 'react'
import styles from './index.module.less'
import { Tabs } from '@hose/eui'
import PageTabsLable from './PageTabsLable'
import { useLayoutStore } from '@/store/layout.store'

const PageContentTabs = () => {
  const { pageTabActiveKey, onChangePageTab, onDeleteChangePageTab, currentGroupTabList } =
    useLayoutStore()

  return (
    <Tabs
      className={styles['page-tabs-wrap']}
      popupClassName={styles['page-tabs-wrap']}
      tabPosition={'top'}
      style={{ height: 48 }}
      activeKey={pageTabActiveKey}
      onChange={onChangePageTab}
      items={currentGroupTabList()?.map((item) => {
        const id = item?.id
        return {
          label: (
            <PageTabsLable
              route={item}
              tabLabel={`Tab-${id}`}
              isActive={false}
              hasDelete={true}
              onDeleteChange={onDeleteChangePageTab}
            />
          ),
          key: id,
          disabled: id === `28`,
        }
      })}
      destroyInactiveTabPane
    />
  )
}
export default PageContentTabs
