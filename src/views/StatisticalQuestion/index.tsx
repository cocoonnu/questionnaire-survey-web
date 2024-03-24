import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StatisticalTable from './components/StatisticalTable'
import StatisticalHeader from './components/StatisticalHeader'
import StatisticalCanvas from './components/StatisticalCanvas'
import { useStatisticalQuestionStore } from './store/statisticalQuestion.store'
import styles from './index.module.less'

const StatisticalQuestion = () => {
  const params = useParams()
  const getAnswerInfoList = useStatisticalQuestionStore((state) => state.getAnswerInfoList)
  const getQuestionInfoById = useStatisticalQuestionStore((state) => state.getQuestionInfoById)

  useEffect(() => {
    useStatisticalQuestionStore.setState({ questionId: params?.questionId || '' })
    getQuestionInfoById()
    getAnswerInfoList()
  }, [])

  return (
    <div className={styles['statistical-question']}>
      <div className={styles['statistical-question-header']}>
        <StatisticalHeader />
      </div>
      <div className={styles['statistical-question-content']}>
        <div className={styles['content-left']}>
          <StatisticalCanvas />
        </div>
        <div className={styles['content-right']}>
          <div className={styles['right-top']}>
            <StatisticalTable />
          </div>
          <div className={styles['right-bottom']}>
            <div className={styles['right-bottom-item']} />
            <div className={styles['right-bottom-item']} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticalQuestion
