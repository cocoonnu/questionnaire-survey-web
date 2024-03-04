import React from 'react'
import { FORM_TYPE } from '../types/formType'
import FieldInput from '../Fields/FieldInput'

export const FieldMap: Record<FORM_TYPE, any> = {
  [FORM_TYPE.input]: (props) => <FieldInput {...props} />,
}
