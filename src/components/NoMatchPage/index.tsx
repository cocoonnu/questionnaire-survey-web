import React from 'react'
import Exception from '@/components/Exception'
import styles from './index.module.less'

const NoMatchPage = () => {
  return (
    <div className={styles['no-match-page']}>
      <Exception type="404" />
    </div>
  )
}

export default NoMatchPage
