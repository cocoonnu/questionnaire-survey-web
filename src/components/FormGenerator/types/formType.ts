import type { FormItemProps } from 'antd'
import type { SizeType } from 'antd/lib/config-provider/SizeContext'
import type { FieldPhoneProps } from '../Fields/FieldPhone'
import type { FieldCaptchaProps } from '../Fields/FieldCaptcha'
import type { FieldInputProps } from '../Fields/FieldInput'
import type { FieldPasswordProps } from '../Fields/FieldPassword'
import type { FieldRadioGroupProps } from '../Fields/FieldRadioGroup'
import type { FieldSelectProps } from '../Fields/FieldSelect'
import type { FieldDateProps } from '../Fields/FieldDate'
import type { FieldDateRangeProps } from '../Fields/FieldDateRange'
import type { FiledTypographyProps } from '../Fields/FiledTypography'
import type { FieldCheckboxProps } from '../Fields/FiledCheckbox'

/**
 * 表单单项类型
 * @see https://4x-ant-design.antgroup.com/components/form-cn/#Form.Item
 */
export interface FormComponentItem extends FormItemProps {
  /**
   * 继承属性统计如下：
   * tooltip?: React.ReactNode 输入框提示信息
   * rules?: Rule[] 校验规则，设置字段的校验逻辑
   * validateStatus?: 'success' 'warning' 'error' 'validating' 自定义输入框当前状态，默认是success
   * help?: string 自定义当前输入框提示信息，自动适配validateStatus
   * hasFeedback?: boolean 输入框是否添加反馈图标，自动适配validateStatus
   */

  /** 字段 */
  field: string
  /** 标题 */
  label: string
  /** 标题指定提示内容 */
  labelTooltip?: string
  /** formItem类型 */
  type: FORM_TYPE
  /** 是否可编辑 */
  editable?: boolean
  /** 是否隐藏标题 */
  hiddenLabel?: boolean
  /** 表单单项内置样式 */
  style?: React.CSSProperties
  /** 是否非必填 */
  optional?: boolean
  /** 自定义placeholder，默认会根据label、type生成 */
  placeholder?: string
  /** 是否可一键清除 */
  allowClear?: boolean
  /** 控件大小 */
  size?: SizeType
  /** 默认值 */
  defaultValue?: any

  /** Field组件公共类型，由RenderField统一封装 */
  value?: any
  onChange?: (...arg: any[]) => any
  disabled?: boolean
  previewMode?: boolean
}

export type FormComponentsProps = FormComponentItem &
  (
    | FieldCaptchaProps
    | FieldInputProps
    | FieldPasswordProps
    | FieldPhoneProps
    | FieldRadioGroupProps
    | FieldSelectProps
    | FieldDateRangeProps
    | FieldDateProps
    | FiledTypographyProps
    | FieldCheckboxProps
  )

export enum FORM_TYPE {
  /** 常规输入框 */
  input = 'input',
  /** 密码输入框 */
  password = 'password',
  /** 验证码输入框 */
  captcha = 'captcha',
  /** 手机号输入框 */
  phone = 'phone',
  /** 单选框 */
  radioGroup = 'radioGroup',
  /** 多选框 */
  checkbox = 'checkbox',
  /** 下拉选择框 */
  select = 'select',
  /** 日期选择框 */
  date = 'date',
  /** 日期范围选择框 */
  dateRange = 'dateRange',
  /** 头像上传 */
  avatarUpload = 'avatarUpload',
  /** 标题与描述 */
  typography = 'typography',
}
