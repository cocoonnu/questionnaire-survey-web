import React from 'react'
import { Form } from 'antd'
import classNames from 'classnames'
import RenderField from './RenderField'
import { renderTooltip } from '@/utils/render'
import { placeholderBuilder } from './utils'
import styles from './index.module.less'
import type { FormGeneratorProps } from './types'
import type { FormComponentItem } from './types/formType'

const FormGenerator = ({
  className,
  formRef,
  size,
  itemLayout,
  layout = 'vertical',
  labelAlign = 'left',
  scrollToFirstError = true,
  initialValues,
  components,
  labelMaxNumber = 6,
  fullTitleItems = [],
  isDisabled,
  isPreviewMode,
  disabledItems = [],
  previewModeItems = [],
  customRenderField,
  onFinish,
  onValuesChange,
}: FormGeneratorProps) => {
  /** 获取表单输入框label、wrapper默认布局 */
  const getFormItemLayout = () => {
    if (itemLayout || layout !== 'horizontal') return itemLayout
    return { labelCol: { flex: '80px' } }
  }

  /** 渲染表单单项标题 */
  const renderLabel = ({ label, field, labelTooltip, hiddenLabel }: FormComponentItem) => {
    if (hiddenLabel) return null
    let res = label
    const maxLength = labelMaxNumber
    if (
      label.length > labelMaxNumber &&
      layout !== 'vertical' &&
      !fullTitleItems?.includes(field)
    ) {
      res = `${label.slice(0, maxLength - 1)}...`
    }

    return renderTooltip(res, labelTooltip || label)
  }

  /** 生成表单单项 */
  const renderFromItem = () => {
    return components?.map((item) => {
      // 通过是否为必填项配置一套默认规则
      const rules: any[] = [{ required: !item.optional, message: placeholderBuilder(item) }]
      if (item.rules) rules.push(...item.rules)

      return (
        <Form.Item
          {...item}
          name={item.field}
          key={item.field}
          tooltip={item.tooltip}
          rules={rules}
          label={renderLabel(item)}
        >
          <RenderField
            formItem={item}
            isDisabled={isDisabled}
            isPreviewMode={isPreviewMode}
            previewModeItems={previewModeItems}
            disabledItems={disabledItems}
            customRenderField={customRenderField}
          />
        </Form.Item>
      )
    })
  }

  return (
    <Form
      size={size}
      ref={formRef}
      layout={layout}
      labelAlign={labelAlign}
      {...getFormItemLayout()}
      initialValues={initialValues}
      scrollToFirstError={scrollToFirstError}
      className={classNames(styles['form-generator'], className)}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
    >
      {renderFromItem()}
    </Form>
  )
}

export default FormGenerator
