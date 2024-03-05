import type { CSSProperties } from 'react'
import type { FormComponentsProps } from './formType'
import type { FormProps, FormInstance, ColProps } from 'antd'

/**
 * FormGenerator组件类型
 * @see https://4x-ant-design.antgroup.com/components/form-cn/#Form
 */
export interface FormGeneratorProps extends Omit<FormProps<any>, 'component'> {
  /**
   * 继承属性统计如下：
   * size?: small | middle | large 表单输入框大小
   * scrollToFirstError?: boolean 提交失败自动滚动到第一个错误字段，默认开启
   * initialValues?: object 表单默认值，只有初始化以及重置时生效
   * labelAlign?: left | right 标签文本对齐方式，默认为left
   * onFinish?: function(values) 提交表单且数据验证成功后回调事件
   * onValuesChange?: function(changedValues, allValues) 字段值更新时触发回调事件
   */

  /** 表单单项配置 */
  components: FormComponentsProps[]
  /** FormGenerator组件实例 */
  formRef?: React.RefObject<FormInstance>
  /** FormGenerator组件最外层className */
  className?: string
  /** FormGenerator组件最外层style */
  style?: CSSProperties
  /** 表单输入框布局，默认为vertical */
  layout?: 'horizontal' | 'vertical' | 'inline'
  /** 表单输入框label、wrapper布局, 默认label占80px */
  itemLayout?: {
    labelCol?: ColProps
    wrapperCol?: ColProps
  }
  /** label最大显示字数，默认为6 */
  labelMaxNumber?: number
  /** 需要展示完整label的表单项数组 */
  fullTitleItems?: string[]
  /** 表单是否禁用（表单单项全部禁用） */
  isDisabled?: boolean
  /** 表单是否为预览模式（表单单项全部为预览模式） */
  isPreviewMode?: boolean
  /** 需要单独禁用的表单单项数组 */
  disabledItems?: string[]
  /** 需要单独为预览模式的表单单项数组 */
  previewModeItems?: string[]
  /** 自定义扩展渲染item组件，优先使用扩展组件，返回null内部查找合适组件 */
  customRenderField?: (...args: any[]) => any
}
