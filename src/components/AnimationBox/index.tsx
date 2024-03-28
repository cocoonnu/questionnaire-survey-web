import React from 'react'
import styles from './index.module.less'

export interface AnimationBoxProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const AnimationBox = ({ children, style }: AnimationBoxProps) => {
  return (
    <div className={styles['animation-box']} style={style}>
      {children}
    </div>
  )
}

export default AnimationBox
