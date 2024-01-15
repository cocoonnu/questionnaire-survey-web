import React from 'react'
import { Space } from '@hose/eui'

interface ButtonIconTextPorps {
  title: string | React.ReactNode
  icon?: React.ReactNode
  /** icon方向位置 */
  iconDirection?: 'left' | 'right'
}

/**
 * icon按钮内部文字规范组件，自带规范间距
 */
const ButtonIconText = ({ title, icon, iconDirection = 'right' }: ButtonIconTextPorps) => {
  return (
    <Space>
      {iconDirection === 'left' && icon}
      {title}
      {iconDirection === 'right' && icon}
    </Space>
  )
}
export default ButtonIconText
