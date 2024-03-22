import React from 'react'
import classNames from 'classnames'
import { Tooltip } from 'antd'
import styles from './index.module.less'
import type { TooltipPropsWithTitle } from 'antd/es/tooltip'

export interface TooltipParcelProps extends TooltipPropsWithTitle {
  /** 显示内容 */
  title: string
  /** 是否开启省略号模式 */
  isEllipsis?: boolean
  /**
   * 开启省略号的最大宽度
   * 默认为100%即父盒子宽度并且父盒子需要开启overflow:hidden
   */
  maxWidth?: number
  /** 显示内容的外层盒子样式 */
  titleClassName?: string
  /** 是否展示tooltip */
  isShowTooltip?: boolean
}

/** 单行显示省略号加tooltip组件 */
const TooltipParcel = ({
  title,
  children,
  isEllipsis = true,
  maxWidth,
  titleClassName,
  isShowTooltip = true,
  ...tooltipProps
}: TooltipParcelProps) => {
  const renderTitle = () => {
    if (isEllipsis) {
      return (
        <div
          className={classNames(styles.ellipsis, titleClassName)}
          style={{ maxWidth: maxWidth || '100%' }}
        >
          {title}
        </div>
      )
    }
    return <div className={classNames(titleClassName)}>{title}</div>
  }

  if (!isShowTooltip) return renderTitle()

  return (
    <Tooltip {...tooltipProps} title={title}>
      {renderTitle()}
    </Tooltip>
  )
}

export default TooltipParcel
