import React from 'react'
import { DatePicker } from 'antd'
import type { Moment } from 'moment'
import type { FormComponentItem } from '../../types/formType'
import 'moment/locale/zh-cn'

export interface FieldDateRangeProps extends FormComponentItem {
  showTime: boolean
  picker: 'date' | 'week' | 'month' | 'quarter' | 'year'
  disabledDate: (currentDate: Moment) => boolean
}

const FieldDateRange = ({
  value,
  onChange,
  disabled,
  style,
  showTime,
  picker,
  disabledDate,
}: FieldDateRangeProps) => {
  return (
    <DatePicker.RangePicker
      value={value}
      onChange={onChange}
      style={{ width: '100%', ...style }}
      showTime={showTime}
      picker={picker || 'date'}
      disabled={disabled}
      disabledDate={disabledDate}
    />
  )
}
export default FieldDateRange
