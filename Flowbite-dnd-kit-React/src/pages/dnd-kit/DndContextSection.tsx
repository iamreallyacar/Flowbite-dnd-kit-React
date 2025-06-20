import React, { useState } from 'react'
import { Card, Badge } from 'flowbite-react'
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { 
  ShowcaseCard, 
  ShowcaseSubheading, 
  ShowcaseText, 
  ShowcaseSubsection
} from '../../components/ShowcaseTheme'

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
      className={`cursor-grab ${isDragging ? 'opacity-30' : ''}`}
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
      className={`${className} ${isOver ? 'bg-blue-900 border-blue-400' : 'bg-gray-700 border-gray-500'} 
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
  }  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)

    console.log('Drag ended:', { activeId: active.id, overId: over?.id || 'no drop target' })

    // If no valid drop target, do nothing (item stays in original position)
    if (!over) {
      console.log('No drop target - item should stay in original position')
      return
    }

    const activeId = active.id as string
    const overId = over.id as string

    // Find which container the active item is in
    const activeContainer = Object.keys(items).find(key =>
      activeId && items[key as keyof typeof items].includes(activeId)
    ) as keyof typeof items

    console.log('Active container:', activeContainer)

    if (!activeContainer) return

    // Determine the target container
    let overContainer: keyof typeof items | undefined

    // Check if dropping directly on a container
    if (Object.keys(items).includes(overId)) {
      overContainer = overId as keyof typeof items
      console.log('Dropping directly on container:', overContainer)
    } else {
      // Check if dropping on an item within a container
      overContainer = Object.keys(items).find(key =>
        items[key as keyof typeof items].includes(overId)
      ) as keyof typeof items
      console.log('Dropping on item within container:', overContainer)
    }

    if (!overContainer) {
      console.log('Could not determine target container')
      return
    }

    // Only move if dropping on a different container
    if (activeContainer !== overContainer) {
      console.log('Moving item from', activeContainer, 'to', overContainer)
      setItems(prev => ({
        ...prev,
        [activeContainer]: prev[activeContainer].filter(id => id !== activeId),
        [overContainer]: [...prev[overContainer], activeId],      }))
    } else {
      console.log('Same container - no move needed')
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
    <ShowcaseCard>
      <div>
        <ShowcaseSubheading>DndContext</ShowcaseSubheading>
        <ShowcaseText>
          The DndContext component wraps the part of your application where you want drag and drop to be available.
          It provides context for all draggable and droppable elements within it.
        </ShowcaseText>
      </div>      {/* Basic DndContext Example */}
      <div>
        <ShowcaseSubsection>Basic Drag and Drop</ShowcaseSubsection>
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(items).map(([containerId, containerItems]) => (
              <div key={containerId}>
                <h4 className="text-lg font-medium text-white mb-2 capitalize">
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
                  </div>                  {containerItems.length === 0 && (
                    <div className="text-gray-300 text-center py-8">
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
      </div>      {/* Context Properties */}
      <div>
        <ShowcaseSubsection>Key DndContext Properties</ShowcaseSubsection>        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border-gray-700">            <h4 className="text-lg font-semibold mb-3 text-white">Event Handlers</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">onDragStart</code> - Triggered when drag begins</li>
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">onDragMove</code> - Triggered during drag</li>
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">onDragOver</code> - Triggered when over droppable</li>
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">onDragEnd</code> - Triggered when drag ends</li>
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">onDragCancel</code> - Triggered when drag is cancelled</li>
            </ul>
          </Card>          
          <Card className="bg-gray-800 border-gray-700">
            <h4 className="text-lg font-semibold mb-3 text-white">Configuration</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">sensors</code> - Input methods (mouse, keyboard, touch)</li>
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">collisionDetection</code> - How collisions are detected</li>
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">modifiers</code> - Modify drag behavior</li>
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">measuring</code> - Control measurement strategy</li>
              <li><code className="bg-gray-700 text-gray-200 px-2 py-1 rounded">autoScroll</code> - Enable automatic scrolling</li>
            </ul>
          </Card>
        </div>
      </div>      {/* Code Example */}
      <div>
        <ShowcaseSubsection>Code Example</ShowcaseSubsection>
        <Card className="bg-gray-800 border-gray-700">
          <pre className="text-sm overflow-x-auto text-gray-200">
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
          </pre>        </Card>
      </div>
    </ShowcaseCard>
  )
}
