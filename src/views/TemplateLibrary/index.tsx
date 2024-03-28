import React, { useEffect } from 'react'
import { Empty } from 'antd'
import { useLocation } from 'react-router-dom'
import AnimationBox from '@/components/AnimationBox'
import TemplateCard from './components/TemplateCard/TemplateCard'
import { useTemplateLibraryStore } from './store/templateLibrary.store'
import styles from './index.module.less'

const TemplateLibrary = () => {
  const location = useLocation()
  const templateInfoList = useTemplateLibraryStore((state) => state.templateInfoList)
  const getTemplateInfoList = useTemplateLibraryStore((state) => state.getTemplateInfoList)

  useEffect(() => {
    const templateTypeReg = location.pathname.match(/\/app\/(.+)/)
    useTemplateLibraryStore.setState({ templateType: templateTypeReg?.[1] })
    getTemplateInfoList()
  }, [location])

  return (
    <div className={styles['template-library']}>
      {templateInfoList.length === 0 ? (
        <Empty style={{ marginTop: '10%' }} />
      ) : (
        <div className={styles['template-library-content']}>
          {templateInfoList.map((item) => (
            <div className={styles['content-card']} key={item.id}>
              <AnimationBox style={{ height: '100%' }}>
                <TemplateCard {...item} />
              </AnimationBox>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TemplateLibrary
