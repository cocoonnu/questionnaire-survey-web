import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeaderContent from './components/HeaderContent'
import TableContent from './components/TableContent'
import { useRecycleBinStore } from './store/recycleBin.store'
import styles from './index.module.less'

const RecycleBin = () => {
  const location = useLocation()
  const isDesc = useRecycleBinStore((state) => state.isDesc)
  const page = useRecycleBinStore((state) => state.page)
  const pageSize = useRecycleBinStore((state) => state.pageSize)
  const getRecycleBinList = useRecycleBinStore((state) => state.getRecycleBinList)

  useEffect(() => {
    getRecycleBinList()
  }, [isDesc, page, pageSize, location])

  return (
    <div className={styles['recycle-bin']}>
      <HeaderContent />
      <TableContent />
    </div>
  )
}

export default RecycleBin
