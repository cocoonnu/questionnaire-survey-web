import React from 'react'
import classNames from 'classnames'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import styles from './index.module.less'
import type { ModalHeaderProps } from './ModalHeader'
import type { ModalFooterProps } from './ModalFooter'

export interface BaseModelLayerProps extends ModalFooterProps, ModalHeaderProps {
  className?: string
  children?: React.ReactNode
}

const BaseModelLayer = ({
  actions,
  className,
  children,
  footClassName,
  ...headProps
}: BaseModelLayerProps) => {
  return (
    <div className={classNames(styles['base-modal-layer'], className)}>
      <ModalHeader {...headProps} />
      {children}
      <ModalFooter actions={actions} footClassName={footClassName} />
    </div>
  )
}

export default BaseModelLayer
