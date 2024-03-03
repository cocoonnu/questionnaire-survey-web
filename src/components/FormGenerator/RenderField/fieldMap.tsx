import React from 'react'
import { FORM_TYPE } from '../types/formType'
import FieldInput from '../Fields/FieldInput'
import { Input, Select } from 'antd'

export const FieldMap: Record<FORM_TYPE, any> = {
  [FORM_TYPE.input]: (props) => <Input {...props} />,
  [FORM_TYPE.select]: (props) => <Select {...props} />,
}
