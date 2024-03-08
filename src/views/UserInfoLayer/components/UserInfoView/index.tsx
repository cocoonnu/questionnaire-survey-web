import React from 'react'
import UserInfoMain from './UserInfoMain'
import ModalFooter from '@/components/ModalFooter'
import type { ILayerProps } from '@ekd/enhance-layer-manager'
import type { ButtonProps } from 'antd/lib/button/button'

const UserInfoView = React.forwardRef(({ layer }: ILayerProps) => {
  const actions: ButtonProps[] = [
    {
      name: '取消',
      onClick: () => layer.emitCancel(),
    },
    {
      name: '确认',
      type: 'primary',
      onClick: () => layer.emitCancel(),
    },
  ]

  return (
    <>
      <UserInfoMain />
      <ModalFooter actions={actions} />
    </>
  )
})
export default UserInfoView
