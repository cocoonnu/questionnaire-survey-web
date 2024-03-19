import React from 'react'
import { Space, Table, Tag, Button, Modal } from 'antd'
import { useRecycleBinStore } from '../store/recycleBin.store'
import styles from './index.module.less'
import type { ColumnsType } from 'antd/es/table'
import type { QuestionInfo } from '@/services/questionInfo.services'

const TableContent = () => {
  const total = useRecycleBinStore((state) => state.total)
  const page = useRecycleBinStore((state) => state.page)
  const pageSize = useRecycleBinStore((state) => state.pageSize)
  const recycleBinList = useRecycleBinStore((state) => state.recycleBinList)
  const batchUpdateQuestionInfo = useRecycleBinStore((state) => state.batchUpdateQuestionInfo)
  const batchDeleteQuestionInfo = useRecycleBinStore((state) => state.batchDeleteQuestionInfo)

  const columns: ColumnsType<QuestionInfo> = [
    {
      title: '问卷名',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <div className={styles['text-ellipsis']}>{name}</div>,
    },
    {
      title: '创建人',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
    },
    {
      title: '问卷ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '统计回收',
      dataIndex: 'answerCount',
      key: 'answerCount',
    },
    {
      title: '问卷状态',
      dataIndex: 'isPublished',
      key: 'isPublished',
      render: (isPublished) => (
        <Tag color={isPublished ? 'blue' : 'red'}>{isPublished ? '已发布' : '未发布'}</Tag>
      ),
    },
    {
      title: '操作',
      key: 'operation',
      width: 150,
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            onClick={() => batchUpdateQuestionInfo([{ ...record, isDeleted: 0 }])}
          >
            恢复
          </Button>
          <Button
            type="link"
            danger
            onClick={() => {
              Modal.confirm({
                title: '确定要彻底删除吗?',
                okText: '确定',
                cancelText: '我再想想',
                maskClosable: true,
                centered: true,
                onOk: () => batchDeleteQuestionInfo([record.id]),
              })
            }}
          >
            彻底删除
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <div className={styles['table-content']}>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={recycleBinList}
        rowSelection={{
          onChange: (selectedRowIds, selectedRows) => {
            useRecycleBinStore.setState({ selectedRowIds, selectedRows })
          },
        }}
        pagination={{
          pageSize,
          current: page,
          total,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 30],
          onChange: (page, pageSize) => {
            useRecycleBinStore.setState({ page, pageSize })
          },
        }}
      />
    </div>
  )
}

export default TableContent
