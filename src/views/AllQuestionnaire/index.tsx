import React from 'react'
import SearchBar from './components/SearchBar'
import styles from './index.module.less'

const AllQuestionnaire = () => {
  return (
    <div className={styles['all-questionnaire']}>
      <div className={styles['all-questionnaire-header']}>
        <SearchBar />
      </div>
      <div className={styles['all-questionnaire-content']}>
        {[1, 2, 3, 4, 5, 6, 78, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
          <div className={styles['content-card']} key={item}>
            <div style={{ backgroundColor: '#fff', height: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllQuestionnaire
