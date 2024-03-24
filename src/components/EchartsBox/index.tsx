import React, { useEffect, useRef } from 'react'
import { echarts } from '@/utils/echarts'
import type { ECOption } from '@/utils/echarts'

export interface EchartsBoxProps {
  /** echarts参数 */
  option: ECOption
  /** echarts宽度 */
  width: number | string
  /** echarts高度 */
  height: number | string
  className?: string
  style?: React.CSSProperties
}

const EchartsBox = ({ option, width, height, style, className }: EchartsBoxProps) => {
  const echartsBoxRef = useRef<HTMLDivElement | null>(null)
  const echartsInstanceRef = useRef<echarts.EChartsType | null>(null)

  // 图标组件初始化
  useEffect(() => {
    if (echartsBoxRef.current) {
      const echartsInstance = echarts.init(echartsBoxRef.current, option)
      echartsInstanceRef.current = echartsInstance
      window.addEventListener('resize', resizeHandler)
    }

    return () => {
      window.removeEventListener('resize', resizeHandler)
      echartsInstanceRef.current?.dispose()
    }
  }, [])

  // 监听options变化
  useEffect(() => {
    if (echartsInstanceRef.current) {
      echartsInstanceRef.current.setOption(option)
    }
  }, [option])

  // 监听盒子宽高变化
  useEffect(() => {
    resizeHandler()
  }, [height, width])

  // 跟随页面变化更改图表大小
  const resizeHandler = () => {
    if (echartsInstanceRef.current) {
      echartsInstanceRef.current.resize()
    }
  }

  return (
    <div style={{ width, height, ...(style || {}) }}>
      <div className={className} style={{ width: '100%', height: '100%' }} ref={echartsBoxRef} />
    </div>
  )
}

export default EchartsBox
