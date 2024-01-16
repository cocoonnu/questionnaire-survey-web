import classNames from 'classnames'
import type { ModalProps } from '@hose/eui'

export interface ModelOptions<T = ModalProps> extends ModalProps {
  /** 弹窗模式 */
  enhancer?: 'modal' | 'drawer'
  /** 弹窗参数，同antd的ModalProps */
  enhancerOptions?: T
}

interface GetModelDefaultOptionsData {
  /** 弹窗类型 */
  enhancer?: 'modal' | 'drawer'
  /** 是否隐藏弹层内置的头部、底部 */
  hiddenHeaderAndFooter?: boolean
  /** 弹层外层样式 */
  className?: string
}

/** 获取弹层默认参数，默认模式为modal，显示头部、底部，点击外部可关闭 */
export const getModelDefaultOptions = <T = ModalProps>(
  data?: GetModelDefaultOptionsData,
): ModelOptions<T> => {
  const { className, enhancer = 'modal' } = data || {}
  let modelOpts: any = {
    enhancer: enhancer || 'modal',
    maskClosable: true,
    centered: true, // 居中
  }
  if (data?.hiddenHeaderAndFooter) {
    modelOpts = {
      ...modelOpts,
      enhancerOptions: {
        title: null,
        footer: null,
        bodyStyle: { padding: 0, display: 'flex', flexDirection: 'column' },
        className:
          enhancer === 'modal'
            ? classNames('custom-modal-layer', className)
            : classNames('custom-drawer-layer', className),
      },
      closable: false,
    }
  }
  return modelOpts as ModelOptions<T>
}
