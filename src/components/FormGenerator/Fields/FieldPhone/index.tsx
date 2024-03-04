import React from 'react'
import { Input } from 'antd'
import type { FieldComponentProps } from '../../types'

export interface FieldPhoneProps extends FieldComponentProps {
  suffix?: React.ReactNode
  addonBefore?: React.ReactNode
}

const FieldPhone = ({
  value,
  onChange,
  style,
  placeholder,
  size,
  allowClear = true,
  disabled,
  suffix,
}: FieldPhoneProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      style={style}
      size={size}
      allowClear={allowClear}
      placeholder={placeholder}
      disabled={disabled}
      suffix={suffix}
      addonBefore={'+86'}
    />
  )
}

export default FieldPhone
