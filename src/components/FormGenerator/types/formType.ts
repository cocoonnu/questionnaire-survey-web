import type { FormItemProps } from 'antd'

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
  /** Field组件其他属性 */
  [key: string]: any
}

export enum FORM_TYPE {
  /** 常规输入框 */
  input = 'input',
  /** 常规下拉框 */
  select = 'select',
}
