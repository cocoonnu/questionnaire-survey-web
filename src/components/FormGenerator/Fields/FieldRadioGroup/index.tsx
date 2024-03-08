import React from 'react'
import { Radio, Space } from 'antd'
import type { FormComponentItem } from '../../types/formType'

export interface FieldRadioGroupProps extends FormComponentItem {
  defaultValue?: any
  optionType?: 'default' | 'button'
  direction?: 'horizontal' | 'vertical'
  options: { label: string; value: string; disabled?: boolean }[]
}

const FieldRadioGroup = ({
  value,
  onChange,
  disabled,
  defaultValue,
  direction,
  options,
  optionType,
}: FieldRadioGroupProps) => {
  return (
    <Radio.Group value={value} onChange={onChange} defaultValue={defaultValue} disabled={disabled}>
      <Space direction={direction || 'horizontal'}>
        {options?.map((item, index) => {
          const itemValue = item.value
          const itemLabel = item.label
          const itemDisabled = item?.disabled
          return optionType !== 'button' ? (
            <Radio key={index} value={itemValue} disabled={itemDisabled}>
              {itemLabel}
            </Radio>
          ) : (
            <Radio.Button key={index} value={itemValue} disabled={itemDisabled}>
              {itemLabel}
            </Radio.Button>
          )
        })}
      </Space>
    </Radio.Group>
  )
}

export default FieldRadioGroup
