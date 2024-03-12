import { FORM_TYPE } from '@/components/FormGenerator/types/formType'
import styles from '../components/UserInfoEdit/index.module.less'
import type { FormComponentsProps } from '@/components/FormGenerator/types/formType'

export const fieldPhone: FormComponentsProps = {
  field: 'phone',
  label: '手机号',
  type: FORM_TYPE.phone,
  placeholder: '请输入手机号',
  rules: [
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确格式的手机号',
    },
  ],
}

export const fieldPassword: FormComponentsProps = {
  field: 'password',
  label: '密码',
  type: FORM_TYPE.password,
  placeholder: '请输入密码',
  rules: [
    {
      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()-_=+/?\\|]{10,20}$/,
      message: '请输入正确格式的密码',
    },
  ],
}

export const fieldConfirmPassword: FormComponentsProps = {
  field: 'confirmPassword',
  label: '确认密码',
  type: FORM_TYPE.password,
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

export const getFieldCaptcha = (ref) => {
  const fieldCaptcha: FormComponentsProps = {
    field: 'captcha',
    label: '验证码',
    type: FORM_TYPE.captcha,
    placeholder: '请输入验证码',
    formRef: ref,
  }
  return fieldCaptcha
}

export const fieldUsername: FormComponentsProps = {
  field: 'username',
  label: '用户名',
  type: FORM_TYPE.input,
  placeholder: '请输入用户名',
  rules: [
    {
      min: 3,
      max: 10,
      message: '用户名长度为3-10位',
    },
  ],
}

export const fieldUserSex: FormComponentsProps = {
  field: 'sex',
  label: '性别',
  type: FORM_TYPE.radioGroup,
  placeholder: '请选择性别',
  options: [
    { label: '男', value: 'man' },
    { label: '女', value: 'woman' },
  ],
}

export const fieldAvatarUpload: FormComponentsProps = {
  field: 'avatar',
  label: '头像',
  type: FORM_TYPE.avatarUpload,
  optional: true,
  className: styles['avatar-upload'],
}
