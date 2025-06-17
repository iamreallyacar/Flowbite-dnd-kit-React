import { Card, Badge } from 'flowbite-react'
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
import { FaCog, FaTools, FaClipboard } from 'react-icons/fa'

interface ProductionJob {
  id: string
  title: string
  description: string
  type: 'assembly' | 'machining' | 'quality'
  priority: 'high' | 'medium' | 'low'
  estimatedTime: string
  orderNumber: string
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
  const [tasks, setTasks] = useState<ProductionJob[]>([
    { 
      id: '1', 
      title: 'Widget Assembly Line A',
      description: 'Assemble 500 widget units for automotive client',
      type: 'assembly',
      priority: 'high',
      estimatedTime: '4 hours',
      orderNumber: 'PO-2024-158'
    },
    { 
      id: '2', 
      title: 'CNC Machining - Precision Gears',
      description: 'Machine 200 precision gears to 0.01mm tolerance',
      type: 'machining',
      priority: 'medium',
      estimatedTime: '6 hours',
      orderNumber: 'PO-2024-159'
    },
    { 
      id: '3', 
      title: 'Quality Control Inspection',
      description: 'Quality inspection for motor assembly batch',
      type: 'quality',
      priority: 'high',
      estimatedTime: '2 hours',
      orderNumber: 'QC-24-890'
    },
    { 
      id: '4', 
      title: 'Motor Assembly - Electric Motors',
      description: 'Assemble 100 electric motors with new specifications',
      type: 'assembly',
      priority: 'low',
      estimatedTime: '8 hours',
      orderNumber: 'PO-2024-160'
    },
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
      <h2 className="text-2xl font-semibold mb-6">Production Job Queue</h2>
      <p className="text-gray-600 mb-6">
        Reorder production jobs by dragging them up or down to prioritize tasks. 
        This demonstrates how sortable lists can be used for job sequencing and priority management.
      </p>
      <Card className="max-w-2xl">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-4">
          Scheduled Production Jobs
        </h5>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            <div className="space-y-3">
              {tasks.map(task => {
                const getIcon = () => {
                  switch (task.type) {
                    case 'assembly': return <FaTools className="text-blue-500" />
                    case 'machining': return <FaCog className="text-green-500" />
                    case 'quality': return <FaClipboard className="text-purple-500" />
                    default: return <FaCog className="text-gray-500" />
                  }
                }

                const getPriorityColor = () => {
                  switch (task.priority) {
                    case 'high': return 'red'
                    case 'medium': return 'yellow'
                    case 'low': return 'green'
                    default: return 'gray'
                  }
                }

                return (
                  <SortableItem key={task.id} id={task.id}>
                    <Card className="cursor-move hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          {getIcon()}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-medium text-gray-900 truncate">{task.title}</h4>
                            <div className="flex space-x-1">
                              <Badge color={getPriorityColor()} size="sm">{task.priority}</Badge>
                              <Badge color="gray" size="sm">{task.estimatedTime}</Badge>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 truncate">{task.description}</p>
                          <p className="text-xs text-blue-600 font-medium">{task.orderNumber}</p>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                    </Card>
                  </SortableItem>
                )
              })}
            </div>
          </SortableContext>
        </DndContext>
      </Card>
    </section>
  )
}
