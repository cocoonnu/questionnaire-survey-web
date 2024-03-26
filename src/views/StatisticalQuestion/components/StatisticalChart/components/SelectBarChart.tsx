import React from 'react'
import { Empty } from 'antd'
import EchartsBox from '@/components/EchartsBox'
import {
  getStringCountMap,
  mergeStringCountMaps,
} from '@/views/StatisticalQuestion/hooks/useFunctionTools'
import styles from '../index.module.less'
import type { ECOption } from '@/utils/echarts'

export interface SelectBarChartProps {
  answerTextList: string[]
}

const SelectBarChart = ({ answerTextList }: SelectBarChartProps) => {
  if (answerTextList.length === 0) {
    return <Empty description="暂无数据" style={{ marginTop: '20%' }} />
  }

  const getOptionData = () => {
    const stringCountMaps = answerTextList.map((item) => getStringCountMap(item))
    const mergedMap = mergeStringCountMaps(stringCountMaps)
    const xAxisData = Object.keys(mergedMap)
    const seriesData = Object.values(mergedMap) as any[]
    return { xAxisData, seriesData }
  }

  const optionData = getOptionData()

  const option: ECOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: {
      type: 'category',
      data: optionData.xAxisData,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        interval: 0,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: optionData.seriesData,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  }

  return (
    <div className={styles['chart-wrapper']}>
      <EchartsBox width="100%" height="100%" option={option} />
    </div>
  )
}

export default SelectBarChart
