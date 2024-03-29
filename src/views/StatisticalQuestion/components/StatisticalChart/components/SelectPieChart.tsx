import React from 'react'
import { Empty } from 'antd'
import EchartsBox from '@/components/EchartsBox'
import {
  getStringCountMap,
  mergeStringCountMaps,
} from '@/views/StatisticalQuestion/hooks/useFunctionTools'
import styles from '../index.module.less'
import type { ECOption } from '@/utils/echarts'

export interface SelectPieChartProps {
  answerTextList: string[]
}

const SelectPieChart = ({ answerTextList }: SelectPieChartProps) => {
  if (answerTextList.length === 0) {
    return <Empty description="暂无数据" style={{ marginTop: '20%' }} />
  }

  const getOptionData = () => {
    const stringCountMaps = answerTextList.map((item) => getStringCountMap(item))
    const mergedMap = mergeStringCountMaps(stringCountMaps)
    const optionData = Object.entries(mergedMap).map(([key, value]) => {
      return { name: key, value }
    }) as any[]
    return optionData
  }

  const optionData = getOptionData()

  const option: ECOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
    },
    series: [
      {
        name: 'LeftChart',
        type: 'pie',
        radius: ['30%', '60%'],
        data: optionData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
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

export default SelectPieChart
