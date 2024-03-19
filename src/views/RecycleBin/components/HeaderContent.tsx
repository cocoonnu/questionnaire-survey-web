import React from 'react'
import { Space, Button, Select, message, Modal } from 'antd'
import { useRecycleBinStore } from '../store/recycleBin.store'
import styles from './index.module.less'

const HeaderContent = () => {
  const isDesc = useRecycleBinStore((state) => state.isDesc)
  const selectedRows = useRecycleBinStore((state) => state.selectedRows)
  const selectedRowIds = useRecycleBinStore((state) => state.selectedRowIds)
  const batchUpdateQuestionInfo = useRecycleBinStore((state) => state.batchUpdateQuestionInfo)
  const batchDeleteQuestionInfo = useRecycleBinStore((state) => state.batchDeleteQuestionInfo)

  const batchRecovery = () => {
    if (selectedRowIds.length === 0) {
      message.warn('当前未选中任何选项')
      return
    }
    batchUpdateQuestionInfo(selectedRows.map((item) => ({ ...item, isDeleted: 0 })))
  }

  const batchDelete = () => {
    if (selectedRowIds.length === 0) {
      message.warn('当前未选中任何选项')
      return
    }
    Modal.confirm({
      title: '确定要彻底删除吗?',
      okText: '确定',
      cancelText: '我再想想',
      maskClosable: true,
      centered: true,
      onOk: () => batchDeleteQuestionInfo(selectedRowIds as string[]),
    })
  }

  return (
    <div className={styles['header-content']}>
      <Space>
        <Button type="primary" onClick={batchRecovery}>
          恢复
        </Button>
        <Button type="primary" danger onClick={batchDelete}>
          彻底删除
        </Button>
      </Space>
      <Select
        value={isDesc}
        options={[
          { label: '按创建时间降序', value: true },
          { label: '按创建时间升序', value: false },
        ]}
        onChange={(value) => useRecycleBinStore.setState({ isDesc: value })}
      />
    </div>
  )
}

export default HeaderContent
