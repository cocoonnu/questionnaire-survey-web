import React from 'react'
import EditCanvas from './components/EditCanvas'
import LeftPanel from './components/LeftPanel'
import EditHeader from './components/EditHeader'
import RightSetting from './components/RightSetting'
import styles from './index.module.less'

const EditQuestion = () => {
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
