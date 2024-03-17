import React from 'react'
import { DatePicker } from 'antd'
import type { Moment } from 'moment'
import type { FormComponentItem } from '../../types/formType'
import 'moment/locale/zh-cn'

export interface FieldDateProps extends FormComponentItem {
  showTime: any
  format: string
  disabledDate: (currentDate: Moment) => boolean
  picker: 'date' | 'week' | 'month' | 'quarter' | 'year'
}

const FieldDate = ({
  value,
  onChange,
  showTime,
  style,
  placeholder,
  disabled,
  disabledDate,
  format,
  size,
  picker = 'date',
}: FieldDateProps) => {
  return (
    <DatePicker
      allowClear
      size={size}
      value={Array.isArray(value) ? null : value}
      onChange={onChange}
      style={{ width: '100%', ...style }}
      placeholder={placeholder}
      picker={picker}
      format={format}
      showTime={showTime}
      disabled={disabled}
      disabledDate={disabledDate}
    />
  )
}
export default FieldDate
