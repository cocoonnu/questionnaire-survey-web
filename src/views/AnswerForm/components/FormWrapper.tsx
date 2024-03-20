import React from 'react'
import FormGenerator from '@/components/FormGenerator'
import { questionComToForm } from '../hooks/questionComToForm'
import { useAnswerFormStore } from '../store/answerForm.store'
import styles from './index.module.less'

const FormWrapper = () => {
  const formRef = useAnswerFormStore((state) => state.formRef)
  const questionComInfoList = useAnswerFormStore((state) => state.questionComInfoList)
  const formComponents = questionComInfoList.map((item) => questionComToForm(item))

  return (
    <div className={styles['form-wrapper']}>
      <FormGenerator components={formComponents} formRef={formRef} />
    </div>
  )
}

export default FormWrapper
