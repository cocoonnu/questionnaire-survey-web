import React from 'react'
import { Table, Tag } from 'antd'
import TooltipParcel from '@/components/TooltipParcel'
import { useStatisticalQuestionStore } from '../../store/statisticalQuestion.store'
import type { ColumnsType } from 'antd/es/table'
import type { StatisticalTableData } from '../../types'

const StatisticalTable = () => {
  const getTableDataBySelectedId = useStatisticalQuestionStore(
    (state) => state.getTableDataBySelectedId,
  )
  const selectedId = useStatisticalQuestionStore((state) => state.selectedId)
  const tableData = getTableDataBySelectedId(selectedId)

  const columns: ColumnsType<StatisticalTableData> = [
    {
      title: '序号',
      dataIndex: 'order',
    },
    {
      title: '答卷时间',
      dataIndex: 'createdTime',
    },
    {
      title: '答案文本',
      dataIndex: 'answerText',
      render: (value) => <TooltipParcel title={value} maxWidth={300} />,
    },
    {
      title: '地理位置',
      dataIndex: 'address',
      render: (value) => <Tag>{value}</Tag>,
    },
  ]

  return <Table rowKey="order" columns={columns} dataSource={tableData} />
}

export default StatisticalTable
