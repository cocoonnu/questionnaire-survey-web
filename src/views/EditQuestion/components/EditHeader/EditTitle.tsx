import React, { useState, useRef, useEffect } from 'react'
import { Input, Button, Typography, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import styles from './index.module.less'
import type { ChangeEvent } from 'react'
import type { InputRef } from 'antd'

const EditTitle = () => {
  const inputRef = useRef<InputRef>(null)
  const questionName = useEditQuestionStore((state) => state.questionName)
  const [editState, setEditState] = useState(false)
  const [nameHistory, setNameHistory] = useState(questionName)

  useEffect(() => {
    if (editState) {
      setNameHistory(questionName)
      inputRef.current?.focus({ cursor: 'end' })
    }
  }, [editState])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    useEditQuestionStore.setState({ questionName: e.target.value.trim() })
  }

  const editExit = () => {
    setEditState(false)
    if (questionName === '') {
      useEditQuestionStore.setState({ questionName: nameHistory })
    }
  }

  if (editState) {
    return (
      <Input
        ref={inputRef}
        value={questionName}
        onChange={onChange}
        onPressEnter={editExit}
        onBlur={editExit}
      />
    )
  }

  return (
    <Space>
      <Typography.Title className={styles.title}>{questionName}</Typography.Title>
      <Button icon={<EditOutlined />} type="text" onClick={() => setEditState(true)} />
    </Space>
  )
}

export default EditTitle
