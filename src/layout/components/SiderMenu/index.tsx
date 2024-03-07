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
import { navigate } from '@/utils/tools/router_utils'
import { useLayoutStore } from '@/layout/store/layout.store'
import { WORK_AREA_KEY, HEADER_MENU_KEY, TEMPLATE_KEY } from '@/layout/consts'
import styles from './index.module.less'
import type { MenuProps } from 'antd'

const SiderMenu = () => {
  const headerMenuKey = useLayoutStore((s) => s.headerMenuKey)
  const workingAreaKey = useLayoutStore((s) => s.workingAreaKey)
  const templateLibraryKey = useLayoutStore((s) => s.templateLibraryKey)

  const menuItemsByWorkingAreaKey = [
    {
      label: '全部问卷',
      key: WORK_AREA_KEY.systemHome,
      icon: <HomeOutlined style={{ fontSize: 16 }} />,
    },
    {
      label: '星标问卷',
      key: WORK_AREA_KEY.starQuestionnaire,
      icon: <StarOutlined style={{ fontSize: 16 }} />,
    },
    {
      label: '回收站',
      key: WORK_AREA_KEY.recycleBin,
      icon: <RestOutlined style={{ fontSize: 16 }} />,
    },
  ]

  const menuItemsByTemplateLibraryKey = [
    {
      label: '问卷调查',
      key: TEMPLATE_KEY.questionnaireSurvey,
      icon: <FireOutlined style={{ fontSize: 16 }} />,
    },
    {
      label: '在线考试',
      key: TEMPLATE_KEY.onlineExamination,
      icon: <CalculatorOutlined style={{ fontSize: 16 }} />,
    },
    {
      label: '投票评选',
      key: TEMPLATE_KEY.votingTemplate,
      icon: <LikeOutlined style={{ fontSize: 16 }} />,
    },
  ]

  const menuClickByWorkingArea: MenuProps['onClick'] = (e) => {
    const key = e.key as WORK_AREA_KEY
    navigate(`/app/${key}`)
  }

  const menuClickByTemplateLibraryKey: MenuProps['onClick'] = (e) => {
    const key = e.key as TEMPLATE_KEY
    navigate(`/app/${key}`)
  }

  return (
    <div className={styles['sider-menu']}>
      {headerMenuKey === HEADER_MENU_KEY.workingArea ? (
        <Menu
          mode="vertical"
          items={menuItemsByWorkingAreaKey}
          onClick={menuClickByWorkingArea}
          selectedKeys={[workingAreaKey]}
        />
      ) : (
        <Menu
          mode="vertical"
          items={menuItemsByTemplateLibraryKey}
          onClick={menuClickByTemplateLibraryKey}
          selectedKeys={[templateLibraryKey]}
        />
      )}
      <div>个人中心</div>
    </div>
  )
}

export default SiderMenu
