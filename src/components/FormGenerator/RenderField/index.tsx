import React from 'react'
import { FieldMap } from './fieldMap'
import { placeholderBuilder } from '../utils'
import type { FormGeneratorProps } from '../types'
import type { FormComponentItem } from '../types/formType'

export interface RenderFieldProps {
  value: any
  onChange: (...arg: any[]) => any
  formItem: FormComponentItem
  isDisabled?: FormGeneratorProps['isDisabled']
  isPreviewMode?: FormGeneratorProps['isPreviewMode']
  disabledItems?: FormGeneratorProps['disabledItems']
  previewModeItems?: FormGeneratorProps['previewModeItems']
  customRenderField?: FormGeneratorProps['customRenderField']
}

const RenderField = ({
  value,
  onChange,
  formItem,
  isDisabled,
  isPreviewMode,
  disabledItems = [],
  previewModeItems = [],
  customRenderField,
}: RenderFieldProps) => {
  const disabled = isDisabled || disabledItems?.includes(formItem.field)
  const previewMode = isPreviewMode || previewModeItems?.includes(formItem.field)
  const placeholder = placeholderBuilder(formItem)

  if (customRenderField) {
    const customFieldComponent = customRenderField?.({
      ...formItem,
      value,
      onChange,
      disabled,
      placeholder,
      previewMode,
    }) || <div />
    return customFieldComponent
  }

  return (
    FieldMap[formItem.type]?.({
      ...formItem,
      value,
      onChange,
      disabled,
      placeholder,
      // previewMode,
    }) || <div />
  )
}

export default RenderField
