import React from 'react'
import UserInfoMain from './UserInfoMain'
import BaseModelLayer from '@/components/BaseModelLayer'
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
    <BaseModelLayer actions={actions} title="个人中心">
      <UserInfoMain />
    </BaseModelLayer>
  )
})
export default UserInfoView
