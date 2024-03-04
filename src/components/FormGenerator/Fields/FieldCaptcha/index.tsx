import React from 'react'
import { Input, Button } from 'antd'
import type { FieldComponentProps } from '../../types'

export interface FieldCaptchaProps extends FieldComponentProps {
  /** 发送验证码之前的校验函数，返回值获取手机号 */
  beforeGetCaptcha: () => any
}

const FieldCaptcha = ({
  value,
  onChange,
  style,
  placeholder,
  size,
  allowClear,
  disabled,
}: FieldCaptchaProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      style={style}
      size={size}
      allowClear={allowClear}
      placeholder={placeholder}
      disabled={disabled}
      suffix={<Button>获取验证码</Button>}
    />
  )
}

export default FieldCaptcha
