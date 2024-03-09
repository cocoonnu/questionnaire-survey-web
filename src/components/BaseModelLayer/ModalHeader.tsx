import React from 'react'
import { Tooltip, Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import styles from './index.module.less'

export interface ModalHeaderProps {
  title: React.ReactNode
  extra?: React.ReactNode
  rightArea?: React.ReactNode
  headClassName?: string
  hasIcon?: boolean
  /** 是否添加回退按钮 */
  hasBack?: boolean
  /** 回退事件回调 */
  handleBack?: () => void
  /** 回退按钮tips提示内容 */
  backTips?: string
}

export const ModalHeader = ({
  hasBack = false,
  title = '系统设置',
  handleBack,
  extra,
  headClassName,
  backTips,
}: ModalHeaderProps) => {
  return (
    <div className={classNames(styles['modal-header'], headClassName)}>
      <div className="modal-header-title">
        {hasBack && (
          <Tooltip title={backTips}>
            <Button
              type="text"
              shape="round"
              style={{ marginLeft: -10 }}
              icon={<LeftOutlined style={{ fontSize: 12 }} />}
              onClick={handleBack}
            />
          </Tooltip>
        )}
        <div className={styles['modal-title-content']}>{title}</div>
        {extra}
      </div>
    </div>
  )
}

export default ModalHeader
