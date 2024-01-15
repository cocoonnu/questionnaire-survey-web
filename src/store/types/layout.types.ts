import type { IMenus } from '@/consts/menus'

export enum MenuGroup {
  front = 'front',
  center = 'center',
  back = 'back',
  audit = 'audit',
  statistical = 'statistical',
  ekd_debug_menu = 'ekd_debug_menu',
}

export interface EMenu {
  active: boolean
  availableRange: any
  businessSummary: boolean
  code: string
  color: string
  condition: string
  createTime: number
  dynamicSupportValue: boolean
  icon: string
  id: string
  label: string
  pid: string
  selected: boolean
  showType: string
  source: string
  sourceType: string
  type: string
  updateTime: number
  version: number
  weight: number
  directoryFormId: string
  directoryCategoryId: string
  parent: EMenu
  children: EMenu[]
  isHide?: boolean
  /** 是否是动态菜单 */
  isDynamic?: boolean
  itemGroup: MenuGroup
}

export interface GroupTabsList {
  front: EMenu[]
  center: EMenu[]
  back: EMenu[]
  audit: EMenu[]
}

export interface LayoutStore {
  /** 个人信息 */
  userInfo: Record<string, any>
  menuList: IMenus
  /** 左侧选中菜单 */
  selectedKey: string
  /** 左侧菜单是否收缩 */
  collapsed: boolean
  /** 当前选中的顶部菜单分组 */
  currentGroupMenu: MenuGroup
  /** 页签tab数据 */
  groupTabsList: GroupTabsList
  /** tabs页签选中Key */
  pageTabActiveKey: string
  /** 获取当前分组菜单下，所有页签tabs数据 */
  currentGroupTabList: () => EMenu[]
  /** 设置当前分组下 页签tabs数据 */
  setGroupTabList: (data: EMenu[]) => void
  pageRole: Record<string, any>
  loading: boolean
  /** 获取菜单权限列表 */
  getMenusList: () => any
  /** 退出登录 */
  logout: () => any
  /** 保存左侧菜单点击key，用于刷新页面时找到最后一次key */
  onSeletedMenu: (key: string) => any
  /** 页签tab切换事件 */
  onChangePageTab: (key: string) => any
  /** 页签tab移除事件 */
  onDeleteChangePageTab: (routerData: any) => any
  /** 获取页面权限相关信息 */
  getPageRoleInfo: () => any
  updateCollapsed: (flag: boolean) => any
  /** 获取用户信息 */
  getUserInfo: () => any
}
