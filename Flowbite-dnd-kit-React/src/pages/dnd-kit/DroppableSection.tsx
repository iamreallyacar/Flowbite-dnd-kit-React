import React, { useState } from 'react'
import { Card, Badge, Button } from 'flowbite-react'
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'

interface DraggableCardProps {
  id: string
  content: string
}

interface DroppableZoneProps {
  id: string
  children: React.ReactNode
  title: string
  acceptsType?: string
  className?: string
}

function DraggableCard({ id, content }: DraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: id,
    data: {
      type: content.includes('Task') ? 'task' : content.includes('File') ? 'file' : 'general'
    }
  })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`cursor-grab ${isDragging ? 'opacity-50' : ''}`}
    >
      <Card className="hover:shadow-md transition-shadow">
        <div className="text-center p-2">
          <Badge color="purple">{content}</Badge>
        </div>
      </Card>
    </div>
  )
}

function DroppableZone({ id, children, title, acceptsType, className = '' }: DroppableZoneProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: {
      accepts: acceptsType || 'all'
    }
  })

  return (
    <div className={`${className} space-y-2`}>
      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h4>
      <div
        ref={setNodeRef}
        className={`${isOver ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-300'} 
          border-2 border-dashed rounded-lg transition-colors min-h-32 p-4`}
      >
        {children}
      </div>
      {acceptsType && (
        <p className="text-xs text-gray-500">Accepts: {acceptsType}</p>
      )}
    </div>
  )
}

export function DroppableSection() {
  const [sourceItems, setSourceItems] = useState([
    'Task 1', 'Task 2', 'File A', 'File B', 'General Item'
  ])
  const [taskZone, setTaskZone] = useState<string[]>([])
  const [fileZone, setFileZone] = useState<string[]>([])
  const [generalZone, setGeneralZone] = useState<string[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)

    if (!over) return

    const activeId = active.id as string
    const overId = over.id as string
    const activeData = active.data.current
    const overData = over.data.current

    // Check if the drop is valid based on type
    if (overData?.accepts !== 'all' && activeData?.type !== overData?.accepts) {
      return // Invalid drop
    }

    // Remove from source
    setSourceItems(prev => prev.filter(item => item !== activeId))

    // Add to appropriate zone
    switch (overId) {
      case 'task-zone':
        setTaskZone(prev => [...prev, activeId])
        break
      case 'file-zone':
        setFileZone(prev => [...prev, activeId])
        break
      case 'general-zone':
        setGeneralZone(prev => [...prev, activeId])
        break
      case 'source':
        // Return to source
        break
    }
  }

  const resetItems = () => {
    setSourceItems(['Task 1', 'Task 2', 'File A', 'File B', 'General Item'])
    setTaskZone([])
    setFileZone([])
    setGeneralZone([])
  }

  const getActiveItem = () => {
    if (!activeId) return null
    return (
      <Card className="w-32 opacity-90">
        <div className="text-center p-2">
          <Badge color="purple">{activeId}</Badge>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Droppable Areas</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Droppable components define areas where draggable items can be dropped. 
          They can be configured to accept specific types of items and provide visual feedback.
        </p>
      </div>

      {/* Type-Aware Droppable Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Type-Aware Drop Zones</h3>
        <div className="mb-4">
          <Button onClick={resetItems} size="sm" color="gray">
            Reset Items
          </Button>
        </div>
        
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Source Area */}
            <DroppableZone id="source" title="Source Items" className="lg:col-span-1">
              <div className="space-y-2">
                {sourceItems.map((item) => (
                  <DraggableCard key={item} id={item} content={item} />
                ))}
              </div>
              {sourceItems.length === 0 && (
                <div className="text-gray-400 text-center py-8">
                  All items moved
                </div>
              )}
            </DroppableZone>

            {/* Task Zone - Only accepts tasks */}
            <DroppableZone id="task-zone" title="Task Zone" acceptsType="task">
              <div className="space-y-2">
                {taskZone.map((item) => (
                  <Card key={item} className="bg-blue-50">
                    <div className="text-center p-2">
                      <Badge color="info">{item}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
              {taskZone.length === 0 && (
                <div className="text-gray-400 text-center py-8">
                  Drop tasks here
                </div>
              )}
            </DroppableZone>

            {/* File Zone - Only accepts files */}
            <DroppableZone id="file-zone" title="File Zone" acceptsType="file">
              <div className="space-y-2">
                {fileZone.map((item) => (
                  <Card key={item} className="bg-yellow-50">
                    <div className="text-center p-2">
                      <Badge color="warning">{item}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
              {fileZone.length === 0 && (
                <div className="text-gray-400 text-center py-8">
                  Drop files here
                </div>
              )}
            </DroppableZone>

            {/* General Zone - Accepts all */}
            <DroppableZone id="general-zone" title="General Zone" acceptsType="all">
              <div className="space-y-2">
                {generalZone.map((item) => (
                  <Card key={item} className="bg-green-50">
                    <div className="text-center p-2">
                      <Badge color="success">{item}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
              {generalZone.length === 0 && (
                <div className="text-gray-400 text-center py-8">
                  Drop anything here
                </div>
              )}
            </DroppableZone>
          </div>
          <DragOverlay>
            {getActiveItem()}
          </DragOverlay>
        </DndContext>
      </div>

      {/* Droppable Properties */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">useDroppable Hook Properties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h4 className="text-lg font-semibold mb-3">Configuration</h4>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">id</code> - Unique identifier</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">data</code> - Custom data attached to droppable</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">disabled</code> - Disable drop functionality</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">resizeObserverConfig</code> - Resize observation settings</li>
            </ul>
          </Card>
          
          <Card>
            <h4 className="text-lg font-semibold mb-3">Returned Values</h4>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">setNodeRef</code> - Ref to attach to DOM element</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">isOver</code> - Whether draggable is over this droppable</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">active</code> - Currently active draggable</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">over</code> - Current droppable being dragged over</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">node</code> - DOM node reference</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">rect</code> - Bounding rectangle</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Visual States */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Visual States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h4 className="text-lg font-semibold mb-3">Default State</h4>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <span className="text-gray-500">Ready to receive drops</span>
            </div>
          </Card>
          
          <Card>
            <h4 className="text-lg font-semibold mb-3">Drag Over State</h4>
            <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-lg p-4 text-center">
              <span className="text-green-600">Drop zone active</span>
            </div>
          </Card>
          
          <Card>
            <h4 className="text-lg font-semibold mb-3">Invalid Drop State</h4>
            <div className="bg-red-50 border-2 border-dashed border-red-300 rounded-lg p-4 text-center">
              <span className="text-red-600">Invalid drop target</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Code Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code Example</h3>
        <Card>
          <pre className="text-sm overflow-x-auto">
            <code>{`import { useDroppable } from '@dnd-kit/core'

function DroppableArea({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: {
      accepts: 'specific-type' // Optional type checking
    }
  })

  return (
    <div
      ref={setNodeRef}
      className={\`\${isOver ? 'bg-green-50' : 'bg-gray-50'} 
        border-2 border-dashed rounded-lg p-4\`}
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
