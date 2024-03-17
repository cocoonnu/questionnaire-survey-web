import React from 'react'
import { FORM_TYPE } from '../types/formType'
import FieldInput from '../Fields/FieldInput'
import FieldPassword from '../Fields/FieldPassword'
import FieldCaptcha from '../Fields/FieldCaptcha'
import FieldPhone from '../Fields/FieldPhone'
import FieldRadioGroup from '../Fields/FieldRadioGroup'
import FieldAvatarUpload from '../Fields/FieldAvatarUpload'
import FieldSelect from '../Fields/FieldSelect'
import FieldDateRange from '../Fields/FieldDateRange'
import FieldDate from '../Fields/FieldDate'

export const FieldMap: Record<FORM_TYPE, any> = {
  [FORM_TYPE.input]: (props) => <FieldInput {...props} />,
  [FORM_TYPE.password]: (props) => <FieldPassword {...props} />,
  [FORM_TYPE.captcha]: (props) => <FieldCaptcha {...props} />,
  [FORM_TYPE.phone]: (props) => <FieldPhone {...props} />,
  [FORM_TYPE.radioGroup]: (props) => <FieldRadioGroup {...props} />,
  [FORM_TYPE.avatarUpload]: (props) => <FieldAvatarUpload {...props} />,
  [FORM_TYPE.select]: (props) => <FieldSelect {...props} />,
  [FORM_TYPE.dateRange]: (props) => <FieldDateRange {...props} />,
  [FORM_TYPE.date]: (props) => <FieldDate {...props} />,
}
