import React from 'react'
import { Tooltip } from 'antd'
import type { ReactNode } from 'react'

/**
 * 组件附加tip功能，展示完整内容
 * @value 显示的文本
 * @tooltipValue 指定提示内容
 */
export const renderTooltip = (value: string, tooltipValue: ReactNode = null) => {
  return (
    <Tooltip placement="top" title={tooltipValue || value}>
      {value}
    </Tooltip>
  )
}
