import React from 'react'
import { Input } from 'antd'
import type { FieldComponentProps } from '../../types'

export interface FieldInputProps extends FieldComponentProps {
  suffix?: React.ReactNode
  addonBefore?: React.ReactNode
}

const FieldInput = ({
  value,
  onChange,
  style,
  placeholder,
  size,
  allowClear = true,
  disabled,
  suffix,
  addonBefore,
}: FieldInputProps) => {
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
      addonBefore={addonBefore}
    />
  )
}

export default FieldInput
