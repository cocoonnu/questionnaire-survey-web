import React, { useRef, useEffect, useState } from 'react'
import { Table, Tag } from 'antd'
import classNames from 'classnames'
import TooltipParcel from '@/components/TooltipParcel'
import { useStatisticalQuestionStore } from '../../store/statisticalQuestion.store'
import styles from './index.module.less'
import type { ColumnsType } from 'antd/es/table'
import type { StatisticalTableData } from '../../types'

const StatisticalTable = () => {
  const TABLE_COLUMN_HEAD = 55
  const tableWrapper = useRef<HTMLDivElement | null>(null)
  const [tableHeight, setTableHeight] = useState<number>()
  const tableDataList = useStatisticalQuestionStore((state) => state.tableDataList)

  useEffect(() => {
    if (tableWrapper.current) {
      setTableHeight(tableWrapper.current.clientHeight - TABLE_COLUMN_HEAD)
    }
  }, [tableWrapper])

  const columns: ColumnsType<StatisticalTableData> = [
    {
      title: '序号',
      dataIndex: 'order',
      width: 80,
      render: (value) => value + 1,
    },
    {
      title: '答卷时间',
      dataIndex: 'createdTime',
      width: 200,
    },
    {
      title: '答案文本',
      dataIndex: 'answerText',
      render: (value) => <TooltipParcel title={value} maxWidth={400} />,
    },
    {
      title: '地理位置',
      dataIndex: 'address',
      render: (value) => <Tag>{value}</Tag>,
      width: 200,
    },
  ]

  return (
    <div
      ref={tableWrapper}
      className={classNames(styles['table-wrapper'], {
        [styles['hidden-bottom']]: tableDataList.length === 0,
      })}
    >
      <Table
        rowKey="order"
        columns={columns}
        dataSource={tableDataList}
        scroll={{ y: tableHeight }}
      />
    </div>
  )
}

export default StatisticalTable
