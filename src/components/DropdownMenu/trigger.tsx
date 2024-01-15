import React, { useState } from 'react'
import type { DropdownMenuProps } from './index'
import DropdownMenu from './index'
import EkbIcon from '../EkdButton'
import { Space } from '@hose/eui'

interface DropdownMenuTriggerProps extends DropdownMenuProps {
  title?: React.ReactNode | any
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  title,
  children = title,
  disabled,
  ...others
}) => {
  const [visible, setVisible] = useState(false)
  const onVisibleChange = (visible: boolean) => {
    setVisible(visible)
  }
  const style = { opacity: disabled ? 0.25 : 1 }
  return (
    <DropdownMenu {...others} disabled={disabled} onVisibleChange={onVisibleChange}>
      <Space size={8} className="trigger" style={style}>
        {children}
        <EkbIcon name={`#EDico-${visible ? 'up' : 'down'}-default`} />
      </Space>
    </DropdownMenu>
  )
}

export default DropdownMenuTrigger
