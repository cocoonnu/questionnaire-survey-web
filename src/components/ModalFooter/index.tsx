import React from 'react'
import { Space, Button } from 'antd'
import classNames from 'classnames'
import type { ButtonProps } from 'antd/lib/button/button'
import styles from './index.module.less'

interface ModalFooterProps {
  /** 按钮配置 */
  actions: ButtonProps[]
  /** 自定义类名 */
  className?: string
}

export const ModalFooter = ({ actions, className }: ModalFooterProps) => {
  if (actions?.length === 0) return null
  return (
    <div className={classNames(styles['modal-footer'], className)}>
      <Space>
        {actions?.map((item, index) => {
          const { name, ...others } = item
          return (
            <Button key={index} {...others}>
              {name}
            </Button>
          )
        })}
      </Space>
    </div>
  )
}

export default ModalFooter
