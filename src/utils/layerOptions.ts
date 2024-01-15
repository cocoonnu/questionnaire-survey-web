import type { ModalProps } from '@hose/eui'
import classNames from 'classnames'

export interface ModelOptions<T = ModalProps> extends ModalProps {
  /** 弹窗模式 */
  enhancer?: 'modal' | 'drawer'
  enhancerOptions?: T
}

interface GetModelDefaultOptionsData {
  /** 弹窗类型 */
  enhancer?: 'modal' | 'drawer'
  /** 是否隐藏弹层内置的头部/底部 */
  hiddleHeader?: boolean
  /** 弹层外层样式 */
  className?: string
}

/**
 * 获取弹层默认参数，所有参数同antd modal
 */
export const getModelDefaultOptions = <T = ModalProps>(
  data?: GetModelDefaultOptionsData,
): ModelOptions<T> => {
  const { className, enhancer = 'modal' } = data || {}
  let modelOpts: any = {
    enhancer: enhancer || 'modal',
    maskClosable: true,
    centered: true, // 居中
  }
  if (data?.hiddleHeader) {
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
