import React, { useEffect } from 'react'
import EditTitle from './EditTitle'
import EditToolbar from './EditToolbar'
import { useKeyPress } from 'ahooks'
import { isActiveElementValid } from '@/utils/tools/dom_utils'
import { navigate } from '@/utils/tools/router_utils'
import { Button, Space } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import styles from './index.module.less'

const EditHeader = () => {
  const saveQuestion = useEditQuestionStore((state) => state.saveQuestion)

  useEffect(() => {
    const interval = setInterval(() => {
      saveQuestion()
    }, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  useKeyPress(['ctrl.s', 'meta.s'], (e) => {
    e.preventDefault()
    if (isActiveElementValid()) saveQuestion()
  })

  return (
    <div className={styles['edit-header']}>
      <div className={styles['edit-header-left']}>
        <Space>
          <Button type="link" icon={<LeftOutlined />} onClick={() => navigate(-1)}>
            返回
          </Button>
          <EditTitle />
        </Space>
      </div>
      <div className={styles['edit-header-center']}>
        <EditToolbar />
      </div>
      <div className={styles['edit-header-right']}>
        <Space>
          <Button onClick={() => saveQuestion()}>保存</Button>
          <Button type="primary">发布</Button>
        </Space>
      </div>
    </div>
  )
}

export default EditHeader
