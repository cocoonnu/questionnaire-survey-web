import React, { useEffect } from 'react'
import EditTitle from './EditTitle'
import EditToolbar from './EditToolbar'
import { useKeyPress } from 'ahooks'
import { isActiveElementValid } from '../../hooks/useFunctionTools'
import { navigate } from '@/utils/tools/router_utils'
import { Button, Space, Modal } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import styles from './index.module.less'

const EditHeader = () => {
  const saveQuestionInfo = useEditQuestionStore((state) => state.saveQuestionInfo)
  const publishQuestion = useEditQuestionStore((state) => state.publishQuestion)
  const isEqualByQuestionComInfoListInit = useEditQuestionStore(
    (state) => state.isEqualByQuestionComInfoListInit,
  )

  useEffect(() => {
    const interval = setInterval(() => {
      saveQuestionInfo()
    }, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  useKeyPress(['ctrl.s', 'meta.s'], (e) => {
    e.preventDefault()
    if (isActiveElementValid()) saveQuestionInfo()
  })

  const goBack = () => {
    const isEqual = isEqualByQuestionComInfoListInit()
    if (isEqual) {
      navigate('/')
    } else {
      Modal.confirm({
        title: '确定要退出编辑吗?',
        content: '温馨提醒：请点击保存按钮后再退出',
        okText: '确定',
        cancelText: '我再想想',
        maskClosable: true,
        centered: true,
        onOk: () => navigate('/'),
      })
    }
  }

  return (
    <div className={styles['edit-header']}>
      <div className={styles['edit-header-left']}>
        <Button type="link" icon={<LeftOutlined />} onClick={goBack}>
          返回主页
        </Button>
        <EditTitle />
      </div>
      <div className={styles['edit-header-center']}>
        <EditToolbar />
      </div>
      <div className={styles['edit-header-right']}>
        <Space>
          <Button onClick={() => saveQuestionInfo()}>保存</Button>
          <Button type="primary" onClick={() => publishQuestion()}>
            发布
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default EditHeader
