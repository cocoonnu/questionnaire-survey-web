import React from 'react'
import type { TooltipProps } from '@hose/eui'
import { Button, Tooltip, Modal } from '@hose/eui'
import type { ButtonProps } from '@hose/eui/es/components/button'
import ButtonIconText from './ButtonIconText'
import { throttle, debounce } from 'lodash'
import type { ModalFuncProps } from 'antd'
import { Popconfirm } from 'antd'
import { OutlinedTipsInfo } from '@hose/eui-icons'

export interface EkdButtonProps extends ButtonProps {
  children?: any
  /** 按钮类型, 兼容antd属性 */
  type?: ButtonProps['category'] | 'link' | 'default'
  /** 是否危险按钮, 兼容antd属性 */
  danger?: boolean
  /** 提示文字 */
  tipsTitle?: TooltipProps['title']
  /** 提示方向 */
  tipsPlacement?: TooltipProps['placement']
  /** 按钮点击模式，confirm二次确认弹窗模式，popconfirm二次确认模式（绑定元素位置） */
  clickModel?: 'throttle' | 'debounce' | 'confirm' | 'popconfirm'
  /** 点击间隔时间，clickModel只有在'throttle' | 'debounce'模式下生效 */
  interval?: number
  /** Modal.confirm的所有props参数，用于自定义场景 */
  confirmProps?: ModalFuncProps
  /** 二次交互，取消按钮文案 */
  confirmCancelText?: string
  /** 二次交互，确认按钮文案 */
  confirmOkText?: string
  /** 二次交互弹层标题 */
  confirmTitle?: React.ReactNode
  /** 二次交互弹层内容 */
  confirmContent?: React.ReactNode
  /** 二次交互弹层Icon */
  confirmIcon?: React.ReactNode
}

/** 通用按钮组件 */
const EkdButton = ({
  children,
  type = 'secondary',
  theme,
  size,
  danger,
  shape,
  tipsPlacement,
  tipsTitle,
  onClick,
  clickModel = 'debounce',
  interval = 320,
  confirmProps,
  confirmCancelText,
  confirmOkText,
  confirmTitle,
  confirmContent,
  confirmIcon = <OutlinedTipsInfo style={{ fontSize: 26 }} />,
  ...opts
}: EkdButtonProps) => {
  // 兼容处理category属性
  const handelCategory = () => {
    // type类型映射 dashed
    const typeMap = {
      primary: 'primary',
      secondary: 'secondary',
      ghost: 'ghost',
      dashed: 'dashed',
      text: 'text',
      // antd属性处理
      link: 'text', // 兼容老代码link类型
      default: 'secondary',
    }
    return typeMap[type] || typeMap.primary
  }

  // 兼容处理theme属性
  const handleTheme = (): ButtonProps['theme'] => {
    if (danger) return 'danger' // 危险按钮主题调整
    // type link类型，设置默认蓝字
    if (type === 'link') {
      return 'highlight'
    }
    return theme
  }

  // 兼容处理shape属性
  const handleShape = (): ButtonProps['shape'] => {
    const shapeMap = {
      default: 'default',
      rounded: 'rounded',
      rectangular: 'rectangular',
      // antd属性处理
      round: 'rounded',
      circle: 'rounded',
    }
    return shapeMap[shape as any] as ButtonProps['shape']
  }

  const handelBtnClick = () => {
    if (clickModel === 'popconfirm') return undefined
    let newFun = (event) => {
      // 二次确认交互
      if (clickModel === 'confirm') {
        Modal.confirm({
          centered: true,
          cancelText: confirmCancelText,
          okText: confirmOkText,
          title: confirmTitle,
          content: confirmContent,
          icon: confirmIcon,
          ...confirmProps,
          onOk: async () => {
            onClick?.(event)
          },
        })
        return
      }
      onClick?.(event)
    }
    if (clickModel === 'debounce') {
      newFun = debounce(newFun, interval)
    } else if (clickModel === 'throttle') {
      newFun = throttle(newFun, interval)
    }
    return newFun
  }

  const getBtnCom = () => {
    let btnCom = (
      <Button
        category={handelCategory()}
        theme={handleTheme()}
        shape={handleShape()}
        size={size}
        {...opts}
        onClick={handelBtnClick()}
      >
        {children}
      </Button>
    )
    if (clickModel === 'popconfirm') {
      btnCom = (
        <Popconfirm
          title={confirmTitle || confirmContent}
          onConfirm={onClick && (debounce(onClick, interval) as any)}
          placement={tipsPlacement}
        >
          {btnCom}
        </Popconfirm>
      )
    }
    if (tipsTitle) {
      return (
        <Tooltip placement={tipsPlacement} title={tipsTitle || ''}>
          {btnCom}
        </Tooltip>
      )
    }
    return btnCom
  }

  return getBtnCom()
}

EkdButton.IconText = ButtonIconText

export default EkdButton
