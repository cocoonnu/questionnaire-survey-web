import React from 'react'
import { Empty } from 'antd'
import SelectBarChart from './components/SelectBarChart'
import { useStatisticalQuestionStore } from '../../store/statisticalQuestion.store'
import { QuestionComType } from '@/components/QuestionGenerator/type'

const RightChart = () => {
  const tableDataList = useStatisticalQuestionStore((state) => state.tableDataList)
  const selectedQuestionCom = useStatisticalQuestionStore((state) => state.selectedQuestionCom)
  const questionComType = selectedQuestionCom?.type
  const answerTextList = tableDataList.map((item) => item.answerText)

  if (
    questionComType === QuestionComType.questionCheckbox ||
    questionComType === QuestionComType.questionRadio ||
    questionComType === QuestionComType.questionSelect
  ) {
    return <SelectBarChart answerTextList={answerTextList} />
  }

  return <Empty description="暂无图表统计" style={{ marginTop: '20%' }} />
}

export default RightChart
