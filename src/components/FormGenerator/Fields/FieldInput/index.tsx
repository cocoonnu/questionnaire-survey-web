import React from 'react'
import { Input } from 'antd'
import type { TooltipProps } from 'antd'
import type { FieldComponentProps } from '@/components/FormGenerator/types'

export interface FieldInputProps extends FieldComponentProps {
  maxLength: number
  /** 带有前缀图标的 input */
  prefix?: React.ReactNode
  /** 带有后缀图标的 input */
  suffix?: React.ReactNode
  /** 自定义右侧按钮 */
  customizeBtn?: React.ReactNode
  /** 自定义右侧按钮样式 */
  customizeBtnStyle?: React.CSSProperties
  allowClear?: boolean
  onPressEnter?: any
  tipsPlacement?: TooltipProps['placement']
  tipsEnable?: boolean
}

const FieldInput = ({
  value,
  onChange,
  style,
  placeholder,
  disabled,
  previewMode,
}: FieldInputProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      style={style}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

export default FieldInput
