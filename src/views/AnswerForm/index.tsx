import React, { useEffect } from 'react'
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
    <div className={styles['answer-form']}>
      <div className={styles['form-wrapper']} />
    </div>
  )
}

export default AnswerForm
