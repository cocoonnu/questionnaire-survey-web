import React from 'react'
import { Segmented, Button, Checkbox } from 'antd'
import { fieldPhone, getFieldCaptcha, fieldPassword } from '../../consts/fields'
import { MobileOutlined, LockOutlined } from '@ant-design/icons'
import FormGenerator from '@/components/FormGenerator'
import { useLoginRegisterStore } from '@/views/LoginRegister/store/loginRegister.store'
import { LOGIN_METHOD, PAGE_LAYOUT } from '../../consts'
import styles from './index.module.less'

const LoginLayout = () => {
  const { loginMethod, loginFormRef, loginSubmit } = useLoginRegisterStore()
  const formComponents =
    loginMethod === LOGIN_METHOD.password
      ? [fieldPhone, fieldPassword]
      : [fieldPhone, getFieldCaptcha(loginFormRef)]

  const segmentedOptions = [
    {
      label: '密码登录',
      value: LOGIN_METHOD.password,
      icon: <LockOutlined />,
    },
    {
      label: '验证码登录',
      value: LOGIN_METHOD.captcha,
      icon: <MobileOutlined />,
    },
  ]

  return (
    <div className={styles['login-layout']}>
      <Segmented
        block={true}
        size="middle"
        value={loginMethod}
        onChange={(value) => useLoginRegisterStore.setState({ loginMethod: value })}
        options={segmentedOptions}
        style={{ marginBottom: 24 }}
      />
      <FormGenerator formRef={loginFormRef} components={formComponents} />
      <div className={styles['middle-wrapper']}>
        <Checkbox defaultChecked>记住我的登录信息</Checkbox>
        <a
          onClick={() => useLoginRegisterStore.setState({ pageLayout: PAGE_LAYOUT.registerLayout })}
        >
          立即注册
        </a>
      </div>
      <Button type="primary" onClick={loginSubmit}>
        登录
      </Button>
    </div>
  )
}

export default LoginLayout
