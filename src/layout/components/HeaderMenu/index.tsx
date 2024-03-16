import React from 'react'
import { Menu } from 'antd'
import { navigate } from '@/utils/tools/router_utils'
import { HEADER_MENU_KEY, WORK_AREA_KEY, TEMPLATE_KEY } from '@/constants/menu'
import { useLayoutStore } from '@/layout/store/layout.store'
import styles from './index.module.less'
import type { MenuProps } from 'antd'

const HeaderMenu = () => {
  const headerMenuKey = useLayoutStore((s) => s.headerMenuKey)
  const workingAreaKey = useLayoutStore((s) => s.workingAreaKey)
  const templateLibraryKey = useLayoutStore((s) => s.templateLibraryKey)

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
    if (e.key === HEADER_MENU_KEY.templateLibrary) {
      navigate(`/app/${templateLibraryKey || TEMPLATE_KEY.questionnaireSurvey}`)
    }
    if (e.key === HEADER_MENU_KEY.workingArea) {
      navigate(`/app/${workingAreaKey || WORK_AREA_KEY.allQuestionnaire}`)
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
