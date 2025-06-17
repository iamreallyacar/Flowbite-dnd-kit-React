import React, { useState } from 'react'
import { Card, Badge, Button } from 'flowbite-react'
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { FaGripVertical, FaCog, FaClipboard, FaTools } from 'react-icons/fa'

interface DraggableItemProps {
  id: string
  children: React.ReactNode
  handle?: boolean
  disabled?: boolean
}

interface DraggableJobProps {
  id: string
  title: string
  description: string
  type: 'assembly' | 'machining' | 'quality'
  priority: 'high' | 'medium' | 'low'
  duration: string
  handle?: boolean
  disabled?: boolean
  // Add these props for drag listeners when using handles
  listeners?: any
  attributes?: any
}

function DraggableItem({ id, children, handle = false, disabled = false }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: id,
    disabled: disabled,
  })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined

  const dragProps = handle ? {} : { ...listeners, ...attributes }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...dragProps}
      className={`${disabled ? 'opacity-50 cursor-not-allowed' : !handle ? 'cursor-grab' : ''} 
        ${isDragging ? 'opacity-50' : ''}`}
    >      {handle ? React.cloneElement(children as React.ReactElement, {
      listeners: listeners,
      attributes: attributes
    } as any) : children}
    </div>
  )
}

function DraggableCard({ title, description, type, priority, duration, handle = false, disabled = false, listeners, attributes }: DraggableJobProps) {
  const getIcon = () => {
    switch (type) {
      case 'assembly': return <FaTools className="text-blue-500" />
      case 'machining': return <FaCog className="text-green-500" />
      case 'quality': return <FaClipboard className="text-purple-500" />
      default: return <FaCog className="text-gray-500" />
    }
  }

  const getTypeColor = () => {
    switch (type) {
      case 'assembly': return 'info'
      case 'machining': return 'success'
      case 'quality': return 'purple'
      default: return 'gray'
    }
  }

  const getPriorityColor = () => {
    switch (priority) {
      case 'high': return 'red'
      case 'medium': return 'yellow'
      case 'low': return 'green'
      default: return 'gray'
    }
  }

  return (
    <Card className={`hover:shadow-md transition-shadow ${disabled ? 'bg-gray-100' : ''}`}>
      <div className="flex items-center space-x-3">
        {handle && (
          <div
            className="cursor-grab text-gray-400 hover:text-gray-600 p-1"
            {...listeners}
            {...attributes}
          >
            <FaGripVertical />
          </div>
        )}
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-medium text-gray-900 truncate">{title}</h4>
            <div className="flex space-x-1">
              <Badge color={getTypeColor()} size="sm">{type}</Badge>
              <Badge color={getPriorityColor()} size="sm">{priority}</Badge>
            </div>
          </div>
          <p className="text-xs text-gray-500 truncate">{description}</p>
          <p className="text-xs text-blue-600 font-medium">{duration}</p>
        </div>
      </div>
    </Card>
  )
}

function DropZone({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id })

  return (
    <div className="space-y-2">
      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h4>
      <div
        ref={setNodeRef}
        className={`${isOver ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-300'} 
          border-2 border-dashed rounded-lg transition-colors min-h-32 p-4`}
      >
        {children}
      </div>
    </div>
  )
}

export function DraggableSection() {
  const [items] = useState([
    { id: 'job-1', title: 'Widget Assembly - Order #PO-158', description: 'Assemble 1000 widget units', type: 'assembly' as const, priority: 'high' as const, duration: '4 hours' },
    { id: 'job-2', title: 'CNC Machining - Gear Production', description: 'Machine 500 precision gears', type: 'machining' as const, priority: 'medium' as const, duration: '6 hours' },
    { id: 'job-3', title: 'Quality Control - Batch QC-24-890', description: 'Quality inspection for motor assembly', type: 'quality' as const, priority: 'high' as const, duration: '2 hours' },
    { id: 'job-4', title: 'Motor Assembly - Order #PO-159', description: 'Assemble 200 electric motors', type: 'assembly' as const, priority: 'low' as const, duration: '8 hours' },
    { id: 'job-5', title: 'Surface Treatment - Coating Process', description: 'Apply protective coating to 300 parts', type: 'machining' as const, priority: 'medium' as const, duration: '3 hours' },
  ])

  const [droppedItems, setDroppedItems] = useState<string[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string)
  } function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)

    if (over && over.id === 'drop-zone') {
      const activeId = active.id as string
      if (!droppedItems.includes(activeId)) {
        setDroppedItems(prev => [...prev, activeId])
      }
    }
  }

  const resetItems = () => {
    setDroppedItems([])
  }

  const getActiveItem = () => {
    if (!activeId) return null
    const item = items.find(item => item.id === activeId)
    if (!item) return null

    return (
      <Card className="w-64 opacity-90">
        <DraggableCard {...item} />
      </Card>
    )
  }

  return (    <div className="space-y-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Draggable Production Jobs</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Production jobs can be dragged and dropped to reassign them between machines, work centers, or time slots.
          This demonstrates how drag-and-drop interfaces can streamline production scheduling workflows.
        </p>
      </div>

      {/* Basic Draggable Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Basic Draggable Items</h3>
        <div className="mb-4">
          <Button onClick={resetItems} size="sm" color="gray">
            Reset
          </Button>
        </div>

        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Source Items */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Draggable Items</h4>
              <div className="space-y-3">
                {items.map((item) => (
                  <DraggableItem key={item.id} id={item.id}>
                    <DraggableCard {...item} />
                  </DraggableItem>
                ))}
              </div>
            </div>

            {/* Drop Zone */}
            <DropZone id="drop-zone" title="Drop Zone">
              <div className="space-y-2">
                {droppedItems.map((itemId) => {
                  const item = items.find(i => i.id === itemId)
                  return item ? (
                    <Card key={itemId} className="bg-green-50">
                      <DraggableCard {...item} />
                    </Card>
                  ) : null
                })}
              </div>
              {droppedItems.length === 0 && (
                <div className="text-gray-400 text-center py-8">
                  Drag items here
                </div>
              )}
            </DropZone>
          </div>
          <DragOverlay>
            {getActiveItem()}
          </DragOverlay>
        </DndContext>
      </div>      {/* Drag Handle Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Drag Handles</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Items with drag handles can only be dragged by clicking on the handle area.
        </p>
        <DndContext onDragStart={handleDragStart} onDragEnd={() => setActiveId(null)}>
          <div className="space-y-3">
            {items.slice(0, 3).map((item) => (
              <DraggableItem key={`handle-${item.id}`} id={`handle-${item.id}`} handle>
                <DraggableCard {...item} handle />
              </DraggableItem>
            ))}
          </div>
          <DragOverlay>
            {getActiveItem()}
          </DragOverlay>
        </DndContext>
      </div>

      {/* Disabled State Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Disabled State</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Draggable items can be disabled to prevent interaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">          <div>
            <h5 className="font-medium mb-2">Enabled</h5>
            <DraggableItem id="enabled-example" disabled={false}>
              <DraggableCard
                id="enabled"
                title="Quality Check - Enabled"
                description="This job can be dragged to schedule"
                type="quality"
                priority="medium"
                duration="1 hour"
                disabled={false}
              />
            </DraggableItem>
          </div>
          <div>
            <h5 className="font-medium mb-2">Disabled</h5>
            <DraggableItem id="disabled-example" disabled={true}>
              <DraggableCard
                id="disabled"
                title="Maintenance Job - Disabled"
                description="This job is locked and cannot be moved"
                type="machining"
                priority="high"
                duration="4 hours"
                disabled={true}
              />
            </DraggableItem>
          </div>
        </div>
      </div>

      {/* useDraggable Properties */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">useDraggable Hook Properties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h4 className="text-lg font-semibold mb-3">Configuration</h4>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">id</code> - Unique identifier</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">data</code> - Custom data attached to draggable</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">disabled</code> - Disable drag functionality</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">attributes</code> - Accessibility attributes</li>
            </ul>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">Returned Values</h4>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">setNodeRef</code> - Ref to attach to DOM element</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">listeners</code> - Event listeners for drag</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">transform</code> - Current transformation</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">isDragging</code> - Whether currently being dragged</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">node</code> - DOM node reference</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">over</code> - Current droppable being dragged over</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Code Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code Example</h3>
        <Card>
          <pre className="text-sm overflow-x-auto">
            <code>{
            `import { useDraggable } from '@dnd-kit/core'

            function DraggableItem({ id, children }) {
              const {
                attributes,
                listeners,
                setNodeRef,
                transform,
                isDragging,
              } = useDraggable({
                id: id,
                data: {
                  type: 'custom-type', // Optional custom data
                }
              })

              const style = transform ? {
                transform: \`translate3d(\${transform.x}px, \${transform.y}px, 0)\`,
              } : undefined

              return (
                <div
                  ref={setNodeRef}
                  style={style}
                  {...listeners}
                  {...attributes}
                  className={\`cursor-grab \${isDragging ? 'opacity-50' : ''}\`}
                >
                  {children}
                </div>
              )
            }`}</code>
          </pre>
        </Card>
      </div>
    </div>
  )
}
