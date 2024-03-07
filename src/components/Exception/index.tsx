import React from 'react'
import classNames from 'classnames'
import { Button } from 'antd'
import config from './typeConfig'
import { navigate } from '@/utils/tools/router_utils'
import styles from './index.module.less'

export interface ExceptionProps {
  type?: '403' | '404' | '500'
  title?: React.ReactNode
  desc?: React.ReactNode
  img?: string
  style?: React.CSSProperties
  className?: string
  backText?: React.ReactNode
  redirect?: string
}

const Exception = ({
  img,
  desc,
  title,
  className,
  style,
  type = '404',
  backText = '返回首页',
  redirect = '/',
}: ExceptionProps) => {
  const pageType = type in config ? type : '404'
  return (
    <div className={classNames(styles.exception, className)} style={style}>
      <div className={styles.imgBlock}>
        <div
          className={styles.imgEle}
          style={{ backgroundImage: `url(${img || config[pageType].img})` }}
        />
      </div>
      <div className={styles.content}>
        <h1>{title || config[pageType].title}</h1>
        <div className={styles.desc}>{desc || config[pageType].desc}</div>
        <div className={styles.actions}>
          <Button type="primary" style={{ width: 200 }} onClick={() => navigate(redirect)}>
            {backText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Exception
