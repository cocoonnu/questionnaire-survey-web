import type { ComponentType, ReactNode } from 'react'

export type LazyFn = () => Promise<{ default: ComponentType<any> }>
export interface ILoadableOpts {
  /** Suspense.fallback loading组件 */
  fallback?: null | NonNullable<ReactNode> | undefined
}
