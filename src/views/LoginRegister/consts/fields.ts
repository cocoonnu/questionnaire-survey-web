import { FORM_TYPE } from '@/components/FormGenerator/types/formType'
import type { FormComponentItem } from '@/components/FormGenerator/types/formType'

export const fieldPhone: FormComponentItem = {
  field: 'phone',
  label: '手机号',
  type: FORM_TYPE.phone,
  hiddenLabel: true,
  placeholder: '请输入手机号',
}

export const fieldPassword: FormComponentItem = {
  field: 'password',
  label: '密码',
  type: FORM_TYPE.password,
  hiddenLabel: true,
  placeholder: '请输入密码',
}

export const fieldConfirmPassword: FormComponentItem = {
  field: 'confirmPassword',
  label: '确认密码',
  type: FORM_TYPE.password,
  hiddenLabel: true,
  placeholder: '请确认密码',
}

export const fieldCaptcha: FormComponentItem = {
  field: 'captcha',
  label: '验证码',
  type: FORM_TYPE.captcha,
  hiddenLabel: true,
  placeholder: '请输入验证码',
}
