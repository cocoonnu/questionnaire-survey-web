import React from 'react'
import {
  DndContext,
  closestCenter,
  useSensors,
  useSensor,
  MouseSensor,
  TouchSensor,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import type { DragEndEvent } from '@dnd-kit/core'

export interface SortableContainerProps {
  children: React.ReactNode | React.ReactNode[]
  items: { id: string; [key: string]: any }[]
  onDragEnd: (oldIndex: number, newIndex: number) => void
}

const SortableContainer = ({ children, items, onDragEnd }: SortableContainerProps) => {
  /**
   * 传感器配置
   * @see https://docs.dndkit.com/api-documentation/sensors#usesensors
   */
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over == null) return
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id)
      const newIndex = items.findIndex((item) => item.id === over.id)
      onDragEnd(oldIndex, newIndex)
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  )
}

export default SortableContainer
