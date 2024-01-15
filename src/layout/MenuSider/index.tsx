import React, { useEffect, useState } from 'react'
import { Layout, Menu, Spin } from '@hose/eui'
import { useLocation } from 'react-router-dom'
import { DB } from '@/utils/tools/db_utils'
import type { IMenusItem } from '@/consts/menus'
import menus from '@/consts/menus'
import { MENUS_ICON } from '@/consts/menus_icon'
import type { ItemType } from 'antd/es/menu/hooks/useItems'
import { useLayoutStore } from '@/store/layout.store'
import { OutlinedEditSideExpand, OutlinedEditSideFold } from '@hose/eui-icons'
import styles from './index.module.less'

// 左侧菜单组件
const MenuSider = () => {
  const {
    collapsed,
    menuList,
    loading,
    selectedKey,
    getMenusList,
    onSeletedMenu,
    updateCollapsed,
  } = useLayoutStore()
  const [openKey, setOpenKey] = useState<string[]>([])
  const location = useLocation()

  const updataPathMapMenus = () => {
    const { pathname } = location || {}
    const paths = treeSearch(menus, pathname) || []
    if (paths?.length) {
      DB.SS.set('cur_menu_path', paths[0])
    }

    const getMenuByCatchPath = menus.filter(
      (item) => (item.path || item.url) === DB.SS.get('cur_menu_path'),
    )
    const curSubMenu = paths?.length
      ? menus.filter((item) => (item.path || item.url) === paths[0])
      : getMenuByCatchPath

    // 初始化选中当前路由对应的菜单
    const curPath =
      (curSubMenu[0]?.children || []).filter((item) => (item.path || item.url) === pathname)[0]
        ?.path || ''

    onSeletedMenu?.(curPath)

    // 默认打开当前路由对应的菜单选项
    setOpenKey(curSubMenu.map((item) => item.path || item.url) as string[])
  }

  useEffect(() => {
    updataPathMapMenus()
    getMenusList?.()
  }, [])

  // 递归查找路由 返回目标路由以及所有祖先路由组成的数组
  const treeSearch = (data, path = '') => {
    function getPathRes(result: any[], treeData: any) {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of treeData) {
        if ((item.path || item.url) === path) {
          result.push(item.path || item.url)
          return result
        }
        if (item?.children?.length) {
          const res = getPathRes([...result, item.path || item.url], item.children)
          if (res) {
            return res
          }
        }
      }
    }
    return getPathRes([], data)
  }

  const menuClick = (e) => {
    onSeletedMenu?.(e.key)
  }

  // SubMenu 子菜单 展开/关闭的回调
  const openMenu = (openKeys) => {
    const rootSubmenuKeys = menuList?.map((item) => item.path || item.url)
    const latestOpenKey = openKeys.find((key) => openKey.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKey(openKeys)
      return
    }
    setOpenKey(latestOpenKey ? [latestOpenKey] : [])
  }

  const handleMenus = (list?: IMenusItem[]): ItemType[] => {
    const menuAllData: ItemType[] = []
    list?.forEach((item: IMenusItem) => {
      if (!item.enabled) return
      const currentMenu: any = {
        key: item.path,
        label: item.name,
        icon: MENUS_ICON(item.icon),
      }

      if (item.children && item.children?.length > 0) {
        currentMenu.children = handleMenus(item.children)
      }
      menuAllData.push(currentMenu)
    })
    return menuAllData
  }

  return (
    <Layout.Sider
      theme="light"
      trigger={
        collapsed ? (
          <OutlinedEditSideFold className={styles.trigger} />
        ) : (
          <OutlinedEditSideExpand className={styles.trigger} />
        )
      }
      collapsible
      collapsed={collapsed}
      className={styles['layout-sider']}
      onCollapse={(newCollapsed) => {
        updateCollapsed(newCollapsed)
      }}
    >
      <Spin className={styles.loadingWrap} size="large" spinning={loading}>
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={menuClick}
          onOpenChange={openMenu}
          openKeys={openKey}
          items={handleMenus(menuList)}
        />
      </Spin>
    </Layout.Sider>
  )
}

export default MenuSider
