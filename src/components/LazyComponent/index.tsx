import React, { lazy, Suspense } from 'react'
import { isDevEnv } from '@/consts/env'
import type { LazyFn, ILoadableOpts } from './type'

const Loading = (props: { error?: any }) => {
  const { error } = props
  const isDev = isDevEnv
  if (error && isDev) {
    return (
      <div>
        <p>{error.stack ? error.stack : ''}</p>
      </div>
    )
  }
  return <div />
}

const LazyComponent = (importFunc?: LazyFn, opts?: ILoadableOpts) => {
  if (!importFunc) return null
  const Com = lazy(importFunc)
  return (props: any) => (
    <Suspense fallback={opts?.fallback || <Loading />}>
      <Com {...props} />
    </Suspense>
  )
}

export default LazyComponent
