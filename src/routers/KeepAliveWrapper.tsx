import React from 'react'
import { KeepAlive } from 'react-activation'
import { useLocation } from 'react-router-dom'
import type { KeepAliveProps } from 'react-activation'

const KeepAliveWrapper = ({ children, ...keepAliveProps }: KeepAliveProps) => {
  const location = useLocation()
  return (
    <KeepAlive
      key={location.key}
      name={location.pathname}
      id={location.pathname}
      cacheKey={location.pathname}
      {...keepAliveProps}
    >
      {children}
    </KeepAlive>
  )
}

export default KeepAliveWrapper
