import React from 'react'
import type { DropDownProps } from '@hose/eui'
import { Dropdown, Space } from '@hose/eui'
import type { EkdButtonProps } from '../EkdButton'
import EkdButton from '../EkdButton'
import type { ItemType } from '@hose/eui/es/components/menu/hooks/useItems'
import { OutlinedDirectionDown } from '@hose/eui-icons'

export interface IMenu {
  /** 唯一值key */
  key?: string
  title?: React.ReactNode
  icon?: string | React.ReactNode
  children?: IMenu[]
  /** 元素点击事件 */
  onClick?: any
  disabled?: boolean
  [key: string]: any
}

export interface DropdownMenuProps extends Partial<DropDownProps> {
  menus: IMenu[]
  /** 外层menu点击事件，menuKey为所有下拉菜单元素的key，根据不同点击返回的值不同 */
  menuClick?: (menuKey?: string) => void
  /** 自定义菜单key，默认为menus中的key */
  menuKeyPath?: string
  menuTitlePath?: string
  /** 是否整体禁用 */
  disabled?: boolean
  destroyPopupOnHide?: boolean
  /** 标题 */
  title?: string
  children?: React.ReactNode
  loading?: boolean
  type?: EkdButtonProps['type']
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  menus,
  menuClick,
  disabled = false,
  overlayClassName,
  onOpenChange,
  getPopupContainer,
  destroyPopupOnHide,
  title,
  loading,
  type = 'primary',
}) => {
  const handeMenulItems = () => {
    const menusData: ItemType[] = []
    let isAllEnableAuthority = true
    menus.forEach((item, i) => {
      // const isAuth = authorityStore.getBtnAuthority(item.authorityKey)
      const currentMenuData = {
        key: item.key || i,
        label: <div onClick={() => menuClick?.(item.key)}>{item.title}</div>,
        disabled: item.disabled,
        onClick: item.onClick,
        icon: item.icon,
      }
      // if (item.enableAuthority) {
      //   isAuth && menusData.push(currentMenuData)
      //   return
      // }
      isAllEnableAuthority = false
      menusData.push(currentMenuData)
    })
    return { menusData, isAllEnableAuthority }
  }

  const { menusData, isAllEnableAuthority } = handeMenulItems()
  if (isAllEnableAuthority && menusData.length === 0) return null
  return (
    <Dropdown
      disabled={disabled}
      overlayClassName={overlayClassName}
      onOpenChange={onOpenChange}
      getPopupContainer={getPopupContainer}
      destroyPopupOnHide={destroyPopupOnHide}
      menu={{ items: menusData }}
    >
      {children || (
        <EkdButton type={type} loading={loading}>
          <Space>
            {title}
            <OutlinedDirectionDown />
          </Space>
        </EkdButton>
      )}
    </Dropdown>
  )
}

export default DropdownMenu
