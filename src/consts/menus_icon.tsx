import React from 'react'
import { OutlinedGeneralSetting, OutlinedGeneralBook } from '@hose/eui-icons'

export enum MENUS_ICON_TYPE {
  'OutlinedGeneralSetting' = 'OutlinedGeneralSetting',
  'OutlinedGeneralBook' = 'OutlinedGeneralBook',
}

// 左侧菜单icon
export const MENUS_ICON = (iconType?: MENUS_ICON_TYPE) => {
  return (
    {
      [MENUS_ICON_TYPE.OutlinedGeneralSetting]: <OutlinedGeneralSetting />,
      [MENUS_ICON_TYPE.OutlinedGeneralBook]: <OutlinedGeneralBook />,
    }[iconType || ''] || ''
  )
}
