import React from 'react'
import { Menu } from 'antd'
import {
  StarOutlined,
  RestOutlined,
  HomeOutlined,
  LikeOutlined,
  FireOutlined,
  CalculatorOutlined,
} from '@ant-design/icons'
import PersonalCenter from './PersonalCenter'
import { navigate } from '@/utils/tools/router_utils'
import { useLayoutStore } from '@/layout/store/layout.store'
import { WORK_AREA_KEY, HEADER_MENU_KEY, TEMPLATE_KEY } from '@/layout/consts'
import styles from './index.module.less'

const getIconComponent = (ICON) => {
  return React.createElement(ICON, { style: { fontSize: 16 } })
}

const SiderMenu = () => {
  const headerMenuKey = useLayoutStore((s) => s.headerMenuKey)
  const workingAreaKey = useLayoutStore((s) => s.workingAreaKey)
  const templateLibraryKey = useLayoutStore((s) => s.templateLibraryKey)

  const menuItemsByWorkingAreaKey = [
    {
      label: '全部问卷',
      key: WORK_AREA_KEY.systemHome,
      icon: getIconComponent(HomeOutlined),
    },
    {
      label: '星标问卷',
      key: WORK_AREA_KEY.starQuestionnaire,
      icon: getIconComponent(StarOutlined),
    },
    {
      label: '回收站',
      key: WORK_AREA_KEY.recycleBin,
      icon: getIconComponent(RestOutlined),
    },
  ]

  const menuItemsByTemplateLibraryKey = [
    {
      label: '问卷调查',
      key: TEMPLATE_KEY.questionnaireSurvey,
      icon: getIconComponent(FireOutlined),
    },
    {
      label: '在线考试',
      key: TEMPLATE_KEY.onlineExamination,
      icon: getIconComponent(CalculatorOutlined),
    },
    {
      label: '投票评选',
      key: TEMPLATE_KEY.votingTemplate,
      icon: getIconComponent(LikeOutlined),
    },
  ]

  const getMenuItems = () => {
    switch (headerMenuKey) {
      case HEADER_MENU_KEY.workingArea:
        return menuItemsByWorkingAreaKey
      case HEADER_MENU_KEY.templateLibrary:
        return menuItemsByTemplateLibraryKey
      default:
        return menuItemsByWorkingAreaKey
    }
  }

  const getSelectedKey = () => {
    switch (headerMenuKey) {
      case HEADER_MENU_KEY.workingArea:
        return workingAreaKey
      case HEADER_MENU_KEY.templateLibrary:
        return templateLibraryKey
      default:
        return workingAreaKey
    }
  }

  return (
    <div className={styles['sider-menu']}>
      <Menu
        mode="vertical"
        items={getMenuItems()}
        onClick={(e) => navigate(`/app/${e.key}`)}
        selectedKeys={[getSelectedKey()]}
      />
      <PersonalCenter />
    </div>
  )
}

export default SiderMenu
