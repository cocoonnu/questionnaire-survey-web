import type { ILayerProps } from '@ekd/enhance-layer-manager'
import React, { useState, useEffect } from 'react'
// import styles from './index.module.less';

const DemoLayer = (props: ILayerProps) => {
  return (
    <div
      onClick={() => {
        props.layer.emitOk({ hhh: 'nihao' })
      }}
    >
      test
    </div>
  )
}
export default DemoLayer
