import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { Dropdown } from 'antd'
// import RightContextMenu from './RightContextMenu'
import { OutlinedTipsClose, FilledTipsClose } from '@hose/eui-icons'
import styles from './index.module.less'

export interface PageTabsLableProps {
  route: any
  tabLabel: React.ReactNode
  hasDelete: boolean
  isActive: boolean
  onDeleteChange: (route: any) => void
}

const PageTabsLable = ({
  route,
  tabLabel,
  hasDelete,
  isActive,
  onDeleteChange,
}: PageTabsLableProps) => {
  const closeElement = useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = useState(false)
  // const [visible, setVisible] = useState(false)

  useEffect(() => {
    closeElement.current?.addEventListener('mouseenter', mouseEnterHandler)
    return () => {
      closeElement.current?.removeEventListener('mouseenter', mouseEnterHandler)
    }
  }, [])

  const mouseEnterHandler = () => {
    const mouseLeaveHandler = () => {
      setIsHover(false)
      closeElement.current?.removeEventListener('mouseleave', mouseLeaveHandler)
    }
    closeElement.current?.addEventListener('mouseleave', mouseLeaveHandler)
    setIsHover(true)
  }

  const onDelTabs = (e) => {
    e.stopPropagation()
    onDeleteChange?.(route)
  }

  // 下拉菜单显隐操作
  // const changeHandler = (flag: boolean) => {
  //   if (flag) {
  //     setVisible(true)
  //   } else {
  //     setVisible(false)
  //   }
  // }

  return (
    <Dropdown
      trigger={['contextMenu']}
      // open={visible}
      // onOpenChange={changeHandler}
    >
      <div className={styles['tabs-item-wrapper']}>
        <span
          className={classNames(styles['tab-text'], isActive ? styles['text-border--color'] : null)}
        >
          {tabLabel}
        </span>
        {hasDelete && (
          <div
            ref={closeElement}
            className={classNames(styles['tabs-item--close'])}
            onClick={onDelTabs}
          >
            {isHover ? <FilledTipsClose /> : <OutlinedTipsClose />}
          </div>
        )}
      </div>
    </Dropdown>
  )
}

export default PageTabsLable
