import React from 'react'
import { useKeyPress } from 'ahooks'
import { isActiveElementValid } from '@/utils/tools/dom_utils'
import { Button, Space, Tooltip, Modal } from 'antd'
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined, CopyOutlined } from '@ant-design/icons'
import { useEditQuestionStore } from '../../store/editQuestion.store'

const EditToolbar = () => {
  const {
    selectedId,
    getQuestionComInfoById,
    selectPrevQuestionCom,
    selectNextQuestionCom,
    deleteSelectedQuestionCom,
    hideSelectedQuestionCom,
    lockSelectedQuestionCom,
    copySelectedQuestionCom,
  } = useEditQuestionStore()

  // 获取当前选中的问卷组件信息和配置
  const questionComInfo = getQuestionComInfoById(selectedId)

  const deleteClick = () => {
    Modal.confirm({
      title: '确定删除吗?',
      okText: '确定',
      cancelText: '我再想想',
      maskClosable: true,
      centered: true,
      onOk: () => deleteSelectedQuestionCom(),
    })
  }

  const hideClick = () => {
    Modal.confirm({
      title: '确定隐藏吗?',
      okText: '确定',
      cancelText: '我再想想',
      maskClosable: true,
      centered: true,
      onOk: () => hideSelectedQuestionCom(true),
    })
  }

  // 键盘快捷键监听
  useKeyPress(['delete', 'backspace'], () => {
    if (selectedId && isActiveElementValid()) deleteClick()
  })

  useKeyPress(['ctrl.c', 'meta.c'], () => {
    if (selectedId && isActiveElementValid()) copySelectedQuestionCom()
  })

  useKeyPress('uparrow', () => {
    if (selectedId && isActiveElementValid()) selectPrevQuestionCom()
  })

  useKeyPress('downarrow', () => {
    if (selectedId && isActiveElementValid()) selectNextQuestionCom()
  })

  return (
    <Space>
      <Tooltip title="删除">
        <Button
          shape="circle"
          disabled={!selectedId}
          icon={<DeleteOutlined />}
          onClick={deleteClick}
        />
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          shape="circle"
          disabled={!selectedId}
          type={questionComInfo?.isHidden ? 'primary' : 'default'}
          icon={<EyeInvisibleOutlined />}
          onClick={hideClick}
        />
      </Tooltip>
      <Tooltip title="锁定">
        <Button
          shape="circle"
          disabled={!selectedId}
          type={questionComInfo?.isLocked ? 'primary' : 'default'}
          icon={<LockOutlined />}
          onClick={lockSelectedQuestionCom}
        />
      </Tooltip>
      <Tooltip title="复制">
        <Button
          shape="circle"
          type="default"
          disabled={!selectedId}
          icon={<CopyOutlined />}
          onClick={copySelectedQuestionCom}
        />
      </Tooltip>
    </Space>
  )
}

export default EditToolbar
