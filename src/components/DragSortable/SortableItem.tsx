import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import styles from './index.module.less'
import type { CSSProperties } from 'react'

export interface SortableItemProps {
  key: string | number
  id: string | number
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

const SortableItem = ({ id, children, style }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...style,
  }

  return (
    <div
      ref={setNodeRef}
      className={styles['sortable-item']}
      style={itemStyle}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  )
}

export default SortableItem
