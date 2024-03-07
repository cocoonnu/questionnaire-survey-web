import React from 'react'
import { Menu } from 'antd'
import { navigate } from '@/utils/tools/router_utils'
import { HEADER_MENU_KEY, WORK_AREA_KEY, TEMPLATE_KEY } from '@/layout/consts'
import { useLayoutStore } from '@/layout/store/layout.store'
import styles from './index.module.less'
import type { MenuProps } from 'antd'

const HeaderMenu = () => {
  const headerMenuKey = useLayoutStore((s) => s.headerMenuKey)
  const menuItems = [
    {
      label: '工作台',
      key: HEADER_MENU_KEY.workingArea,
    },
    {
      label: '模板库',
      key: HEADER_MENU_KEY.templateLibrary,
    },
  ]

  const menuClick: MenuProps['onClick'] = (e) => {
    const key = e.key as HEADER_MENU_KEY
    useLayoutStore.setState({ headerMenuKey: key })
    if (e.key === HEADER_MENU_KEY.templateLibrary) {
      navigate(`/app/${TEMPLATE_KEY.questionnaireSurvey}`)
    }
    if (e.key === HEADER_MENU_KEY.workingArea) {
      navigate(`/app/${WORK_AREA_KEY.systemHome}`)
    }
  }

  return (
    <Menu
      mode="horizontal"
      className={styles['header-menu']}
      selectedKeys={[headerMenuKey]}
      items={menuItems}
      onClick={menuClick}
    />
  )
}

export default HeaderMenu
