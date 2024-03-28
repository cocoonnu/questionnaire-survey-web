import React from 'react'
import { Button, Divider } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { getTemplateCover } from '@/utils/tools/template_utils'
import styles from './index.module.less'
import type { TemplateInfo } from '@/services/templateInfo.services'

const TemplateCard = ({ type, name, createdTime }: TemplateInfo) => {
  const templateCover = getTemplateCover(type)

  return (
    <div className={styles['template-card']}>
      <div className={styles['template-card-header']}>
        <div className={styles['header-model']}>
          <Button style={{ width: '50%' }}>预览</Button>
          <Button type="primary" style={{ width: '50%' }}>
            使用
          </Button>
        </div>
        <div className={styles['header-cover']} style={{ backgroundImage: templateCover }} />
      </div>
      <Divider style={{ margin: 0 }} />
      <div className={styles['template-card-bottom']}>
        <div className={styles['bottom-title']}>{name}</div>
        <div className={styles['bottom-content']}>
          <div className={styles['bottom-content-text']}>{createdTime?.split(' ')[0]}</div>
          <Button
            type="text"
            size="small"
            icon={<DeleteOutlined />}
            className={styles['bottom-content-button']}
          >
            删除
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TemplateCard
