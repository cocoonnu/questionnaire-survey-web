import React from 'react'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import FormGenerator from '@/components/FormGenerator'
import { PAGE_LAYOUT } from '../../consts'
import { fieldCaptcha, fieldConfirmPassword, fieldPassword, fieldPhone } from '../../consts/fields'
import { useLoginRegisterStore } from '@/views/LoginRegister/store/loginRegister.store'
import styles from './index.module.less'

const RegisterLayout = () => {
  const registerFormRef = useLoginRegisterStore((state) => state.registerFormRef)
  const formComponents = [fieldPhone, fieldCaptcha, fieldPassword, fieldConfirmPassword]

  return (
    <div className={styles['register-layout']}>
      <div className={styles['back-button']}>
        <Button
          type="link"
          size="small"
          icon={<LeftOutlined />}
          onClick={() => useLoginRegisterStore.setState({ pageLayout: PAGE_LAYOUT.loginLayout })}
        >
          返回登录
        </Button>
      </div>
      <div className={styles['register-title']}>手机号注册</div>
      <FormGenerator formRef={registerFormRef} components={formComponents} />
      <div className={styles['bottom-tips-wrap']}>
        <div className={styles['tips-title']}>密码规则</div>
        <div className={styles['tips-content']}>
          密码长度10-20个字符， 其中必须包含大写字母、小写字母、数字 可以使用特殊符号：` ~ ! @ # $ %
          ^ & * ( ) - _ = + / ? \ |
        </div>
      </div>
      <Button type="primary">完成登录</Button>
    </div>
  )
}

export default RegisterLayout