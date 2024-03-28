import React from 'react'
import { Button } from 'antd'
import FormGenerator from '@/components/FormGenerator'
import { questionComToForm } from '../hooks/questionComToForm'
import { useAnswerFormStore } from '../store/answerForm.store'
import styles from './index.module.less'

const FormWrapper = () => {
  const formRef = useAnswerFormStore((state) => state.formRef)
  const isTemplate = useAnswerFormStore((state) => state.isTemplate)
  const submitAnswerInfo = useAnswerFormStore((state) => state.submitAnswerInfo)
  const questionComInfoList = useAnswerFormStore((state) => state.questionComInfoList)
  const formComponents = questionComInfoList.map((item) => questionComToForm(item))

  return (
    <div className={styles['form-wrapper']}>
      <FormGenerator
        className={styles['form-component']}
        components={formComponents}
        formRef={formRef}
      />
      {!isTemplate && (
        <div className={styles['submit-button']}>
          <Button type="primary" style={{ width: '50%' }} size="large" onClick={submitAnswerInfo}>
            提交问卷
          </Button>
        </div>
      )}
    </div>
  )
}

export default FormWrapper
