import type { FCPMetric } from 'web-vitals'
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals'

export type OnPerfEntry = (metric: FCPMetric) => void

const reportCallback = (onPerfEntry?) => {
  return (metric: FCPMetric) => {
    const ratingMap: Record<typeof metric.rating, string> = {
      good: '非常好',
      'needs-improvement': '常规',
      poor: '非常差',
    }
    const data = {
      delta: `${metric.delta}ms`,
      rating: metric.rating,
      指标: ratingMap[metric.rating],
      entries: metric.entries,
      name: metric.name,
    }
    onPerfEntry?.(data)
    return data
  }
}

export const reportWebVitals = (onPerfEntry?) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // onCLS(reportCallback(onPerfEntry))
    // onFID(reportCallback(onPerfEntry))
    onFCP(reportCallback(onPerfEntry))
    // onLCP(reportCallback(onPerfEntry))
    // onTTFB(reportCallback(onPerfEntry))
  }
}
