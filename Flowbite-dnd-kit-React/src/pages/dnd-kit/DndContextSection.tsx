import React, { useState } from 'react'
import { Card, Badge } from 'flowbite-react'
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'

interface DraggableItemProps {
  id: string
  children: React.ReactNode
}

interface DroppableAreaProps {
  id: string
  children: React.ReactNode
  className?: string
}

function DraggableItem({ id, children }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: id,
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
      {children}
    </div>
  )
}

function DroppableArea({ id, children, className = '' }: DroppableAreaProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  })

  return (
    <div
      ref={setNodeRef}
      className={`${className} ${isOver ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-300'} 
        border-2 border-dashed rounded-lg transition-colors min-h-32 p-4`}
    >
      {children}
    </div>
  )
}

export function DndContextSection() {
  const [items, setItems] = useState<Record<string, string[]>>({
    container1: ['item-1', 'item-2'],
    container2: ['item-3'],
    container3: [],
  })
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

    // Find which container the active item is in
    const activeContainer = Object.keys(items).find(key =>
      activeId && items[key as keyof typeof items].includes(activeId)
    ) as keyof typeof items

    if (!activeContainer) return

    // If dropping on a container
    if (Object.keys(items).includes(overId)) {
      const overContainer = overId as keyof typeof items

      if (activeContainer !== overContainer) {
        setItems(prev => ({
          ...prev,
          [activeContainer]: prev[activeContainer].filter(id => id !== activeId),
          [overContainer]: [...prev[overContainer], activeId],
        }))
      }
    }
  }

  const getActiveItem = () => {
    if (!activeId) return null
    return (
      <Card className="w-32 opacity-90">
        <div className="text-center p-2">
          <Badge color="info">{activeId}</Badge>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">DndContext</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The DndContext component wraps the part of your application where you want drag and drop to be available.
          It provides context for all draggable and droppable elements within it.
        </p>
      </div>

      {/* Basic DndContext Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Basic Drag and Drop</h3>
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(items).map(([containerId, containerItems]) => (
              <div key={containerId}>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2 capitalize">
                  {containerId.replace('container', 'Container ')}
                </h4>
                <DroppableArea id={containerId} className="min-h-40">
                  <div className="space-y-2">
                    {containerItems.map((itemId) => (
                      <DraggableItem key={itemId} id={itemId}>
                        <Card className="cursor-grab hover:shadow-md transition-shadow">
                          <div className="text-center p-2">
                            <Badge color="info">{itemId}</Badge>
                          </div>
                        </Card>
                      </DraggableItem>
                    ))}
                  </div>
                  {containerItems.length === 0 && (
                    <div className="text-gray-400 text-center py-8">
                      Drop items here
                    </div>
                  )}
                </DroppableArea>
              </div>
            ))}
          </div>
          <DragOverlay>
            {getActiveItem()}
          </DragOverlay>
        </DndContext>
      </div>

      {/* Context Properties */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key DndContext Properties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h4 className="text-lg font-semibold mb-3">Event Handlers</h4>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">onDragStart</code> - Triggered when drag begins</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onDragMove</code> - Triggered during drag</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onDragOver</code> - Triggered when over droppable</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onDragEnd</code> - Triggered when drag ends</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">onDragCancel</code> - Triggered when drag is cancelled</li>
            </ul>
          </Card>
          
          <Card>
            <h4 className="text-lg font-semibold mb-3">Configuration</h4>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">sensors</code> - Input methods (mouse, keyboard, touch)</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">collisionDetection</code> - How collisions are detected</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">modifiers</code> - Modify drag behavior</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">measuring</code> - Control measurement strategy</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">autoScroll</code> - Enable automatic scrolling</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Code Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code Example</h3>
        <Card>
          <pre className="text-sm overflow-x-auto">
            <code>{`import { DndContext } from '@dnd-kit/core'

function App() {
  function handleDragEnd(event) {
    const { active, over } = event
    // Handle the drop logic here
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {/* Your draggable and droppable components */}
    </DndContext>
  )
}`}</code>
          </pre>
        </Card>
      </div>
    </div>
  )
}
