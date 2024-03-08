import React from 'react'
import FormGenerator from '@/components/FormGenerator'
import { useUserInfoStore } from '../../store/userInfo.store'
import ModalFooter from '@/components/ModalFooter'
import { fieldUserSex, fieldUsername, fieldAvatarUpload } from '../../consts/fields'
import styles from './index.module.less'
import type { ILayerProps } from '@ekd/enhance-layer-manager'
import type { ButtonProps } from 'antd/lib/button/button'

const UserInfoEdit = ({ layer }: ILayerProps) => {
  const userInfoFormRef = useUserInfoStore((s) => s.userInfoFormRef)

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
      <div className={styles['layer-wrapper']}>
        <FormGenerator
          style={{ width: '80%' }}
          layout="horizontal"
          formRef={userInfoFormRef}
          components={[fieldAvatarUpload, fieldUserSex, fieldUsername]}
        />
      </div>
      <ModalFooter actions={actions} />
    </>
  )
}

export default UserInfoEdit
