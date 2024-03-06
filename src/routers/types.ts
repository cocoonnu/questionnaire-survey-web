import type { LazyFn } from '@/components/LazyComponent/type'

export interface RouterItem {
  /** 路由地址 */
  path: string
  /** 网页标题 */
  title?: string
  /** 重置跳转指定路由 */
  redirect?: string
  /** 默认pc页面 */
  component?: LazyFn
  /** pc页面，双端展示时使用 */
  componentPc?: LazyFn
  /** h5页面，双端展示时使用 */
  componentH5?: LazyFn
}

export type IRoutersData = RouterItem[]

export interface RoutersState {
  routers?: IRoutersData
}
