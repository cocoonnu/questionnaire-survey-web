import React from 'react'
import { Input, Button, message } from 'antd'
import { app } from '@/utils/tools/app_utils'
import { sendCaptchaService } from '@/services/user.services'
import type { FormInstance } from 'antd'
import type { FormComponentItem } from '../../types/formType'

export interface FieldCaptchaProps extends FormComponentItem {
  formRef: React.RefObject<FormInstance>
}

const FieldCaptcha = ({
  value,
  onChange,
  style,
  placeholder,
  size,
  allowClear,
  disabled,
  formRef,
}: FieldCaptchaProps) => {
  const getCaptchaClick = async (event: React.MouseEvent) => {
    event.stopPropagation()
    if (!formRef) {
      message.error('系统异常')
      return
    }

    // 校验手机号是否正确
    let phone = ''
    try {
      const res = await formRef?.current?.validateFields(['phone'])
      phone = res?.phone
    } catch (error) {
      return
    }

    // 滑动弹窗解锁
    const res = await app.open('CommonSlideToUnlock')
    if (res && phone) await sendCaptcha(phone)
  }

  const sendCaptcha = async (phone: string) => {
    const res = await sendCaptchaService(phone)
    if (res) message.success('发送验证码成功')
  }

  return (
    <Input
      value={value}
      onChange={onChange}
      style={style}
      size={size}
      allowClear={allowClear}
      placeholder={placeholder}
      disabled={disabled}
      suffix={<Button onClick={getCaptchaClick}>发送验证码</Button>}
    />
  )
}

export default FieldCaptcha
