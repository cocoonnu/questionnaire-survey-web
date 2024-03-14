import React from 'react'
import EditToolbar from './EditToolbar'
import { navigate } from '@/utils/tools/router_utils'
import { Button, Typography, Space } from 'antd'
import { LeftOutlined, EditOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const EditHeader = () => {
  return (
    <div className={styles['edit-header']}>
      <div className={styles['edit-header-left']}>
        <Space>
          <Button type="link" icon={<LeftOutlined />} onClick={() => navigate(-1)}>
            返回
          </Button>
          <Space>
            <Typography.Title className={styles.title}>前端工程师问卷调查</Typography.Title>
            <Button icon={<EditOutlined />} type="text" />
          </Space>
        </Space>
      </div>
      <div className={styles['edit-header-center']}>
        <EditToolbar />
      </div>
      <div className={styles['edit-header-right']}>
        <Space>
          <Button>保存</Button>
          <Button type="primary">发布</Button>
        </Space>
      </div>
    </div>
  )
}

export default EditHeader
