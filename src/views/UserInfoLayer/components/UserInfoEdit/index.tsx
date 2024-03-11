import React from 'react'
import BaseModelLayer from '@/components/BaseModelLayer'
import FormGenerator from '@/components/FormGenerator'
import { useUserInfoStore } from '../../store/userInfo.store'
import {
  fieldUserSex,
  fieldUsername,
  fieldAvatarUpload,
  getFieldCaptcha,
  fieldPhone,
  fieldConfirmPassword,
  fieldPassword,
} from '../../consts/fields'
import { EDIT_TYPE } from '../../consts'
import styles from './index.module.less'
import type { ILayerProps } from '@ekd/enhance-layer-manager'
import type { ButtonProps } from 'antd/lib/button/button'
import { message } from 'antd'

export interface UserInfoEditProps extends ILayerProps {
  editType: EDIT_TYPE
}

const UserInfoEdit = React.forwardRef(({ layer, editType }: UserInfoEditProps) => {
  const btnLoading = useUserInfoStore((s) => s.btnLoading)
  const userInfoFormRef = useUserInfoStore((s) => s.userInfoFormRef)
  const updateUserInfo = useUserInfoStore((s) => s.updateUserInfo)

  const actions: ButtonProps[] = [
    {
      name: '取消',
      onClick: () => layer.emitCancel(),
    },
    {
      name: '确认',
      type: 'primary',
      loading: btnLoading,
      onClick: async () => {
        const res = await updateUserInfo()
        if (res) {
          if (editType === EDIT_TYPE.password) message.success('修改密码成功')
          if (editType === EDIT_TYPE.phone) message.success('修改手机号成功')
          if (editType === EDIT_TYPE.userInfo) message.success('修改个人信息成功')
        }
        layer.emitOk(res)
      },
    },
  ]

  const getFormComponents = () => {
    switch (editType) {
      case EDIT_TYPE.userInfo:
        return [fieldAvatarUpload, fieldUserSex, fieldUsername]
      case EDIT_TYPE.phone:
        return [fieldPhone, getFieldCaptcha(userInfoFormRef)]
      case EDIT_TYPE.password:
        return [fieldPassword, fieldConfirmPassword]
      default:
        return [fieldAvatarUpload, fieldUserSex, fieldUsername]
    }
  }

  return (
    <BaseModelLayer actions={actions} title="修改用户信息">
      <div className={styles['layer-wrapper']}>
        <FormGenerator
          style={{ width: '80%' }}
          layout="horizontal"
          formRef={userInfoFormRef}
          components={getFormComponents()}
        />
      </div>
    </BaseModelLayer>
  )
})

export default UserInfoEdit
