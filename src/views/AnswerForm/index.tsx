import React, { useEffect } from 'react'
import ResultPage from './components/ResultPage'
import FormWrapper from './components/FormWrapper'
import { getTemplateBgd } from '@/utils/tools/template_utils'
import { useParams, useSearchParams } from 'react-router-dom'
import { useAnswerFormStore } from './store/answerForm.store'
import styles from './index.module.less'

const AnswerForm = () => {
  const params = useParams()
  const [searchParams] = useSearchParams()
  const searchParamsValue = Object.fromEntries(searchParams)
  const isFinished = useAnswerFormStore((state) => state.isFinished)
  const isPublished = useAnswerFormStore((state) => state.isPublished)
  const templateType = useAnswerFormStore((state) => state.templateType)
  const getQuestionInfoById = useAnswerFormStore((state) => state.getQuestionInfoById)
  const getTemplateInfoById = useAnswerFormStore((state) => state.getTemplateInfoById)

  useEffect(() => {
    if (searchParamsValue?.isTemplate === 'true') {
      useAnswerFormStore.setState({
        isTemplate: true,
        questionId: params?.questionId || '',
      })
      getTemplateInfoById()
      return
    }
    useAnswerFormStore.setState({ questionId: params?.questionId || '' })
    getQuestionInfoById()
  }, [])

  if (!isPublished) {
    return <ResultPage status="info" title="问卷已暂停发布，提交将不记录数据" />
  }

  if (isFinished) {
    return <ResultPage status="success" title="问卷到此结束，感谢您的参与" />
  }

  return (
    <div className={styles['answer-form']}>
      <div className={styles['skin-header']}>
        <img src={getTemplateBgd(templateType)} className={styles['skin-header-img']} />
      </div>
      <FormWrapper />
    </div>
  )
}

export default AnswerForm
