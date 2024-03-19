import React from 'react'
import { Space, Button, Select } from 'antd'
import { useRecycleBinStore } from '../store/recycleBin.store'
import styles from './index.module.less'

const HeaderContent = () => {
  const isDesc = useRecycleBinStore((state) => state.isDesc)

  return (
    <div className={styles['header-content']}>
      <Space>
        <Button type="primary">恢复</Button>
        <Button type="primary" danger>
          彻底删除
        </Button>
      </Space>
      <Select
        value={isDesc}
        options={[
          { label: '按创建时间升序', value: false },
          { label: '按创建时间降序', value: true },
        ]}
        onChange={(value) => useRecycleBinStore.setState({ isDesc: value })}
      />
    </div>
  )
}

export default HeaderContent
