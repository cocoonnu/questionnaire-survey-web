import React from 'react'
import { Segmented, Button } from 'antd'
import FormGenerator from '@/components/FormGenerator'
import { FORM_TYPE } from '@/components/FormGenerator/types/formType'
import { useLoginRegisterStore } from '@/views/LoginRegister/store/loginRegister.store'
import styles from './index.module.less'

const LoginLayout = () => {
  const { formRef, loginSubmit } = useLoginRegisterStore()

  return (
    <div className={styles['login-layout']}>
      <Segmented
        block
        size="middle"
        options={['密码登录', '验证码登录']}
        style={{ marginBottom: 24 }}
      />
      <FormGenerator formRef={formRef} components={[]} />
      <Button type="primary" onClick={loginSubmit}>
        登录
      </Button>
    </div>
  )
}

export default LoginLayout
