import React, { useEffect } from 'react'
import { Empty } from 'antd'
import { useLocation } from 'react-router-dom'
import AnimationBox from '@/components/AnimationBox'
import SearchBar from './components/SearchBar'
import QuestionCard from './components/QuestionCard'
import { useAllQuestionnaireStore } from './store/allQuestionnaire.store'
import styles from './index.module.less'
import { WORK_AREA_KEY } from '@/constants/menu'

const AllQuestionnaire = () => {
  const location = useLocation()
  const isStarPage = location.pathname.includes(WORK_AREA_KEY.starQuestionnaire)
  const questionInfoList = useAllQuestionnaireStore((state) => state.questionInfoList)?.filter(
    (item) => !item.isDeleted,
  )
  const submitSearchForm = useAllQuestionnaireStore((state) => state.submitSearchForm)
  const list = isStarPage ? questionInfoList.filter((item) => item.isStarred) : questionInfoList

  useEffect(() => {
    submitSearchForm()
  }, [])

  return (
    <div className={styles['all-questionnaire']}>
      {!isStarPage && (
        <div className={styles['all-questionnaire-header']}>
          <SearchBar />
        </div>
      )}
      {!list || list?.length === 0 ? (
        <Empty style={{ marginTop: '10%' }} />
      ) : (
        <div className={styles['all-questionnaire-content']}>
          {list.map((item) => (
            <div className={styles['content-card']} key={item.id}>
              <AnimationBox>
                <QuestionCard {...item} />
              </AnimationBox>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AllQuestionnaire
