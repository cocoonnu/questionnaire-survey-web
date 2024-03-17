import React from 'react'
import { Select } from 'antd'
import styles from './index.module.less'
import type { SelectProps } from 'antd'
import type { FormComponentItem } from '../../types/formType'

export interface FieldSelectProps extends FormComponentItem {
  options?: { label: string; value: any; disabled?: boolean }[]
  mode?: SelectProps['mode']
  rightNode?: React.ReactNode
}

const FieldSelect = ({
  value,
  onChange,
  style,
  size,
  placeholder,
  options,
  mode,
  rightNode,
  disabled,
}: FieldSelectProps) => {
  const handelValue = () => {
    if (mode === 'tags') {
      if (!value) return undefined
      return value
    }

    if (mode === 'multiple') {
      if (!value) return undefined
      const newValue: any[] = value
      return newValue.filter((newValueItem) => {
        const index = options?.findIndex((item) => item.value === newValueItem)
        return index !== -1
      })
    }

    const index = options?.findIndex((item) => item.value === value)
    if (index !== -1) return value
    return undefined
  }

  return (
    <div className={styles['field-wrapper']}>
      <Select
        mode={mode}
        value={handelValue()}
        onChange={onChange}
        size={size}
        allowClear={!disabled}
        showArrow
        style={style}
        placeholder={placeholder}
        disabled={disabled}
        options={options}
        showSearch
        optionFilterProp="label"
      />
      {rightNode && <div className={styles['button-wrapper']}>{rightNode}</div>}
    </div>
  )
}
export default FieldSelect
