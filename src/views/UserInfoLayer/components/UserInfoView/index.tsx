import React from 'react'
import UserInfoMain from './UserInfoMain'
import BaseModelLayer from '@/components/BaseModelLayer'
import { useUserInfoStore } from '../../store/userInfo.store'
import type { ILayerProps } from '@ekd/enhance-layer-manager'
import type { ButtonProps } from 'antd/lib/button/button'

const UserInfoView = React.forwardRef(({ layer }: ILayerProps) => {
  const btnLoading = useUserInfoStore((s) => s.btnLoading)

  const actions: ButtonProps[] = [
    {
      name: '取消',
      onClick: () => layer.emitCancel(),
    },
    {
      name: '确认',
      type: 'primary',
      loading: btnLoading,
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
