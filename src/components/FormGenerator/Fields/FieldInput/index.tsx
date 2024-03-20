import React from 'react'
import { Input } from 'antd'
import type { FormComponentItem } from '../../types/formType'

export interface FieldInputProps extends FormComponentItem {
  suffix?: React.ReactNode
  addonBefore?: React.ReactNode
  isTextArea?: boolean
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
  isTextArea,
}: FieldInputProps) => {
  if (isTextArea) {
    return (
      <Input.TextArea
        value={value}
        onChange={onChange}
        style={style}
        size={size}
        allowClear={allowClear}
        placeholder={placeholder}
        disabled={disabled}
      />
    )
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
      suffix={suffix}
      addonBefore={addonBefore}
    />
  )
}

export default FieldInput
