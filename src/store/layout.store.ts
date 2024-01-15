import MENUS from '@/consts/menus'
import { navigate } from '@/utils/tools/router_utils'
import { create } from 'zustand'
import { MenuGroup, type LayoutStore } from './types/layout.types'
import { DB } from '@/utils/tools/db_utils'

// 创建store
export const useLayoutStore = create<LayoutStore>((set, get) => ({
  menuList: [], // 左侧菜单数据
  pageRole: {}, // 页面权限数据（字典）
  userInfo: {},
  selectedKey: '',
  pageTabActiveKey: '0',
  collapsed: false,
  loading: false,
  currentGroupMenu: MenuGroup.front,
  // tab标签页标记
  groupTabsList: {
    front:
      new Array(30).fill(null).map((_, i) => {
        return {
          id: `${i}`,
        }
      }) || [],
    center: [],
    back: [],
    audit: [],
  },
  currentGroupTabList() {
    const { groupTabsList, currentGroupMenu } = get()
    return groupTabsList[currentGroupMenu] ?? []
  },
  setGroupTabList(newTabsList) {
    const { groupTabsList, currentGroupMenu } = get()
    groupTabsList[currentGroupMenu] = newTabsList
    const newGroupTabsList = groupTabsList
    set({
      groupTabsList: newGroupTabsList,
    })
  },
  logout: async () => {
    navigate({
      pathname: '/demo',
    })
  },
  updateCollapsed: (collapsed) => {
    DB.LS.set('sider_collapsed', collapsed)
    set({
      collapsed,
    })
  },
  getMenusList: async () => {
    set({
      menuList: MENUS,
    })
    return []
  },
  // header tab更换当前处于活动的key
  onChangePageTab: (key: string) => {
    const { pageTabActiveKey } = get()
    if (pageTabActiveKey === key) return
    set({
      pageTabActiveKey: key,
    })
  },
  onDeleteChangePageTab: (routerData) => {
    const { currentGroupTabList, setGroupTabList } = get()
    const currentPageTabsData = currentGroupTabList()
    const dataIndex = currentPageTabsData.findIndex((item) => item.id === routerData.id)
    if (dataIndex > -1) {
      currentPageTabsData.splice(dataIndex, 1)
      setGroupTabList(currentPageTabsData)
    }
  },
  onSeletedMenu: async (key) => {
    set({ selectedKey: key })
  },
  getPageRoleInfo: async () => {
    return []
  },
  getUserInfo: async () => {
    const userInfoRes = await new Promise((resolve) => {
      resolve({})
    })
    localStorage.setItem('user_info', JSON.stringify(userInfoRes?.data))
    const name = DB.LS.get('username') || '管理员'
    set({
      userInfo: {
        name,
      },
    })
  },
}))
