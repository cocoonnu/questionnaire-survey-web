import React, { useEffect } from 'react'
import ResultPage from './components/ResultPage'
import FormWrapper from './components/FormWrapper'
import { useParams } from 'react-router-dom'
import { useAnswerFormStore } from './store/answerForm.store'
import questionnaireSurveyBgd from '@/assets/images/questionnaireSurveyBgd.png'
import styles from './index.module.less'

const AnswerForm = () => {
  const params = useParams()
  const isFinished = useAnswerFormStore((state) => state.isFinished)
  const isPublished = useAnswerFormStore((state) => state.isPublished)
  const getQuestionInfoById = useAnswerFormStore((state) => state.getQuestionInfoById)

  useEffect(() => {
    useAnswerFormStore.setState({ questionId: params?.questionId || '' })
    getQuestionInfoById()
  }, [])

  if (!isPublished) {
    return <ResultPage status="info" title="问卷已暂停回收，提交将不记录数据" />
  }

  if (isFinished) {
    return <ResultPage status="success" title="问卷到此结束，感谢您的参与" />
  }

  return (
    <div className={styles['answer-form']}>
      <div className={styles['skin-header']}>
        <img src={questionnaireSurveyBgd} className={styles['skin-header-img']} />
      </div>
      <FormWrapper />
    </div>
  )
}

export default AnswerForm
