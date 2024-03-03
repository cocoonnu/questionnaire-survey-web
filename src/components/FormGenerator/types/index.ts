import type { FormProps } from 'antd'

export interface FormGeneratorProps extends Omit<FormProps<any>, 'component'> {
  /** FormGenerator组件最外层className */
  className?: string
}
