import React from 'react'
import { Vertify } from '@alex_xu/react-slider-vertify'
import styles from './index.module.less'
import type { ILayerProps } from '@ekd/enhance-layer-manager'

export type SlideToUnlockProps = ILayerProps

const SlideToUnlock = React.forwardRef(({ layer }: SlideToUnlockProps) => {
  return (
    <div className={styles['layer-wrapper']}>
      <Vertify width={320} height={160} visible={true} onSuccess={() => layer.emitOk(true)} />
    </div>
  )
})

export default SlideToUnlock
