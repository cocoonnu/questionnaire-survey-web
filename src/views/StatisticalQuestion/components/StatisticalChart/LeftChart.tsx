import React from 'react'
import { Empty } from 'antd'
import SelectPieChart from './components/SelectPieChart'
import { useStatisticalQuestionStore } from '../../store/statisticalQuestion.store'
import { QuestionComType } from '@/components/QuestionGenerator/type'

const LeftChart = () => {
  const tableDataList = useStatisticalQuestionStore((state) => state.tableDataList)
  const selectedQuestionCom = useStatisticalQuestionStore((state) => state.selectedQuestionCom)
  const questionComType = selectedQuestionCom?.type
  const answerTextList = tableDataList.map((item) => item.answerText)

  if (
    questionComType === QuestionComType.questionCheckbox ||
    questionComType === QuestionComType.questionRadio ||
    questionComType === QuestionComType.questionSelect
  ) {
    return <SelectPieChart answerTextList={answerTextList} />
  }

  return <Empty description="暂无图表统计" style={{ marginTop: '20%' }} />
}

export default LeftChart
