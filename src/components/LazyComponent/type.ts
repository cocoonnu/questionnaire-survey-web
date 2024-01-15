import type { ComponentType, ReactNode } from 'react'

export type LazyFn = () => Promise<{ default: ComponentType<any> }>
export interface ILoadableOpts {
  fallback?: null | NonNullable<ReactNode> | undefined;
}
