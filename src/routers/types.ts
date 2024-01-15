import type { LazyFn } from '@/components/LazyComponent/type'

export interface RouterItem {
  /** 路由定义，可通过*去匹配多路径页面 */
  path: string
  /** 网页标题 */
  title?: string
  parentPath?: string
  /** 重置跳转指定路由 */
  redirect?: string
  exact?: boolean
  meta?: {
    /** 是否验证权限 */
    needLogin?: boolean
  }
  /** 默认展示组件，当指定了componentPc、componentH5，为动态判断组件展示 */
  component?: LazyFn
  /** pc组件 */
  componentPc?: LazyFn
  /** h5组件 */
  componentH5?: LazyFn
}

export type IRoutersData = RouterItem[]

export interface RoutersState {
  routers?: IRoutersData
}
