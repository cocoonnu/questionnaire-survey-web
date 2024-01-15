// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
import type { ComposeOption } from 'echarts/core'

// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components'
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from 'echarts/components'

// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器
import { CanvasRenderer } from 'echarts/renderers'

import {
  BarChart, // 引入柱状图
  RadarChart, // 引入雷达图
  PieChart, // 引入饼状图
  LineChart, // 引入折线图
} from 'echarts/charts'

import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  RadarSeriesOption,
  PieSeriesOption,
  LineSeriesOption,
} from 'echarts/charts'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  BarChart,
  RadarChart,
  PieChart,
  LineChart,
])

/** echarts的options类型 */
export type ECOption = ComposeOption<
  | BarSeriesOption
  | RadarSeriesOption
  | PieSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>

export { echarts }
