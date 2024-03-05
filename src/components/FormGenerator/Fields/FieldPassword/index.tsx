import React from 'react'
import { Input } from 'antd'
import type { KeyboardEventHandler } from 'react'
import type { FormComponentItem } from '../../types/formType'

export interface FieldPasswordProps extends FormComponentItem {
  suffix?: React.ReactNode
  addonBefore?: React.ReactNode
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>
}

const FieldPassword = ({
  value,
  onChange,
  style,
  placeholder,
  disabled,
  suffix,
  size,
  addonBefore,
  onPressEnter,
}: FieldPasswordProps) => {
  return (
    <Input.Password
      allowClear={false}
      value={value}
      onChange={onChange}
      style={style}
      size={size}
      placeholder={placeholder}
      disabled={disabled}
      suffix={suffix}
      addonBefore={addonBefore}
      onPressEnter={onPressEnter}
    />
  )
}

export default FieldPassword
