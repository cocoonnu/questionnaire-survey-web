import React, { useEffect, useState } from 'react'
import { Empty } from 'antd'
import { useLocation } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import QuestionCard from './components/QuestionCard'
import { useAllQuestionnaireStore } from './store/allQuestionnaire.store'
import styles from './index.module.less'
import { WORK_AREA_KEY } from '@/constants/menu'

const AllQuestionnaire = () => {
  const location = useLocation()
  const [isStarPage, setIsStarPage] = useState(false)
  const questionInfoList = useAllQuestionnaireStore((state) => state.questionInfoList)
  const submitSearchForm = useAllQuestionnaireStore((state) => state.submitSearchForm)
  const list = isStarPage ? questionInfoList.filter((item) => item.isStarred) : questionInfoList

  useEffect(() => {
    submitSearchForm()
    if (location.pathname.includes(WORK_AREA_KEY.starQuestionnaire)) {
      setIsStarPage(true)
    } else {
      setIsStarPage(false)
    }
  }, [location])

  return (
    <div className={styles['all-questionnaire']}>
      {!isStarPage && (
        <div className={styles['all-questionnaire-header']}>
          <SearchBar />
        </div>
      )}
      {list?.length > 0 ? (
        <div className={styles['all-questionnaire-content']}>
          {list
            .filter((item) => !item.isDeleted)
            .map((item) => (
              <div className={styles['content-card']} key={item.id}>
                <QuestionCard {...item} />
              </div>
            ))}
        </div>
      ) : (
        <Empty style={{ marginTop: 100 }} />
      )}
    </div>
  )
}

export default AllQuestionnaire
