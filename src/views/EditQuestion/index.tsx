import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import EditCanvas from './components/EditCanvas'
import LeftPanel from './components/LeftPanel'
import EditHeader from './components/EditHeader'
import RightSetting from './components/RightSetting'
import { useEditQuestionStore } from './store/editQuestion.store'
import styles from './index.module.less'

const EditQuestion = () => {
  const params = useParams()
  const [searchParams] = useSearchParams()
  const searchParamsValue = Object.fromEntries(searchParams)
  const getQuestionInfoById = useEditQuestionStore((state) => state.getQuestionInfoById)
  const getTemplateInfoById = useEditQuestionStore((state) => state.getTemplateInfoById)

  useEffect(() => {
    useEditQuestionStore.setState({ questionId: params?.questionId || '' })
    if (searchParamsValue?.isTemplate === 'true') {
      getTemplateInfoById()
    } else {
      getQuestionInfoById()
    }
  }, [params])

  return (
    <div className={styles['edit-question']}>
      <div className={styles['edit-question-header']}>
        <EditHeader />
      </div>
      <div className={styles['edit-question-content']}>
        <div className={styles['content-left']}>
          <LeftPanel />
        </div>
        <div className={styles['content-middle']}>
          <EditCanvas />
        </div>
        <div className={styles['content-right']}>
          <RightSetting />
        </div>
      </div>
    </div>
  )
}

export default EditQuestion
