import type { ECOption } from '@/utils/echarts'
import { echarts } from '@/utils/echarts'
import React, { useEffect, useRef } from 'react'

interface EkdChartProps {
  options: ECOption
  width: number | string
  height: number | string
  style?: React.CSSProperties | undefined
  className?: string
  recordDisabeldLegend?: (keys: any[]) => void
}

export const EkdChart = ({
  options,
  width,
  height,
  style = {},
  className,
  recordDisabeldLegend,
}: EkdChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartObject = useRef<echarts.EChartsType>() // echart实例

  useEffect(() => {
    if (chartRef.current) {
      const chartObj = echarts.init(chartRef.current, 'macarons', options as any)
      chartObject.current = chartObj
      window.addEventListener('resize', resizeHandler)
      if (recordDisabeldLegend) {
        chartObject.current.on('legendselectchanged', recordSelectedLegend)
      }
    }
    return () => {
      window.removeEventListener('resize', resizeHandler)
      if (recordDisabeldLegend) {
        chartObject.current?.on('legendselectchanged', recordSelectedLegend)
      }
      chartObject.current?.dispose()
    }
  }, [])

  // 设置图标的options
  useEffect(() => {
    if (chartObject.current) {
      chartObject.current.setOption(options)
    }
  }, [options])

  useEffect(() => {
    resizeHandler()
  }, [height, width])

  const recordSelectedLegend = (params) => {
    const keys = Object.keys(params.selected)
    const selectedKeys = keys.filter((key) => !params.selected?.[key])
    recordDisabeldLegend?.(selectedKeys)
  }

  // 跟随页面变化，更改图标大小
  const resizeHandler = () => {
    chartObject.current?.resize()
  }

  return (
    <div style={{ width, height, ...(style || {}) }}>
      <div className={className} style={{ width: '100%', height: '100%' }} ref={chartRef} />
    </div>
  )
}

export default EkdChart
