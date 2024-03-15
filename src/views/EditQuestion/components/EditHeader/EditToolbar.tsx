import React from 'react'
import { useKeyPress } from 'ahooks'
import { isActiveElementValid } from '../../hooks/useFunctionTools'
import { Button, Space, Tooltip, Modal } from 'antd'
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  UpOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import { useScrollToSelectedIndex } from '../../hooks/useScrollToSelected'

const EditToolbar = () => {
  const {
    selectedId,
    questionComInfoList,
    onDragEnd,
    getQuestionComInfoById,
    selectPrevQuestionCom,
    selectNextQuestionCom,
    deleteSelectedQuestionCom,
    hideSelectedQuestionCom,
    lockSelectedQuestionCom,
    copySelectedQuestionCom,
  } = useEditQuestionStore()

  const questionComInfo = getQuestionComInfoById(selectedId)
  const selectedIndex = questionComInfoList.findIndex((c) => c.id === selectedId)

  useScrollToSelectedIndex(selectedIndex, selectedId)

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

  const moveUpClick = () => {
    onDragEnd(selectedIndex, selectedIndex - 1)
  }

  const moveDownClick = () => {
    onDragEnd(selectedIndex, selectedIndex + 1)
  }

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
      <Tooltip title="上移">
        <Button
          shape="circle"
          type="default"
          disabled={selectedIndex <= 0 || !selectedId}
          icon={<UpOutlined />}
          onClick={moveUpClick}
        />
      </Tooltip>
      <Tooltip title="下移">
        <Button
          shape="circle"
          type="default"
          disabled={selectedIndex + 1 >= questionComInfoList?.length || !selectedId}
          icon={<DownOutlined />}
          onClick={moveDownClick}
        />
      </Tooltip>
    </Space>
  )
}

export default EditToolbar
