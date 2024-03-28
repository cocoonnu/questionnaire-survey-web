import React from 'react'
import { Button, Divider, message, Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { getTemplateCover } from '@/utils/tools/template_utils'
import { useTemplateLibraryStore } from '../../store/templateLibrary.store'
import styles from './index.module.less'
import type { TemplateInfo } from '@/services/templateInfo.services'
import { navigate } from '@/utils/tools/router_utils'

const TemplateCard = ({ type, name, createdTime, isPre, id }: TemplateInfo) => {
  const templateCover = getTemplateCover(type)
  const deleteTemplateInfo = useTemplateLibraryStore((state) => state.deleteTemplateInfo)

  const deleteClick = () => {
    if (isPre === 1) {
      message.error('系统预制的模板不允许删除')
      return
    }
    Modal.confirm({
      title: '确定要删除吗?',
      okText: '确定',
      cancelText: '我再想想',
      maskClosable: true,
      centered: true,
      onOk: () => deleteTemplateInfo(id),
    })
  }

  const previewClick = () => {
    window.open(`${window.location.origin}/#/answerForm/${id}?isTemplate=true`)
  }

  const useTemplateClick = () => {
    navigate(`/editQuestion/${id}?isTemplate=true`)
  }

  return (
    <div className={styles['template-card']}>
      <div className={styles['template-card-header']}>
        <div className={styles['header-model']}>
          <Button style={{ width: '50%' }} onClick={previewClick}>
            预览
          </Button>
          <Button type="primary" style={{ width: '50%' }} onClick={useTemplateClick}>
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
            onClick={deleteClick}
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
