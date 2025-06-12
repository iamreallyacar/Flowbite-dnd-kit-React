import { Card } from 'flowbite-react'
import { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import {
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface Task {
  id: string
  content: string
}

interface SortableItemProps {
  id: string
  children: React.ReactNode
}

function SortableItem({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

export function VerticalSortableSection() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', content: 'Learn React' },
    { id: '2', content: 'Build awesome projects' },
    { id: '3', content: 'Master drag and drop' },
    { id: '4', content: 'Integrate with Flowbite' },
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over?.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Vertical Sortable Task List</h2>
      <Card className="max-w-md">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-4">
          To-Do Tasks
        </h5>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            <div className="space-y-3">
              {tasks.map(task => (
                <SortableItem key={task.id} id={task.id}>
                  <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 cursor-move hover:bg-gray-200 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800">{task.content}</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </SortableItem>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </Card>
    </section>
  )
}
