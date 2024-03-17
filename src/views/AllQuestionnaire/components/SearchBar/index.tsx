import React from 'react'
import { Button, Space } from 'antd'
import FormGenerator from '@/components/FormGenerator'
import { formComponents } from '../../constants/fields'
import { useAllQuestionnaireStore } from '../../store/allQuestionnaire.store'
import styles from './index.module.less'

const SearchBar = () => {
  const searchFormRef = useAllQuestionnaireStore((state) => state.searchFormRef)

  return (
    <div className={styles['search-bar']}>
      <FormGenerator layout="inline" formRef={searchFormRef} components={formComponents} />
      <Space>
        <Button>重置</Button>
        <Button type="primary">搜索</Button>
      </Space>
    </div>
  )
}

export default SearchBar
