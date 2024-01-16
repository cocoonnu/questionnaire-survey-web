import React, { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDemoStore } from './store/demo.store'
import { app } from '@/utils/tools/app_utils'
import styles from './index.module.less'

const Index = () => {
  const demoRef = useRef()
  const layoutStore = useDemoStore()
  const navigate = useNavigate()
  const location = useLocation()
  console.log('location', location)

  useEffect(() => {
    console.log(demoRef, 'demoRef')
    return () => {}
  }, [])

  const goPage = () => {
    navigate({
      pathname: '/app/home',
    })
  }
  return (
    <div className={styles.header} style={{ padding: 24, background: '#fff' }} ref={demoRef}>
      <button onClick={goPage}>跳转主页</button>
      <div className={styles.bg} />
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <p>num参数：{layoutStore.bears}</p>
      </div>

      <button
        onClick={() => {
          layoutStore.increasePopulation()
        }}
      >
        store num++
      </button>
      <button
        onClick={() => {
          layoutStore.deductNum()
        }}
      >
        store num--
      </button>
      <button
        onClick={async () => {
          const res = await app.open('CreateGroupModal', { kk: 123 })
          console.log('弹', res)
        }}
      >
        缓存处理
      </button>
    </div>
  )
}

export default Index
