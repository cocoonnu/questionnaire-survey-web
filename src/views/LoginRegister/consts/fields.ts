import { FORM_TYPE } from '@/components/FormGenerator/types/formType'
import type { FormComponentItem } from '@/components/FormGenerator/types/formType'

export const fieldPhone: FormComponentItem = {
  field: 'phone',
  label: '手机号',
  type: FORM_TYPE.phone,
  hiddenLabel: true,
  placeholder: '请输入手机号',
  rules: [
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确格式的手机号',
    },
  ],
}

export const fieldPassword: FormComponentItem = {
  field: 'password',
  label: '密码',
  type: FORM_TYPE.password,
  hiddenLabel: true,
  placeholder: '请输入密码',
  rules: [
    {
      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()-_=+/?\\|]{10,20}$/,
      message: '请输入正确格式的密码',
    },
  ],
}

export const fieldConfirmPassword: FormComponentItem = {
  field: 'confirmPassword',
  label: '确认密码',
  type: FORM_TYPE.password,
  hiddenLabel: true,
  placeholder: '请确认密码',
  rules: [
    (formRef) => ({
      validator(rules, value) {
        if (!value || formRef.getFieldValue('password') === value) {
          return Promise.resolve()
        }
        return Promise.reject(new Error('两次密码输入不一致'))
      },
    }),
  ],
}

export const getFieldCaptcha = (formRef) => {
  const fieldCaptcha: FormComponentItem = {
    field: 'captcha',
    label: '验证码',
    type: FORM_TYPE.captcha,
    hiddenLabel: true,
    placeholder: '请输入验证码',
    formRef,
  }
  return fieldCaptcha
}
