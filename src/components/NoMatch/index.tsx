import React from 'react'
import Exception from '@/components/Exception'

// 404页面
function NoMatch() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle',
      }}
    >
      <Exception type="404" />
    </div>
  )
}

export default NoMatch
