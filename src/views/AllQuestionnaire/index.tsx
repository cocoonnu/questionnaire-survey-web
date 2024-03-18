import React, { useEffect } from 'react'
import SearchBar from './components/SearchBar'
import QuestionCard from './components/QuestionCard'
import { useAllQuestionnaireStore } from './store/allQuestionnaire.store'
import styles from './index.module.less'

const AllQuestionnaire = () => {
  const getQuestionInfoList = useAllQuestionnaireStore((state) => state.getQuestionInfoList)

  useEffect(() => {
    // getQuestionInfoList({})
  }, [])

  return (
    <div className={styles['all-questionnaire']}>
      <div className={styles['all-questionnaire-header']}>
        <SearchBar />
      </div>
      <div className={styles['all-questionnaire-content']}>
        {[1, 2, 3, 4, 5, 6, 78, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
          <div className={styles['content-card']} key={item}>
            <QuestionCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllQuestionnaire
