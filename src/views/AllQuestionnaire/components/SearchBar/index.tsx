import React from 'react'
import { Button, Space } from 'antd'
import FormGenerator from '@/components/FormGenerator'
import { formComponents } from '../../constants/fields'
import { useAllQuestionnaireStore } from '../../store/allQuestionnaire.store'
import styles from './index.module.less'

const SearchBar = () => {
  const searchLoading = useAllQuestionnaireStore((state) => state.searchLoading)
  const searchFormRef = useAllQuestionnaireStore((state) => state.searchFormRef)
  const resetSearchForm = useAllQuestionnaireStore((state) => state.resetSearchForm)
  const submitSearchForm = useAllQuestionnaireStore((state) => state.submitSearchForm)

  return (
    <div className={styles['search-bar']}>
      <FormGenerator layout="inline" formRef={searchFormRef} components={formComponents} />
      <Space>
        <Button onClick={resetSearchForm}>重置</Button>
        <Button type="primary" onClick={submitSearchForm} loading={searchLoading}>
          搜索
        </Button>
      </Space>
    </div>
  )
}

export default SearchBar
