import React from 'react'
import { Typography } from 'antd'
import { useEditQuestionStore } from '../../store/editQuestion.store'
import { questionComConfigGroup } from '@/components/QuestionGenerator'
import styles from './index.module.less'
import type { QuestionComConfig } from '@/components/QuestionGenerator/type'

const ComponentLib = () => {
  const addQuestionComInfo = useEditQuestionStore((state) => state.addQuestionComInfo)

  const genComponent = (config: QuestionComConfig) => {
    const { Component, type } = config
    return (
      <div
        key={type}
        className={styles['component-wrapper']}
        onClick={() => addQuestionComInfo(config)}
      >
        <div className={styles['pointer-none']}>
          <Component />
        </div>
      </div>
    )
  }

  return (
    <>
      {questionComConfigGroup.map((group, index) => {
        const { groupId, groupName, groupConfigs } = group
        return (
          <div key={groupId}>
            <Typography.Title
              level={3}
              style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}
            >
              {groupName}
            </Typography.Title>
            <div>{groupConfigs.map((config) => genComponent(config))}</div>
          </div>
        )
      })}
    </>
  )
}

export default ComponentLib
