import React, { useEffect } from 'react'
import FormWrapper from './components/FormWrapper'
import { useParams } from 'react-router-dom'
import { useAnswerFormStore } from './store/answerForm.store'
import styles from './index.module.less'

const AnswerForm = () => {
  const params = useParams()
  const getQuestionInfoById = useAnswerFormStore((state) => state.getQuestionInfoById)

  useEffect(() => {
    useAnswerFormStore.setState({ questionId: params?.questionId || '' })
    getQuestionInfoById()
  }, [])

  return (
    <div className={styles['page-wrapper']}>
      <div className={styles['answer-form']}>
        <FormWrapper />
      </div>
    </div>
  )
}

export default AnswerForm
