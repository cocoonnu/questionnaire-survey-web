import React from 'react'
import { Checkbox, Space } from 'antd'
import type { FormComponentItem } from '../../types/formType'

export interface FieldCheckboxProps extends FormComponentItem {
  defaultValue?: any
  direction?: 'horizontal' | 'vertical'
  options: { label: string; value: any; disabled?: boolean }[]
}

const FieldCheckbox = ({
  value,
  onChange,
  disabled,
  defaultValue,
  direction,
  options,
}: FieldCheckboxProps) => {
  return (
    <Checkbox.Group
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      disabled={disabled}
    >
      <Space direction={direction || 'horizontal'}>
        {options?.map((item, index) => {
          const itemValue = item.value
          const itemLabel = item.label
          const itemDisabled = item?.disabled
          return (
            <Checkbox key={index} value={itemValue} disabled={itemDisabled}>
              {itemLabel}
            </Checkbox>
          )
        })}
      </Space>
    </Checkbox.Group>
  )
}

export default FieldCheckbox
