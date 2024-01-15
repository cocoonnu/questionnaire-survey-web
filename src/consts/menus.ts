import { MENUS_ICON_TYPE } from './menus_icon'

export interface IMenusItem {
  name: string
  path: string
  url?: string
  icon?: MENUS_ICON_TYPE
  enabled?: boolean
  component?: string
  children?: IMenusItem[]
}

export type IMenus = IMenusItem[]

const MENUS: IMenus = [
  {
    name: '系统管理',
    path: '/app',
    icon: MENUS_ICON_TYPE.OutlinedGeneralSetting,
    enabled: true,
    children: [
      {
        name: '首页',
        path: '/app/home',
        component: '@/views/Home',
        enabled: true,
      },
    ],
  },
]

export default MENUS
