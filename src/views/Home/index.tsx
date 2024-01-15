import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeaderWrapper from '../../components/PageHeaderWrapper'
import styles from './index.module.less'
import EkdButton from '@/components/EkdButton'

interface HomeProps {
  path: string
}

const Home = (props: HomeProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    console.log('home init')
    return () => {}
  }, [])

  return (
    <PageHeaderWrapper path={props.path}>
      <div className={styles.content_box}>
        <EkdButton type="primary">后台管理系统2.0</EkdButton>
        ✌️化繁为简🏆
        <EkdButton
          type="primary"
          onClick={() => {
            navigate('/app/demo')
          }}
        >
          跳转demo页面
        </EkdButton>
      </div>
    </PageHeaderWrapper>
  )
}

export default Home
