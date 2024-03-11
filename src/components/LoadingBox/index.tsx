import React from 'react'
import { Spin } from 'antd'
import classnames from 'classnames'
import styles from './index.module.less'

interface LoadingBoxProps {
  zIndex?: number
  className?: string
  style?: React.CSSProperties
  /** loading状态 */
  loading?: boolean
  /** 自定义遮罩层背景色 */
  backgroundColor?: React.CSSProperties['backgroundColor']
  /** 自定义遮罩色透明度 */
  opacity?: number
  /** loading图标底部文字提示 */
  tips?: string | React.ReactNode
  /** loading图标类型 */
  loadingIcon?: 'spin' | 'ekbLoading'
  iconSize?: 'large' | 'default' | 'small'
  children?: React.ReactNode
}

const LoadingBox = ({
  zIndex = 199,
  loading,
  opacity,
  backgroundColor,
  tips,
  loadingIcon = 'spin',
  iconSize = 'default',
  className,
  style,
  children,
}: LoadingBoxProps) => {
  const css: React.CSSProperties = {
    zIndex,
    opacity,
    backgroundColor,
  }
  const loadingCom = () => {
    if (!loading) return null
    const coms: any = []
    // 内置loading icon
    if (loadingIcon === 'ekbLoading') {
      coms.push(<div className={styles.lmask} style={css} key="ekbLoading" />)
    }
    // antd loading icon
    if (loadingIcon === 'spin') {
      coms.push(
        <div key={'spin'}>
          <div className={styles['antd-lmask']} style={css} />
          <div className={styles['antd-loading-icon']} style={{ zIndex: zIndex + 1 }}>
            <Spin spinning={true} size={iconSize} />
          </div>
        </div>,
      )
    }
    if (tips) {
      coms.push(
        <div
          className={styles.tips}
          style={{
            zIndex: zIndex + 1,
          }}
          key="tips"
        >
          {tips}
        </div>,
      )
    }
    return coms
  }
  return (
    <div className={classnames(styles['loading-box-wrap'], className)} style={style}>
      {loadingCom()}
      {children}
    </div>
  )
}
export default LoadingBox
