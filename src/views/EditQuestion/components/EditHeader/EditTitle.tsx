import React, { useState, useRef, useEffect } from 'react'
import { Input, Button, Typography, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import styles from './index.module.less'
import type { ChangeEvent } from 'react'
import type { InputRef } from 'antd'

const EditTitle = () => {
  const inputRef = useRef<InputRef>(null)
  const [editState, setEditState] = useState(false)
  const questionInfo = useEditQuestionStore((state) => state.questionInfo)

  useEffect(() => {
    if (editState) {
      inputRef.current?.focus({ cursor: 'end' })
    }
  }, [editState])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    useEditQuestionStore.setState({
      questionInfo: { ...questionInfo, name: e.target.value.trim() },
    })
  }

  const editExit = () => {
    setEditState(false)
    if (questionInfo.name === '') {
      useEditQuestionStore.setState({
        questionInfo: { ...questionInfo, name: '请填写问卷名' },
      })
    }
  }

  if (editState) {
    return (
      <Input
        ref={inputRef}
        value={questionInfo.name}
        onChange={onChange}
        onPressEnter={editExit}
        onBlur={editExit}
      />
    )
  }

  return (
    <Space>
      <Typography.Title className={styles.title}>{questionInfo.name}</Typography.Title>
      <Button icon={<EditOutlined />} type="text" onClick={() => setEditState(true)} />
    </Space>
  )
}

export default EditTitle
