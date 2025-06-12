import React, { useState } from 'react'
import { Card, Badge, Button, ToggleSwitch } from 'flowbite-react'
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent, Modifier } from '@dnd-kit/core'
import {
  restrictToVerticalAxis,
  restrictToHorizontalAxis,
  restrictToWindowEdges,
  restrictToParentElement,
  snapCenterToCursor,
} from '@dnd-kit/modifiers'

interface ModifierItem {
  id: string
  content: string
}

function DraggableCard({ id, content }: ModifierItem) {
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
      <Card className="hover:shadow-md transition-shadow">
        <div className="text-center p-3">
          <Badge color="purple">{content}</Badge>
        </div>
      </Card>
    </div>
  )
}

function DropZone({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id })

  return (
    <div className="space-y-2">
      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h4>
      <div
        ref={setNodeRef}
        className={`${isOver ? 'bg-purple-50 border-purple-300' : 'bg-gray-50 border-gray-300'} 
          border-2 border-dashed rounded-lg transition-colors min-h-32 p-4`}
      >
        {children}
      </div>
    </div>
  )
}

export function ModifiersSection() {
  const [items, setItems] = useState<ModifierItem[]>([
    { id: 'item-1', content: 'Horizontal Only' },
    { id: 'item-2', content: 'Vertical Only' },
    { id: 'item-3', content: 'Snap to Cursor' },
    { id: 'item-4', content: 'Window Bounds' },
  ])
  const [droppedItems, setDroppedItems] = useState<ModifierItem[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  // Modifier configuration
  const [horizontalOnly, setHorizontalOnly] = useState(false)
  const [verticalOnly, setVerticalOnly] = useState(false)
  const [snapToCursor, setSnapToCursor] = useState(false)
  const [windowBounds, setWindowBounds] = useState(false)
  const [parentBounds, setParentBounds] = useState(false)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  // Build modifiers array based on settings
  const modifiers: Modifier[] = []
  if (horizontalOnly) modifiers.push(restrictToHorizontalAxis)
  if (verticalOnly) modifiers.push(restrictToVerticalAxis)
  if (snapToCursor) modifiers.push(snapCenterToCursor)
  if (windowBounds) modifiers.push(restrictToWindowEdges)
  if (parentBounds) modifiers.push(restrictToParentElement)

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)

    if (over && over.id === 'drop-zone') {
      const activeId = active.id as string
      const draggedItem = items.find(item => item.id === activeId)
      
      if (draggedItem && !droppedItems.find(item => item.id === activeId)) {
        setDroppedItems(prev => [...prev, draggedItem])
        setItems(prev => prev.filter(item => item.id !== activeId))
      }
    }
  }

  const resetItems = () => {
    setItems([
      { id: 'item-1', content: 'Horizontal Only' },
      { id: 'item-2', content: 'Vertical Only' },
      { id: 'item-3', content: 'Snap to Cursor' },
      { id: 'item-4', content: 'Window Bounds' },
    ])
    setDroppedItems([])
  }

  const resetModifiers = () => {
    setHorizontalOnly(false)
    setVerticalOnly(false)
    setSnapToCursor(false)
    setWindowBounds(false)
    setParentBounds(false)
  }

  const getActiveItem = () => {
    if (!activeId) return null
    const item = [...items, ...droppedItems].find(item => item.id === activeId)
    if (!item) return null
    
    return (
      <Card className="w-48 opacity-90">
        <div className="text-center p-3">
          <Badge color="purple">{item.content}</Badge>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modifiers</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Modifiers alter the behavior of draggable elements during drag operations.
          They can restrict movement, snap to positions, or constrain to boundaries.
        </p>
      </div>

      {/* Modifier Configuration */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Modifier Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Card>
            <h4 className="text-lg font-semibold mb-3">Movement Restrictions</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Horizontal Only</span>
                <ToggleSwitch checked={horizontalOnly} onChange={setHorizontalOnly} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Vertical Only</span>
                <ToggleSwitch checked={verticalOnly} onChange={setVerticalOnly} />
              </div>
            </div>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">Boundary Constraints</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Window Bounds</span>
                <ToggleSwitch checked={windowBounds} onChange={setWindowBounds} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Parent Bounds</span>
                <ToggleSwitch checked={parentBounds} onChange={setParentBounds} />
              </div>
            </div>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">Positioning</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Snap to Cursor</span>
                <ToggleSwitch checked={snapToCursor} onChange={setSnapToCursor} />
              </div>
              <div className="mt-3 space-y-2">
                <Button onClick={resetModifiers} size="sm" color="gray" className="w-full">
                  Reset Modifiers
                </Button>
                <Button onClick={resetItems} size="sm" color="purple" className="w-full">
                  Reset Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Active Modifiers Display */}
        {modifiers.length > 0 && (
          <Card className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Active Modifiers</h4>
            <div className="flex flex-wrap gap-2">
              {horizontalOnly && <Badge color="info">Horizontal Only</Badge>}
              {verticalOnly && <Badge color="info">Vertical Only</Badge>}
              {snapToCursor && <Badge color="success">Snap to Cursor</Badge>}
              {windowBounds && <Badge color="warning">Window Bounds</Badge>}
              {parentBounds && <Badge color="purple">Parent Bounds</Badge>}
            </div>
          </Card>
        )}
      </div>

      {/* Interactive Demo */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interactive Demo</h3>
        <div className="mb-4 p-4 bg-purple-50 rounded-lg">
          <h4 className="font-medium text-purple-900 mb-2">Try different modifier combinations:</h4>
          <ul className="text-sm text-purple-800 space-y-1">
            <li><strong>Horizontal/Vertical Only:</strong> Movement restricted to one axis</li>
            <li><strong>Snap to Cursor:</strong> Element center follows cursor exactly</li>
            <li><strong>Window Bounds:</strong> Element cannot be dragged outside viewport</li>
            <li><strong>Parent Bounds:</strong> Element cannot be dragged outside parent container</li>
          </ul>
        </div>
        
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50"
          style={{ minHeight: '400px' }}
        >
          <DndContext 
            sensors={sensors} 
            modifiers={modifiers}
            onDragStart={handleDragStart} 
            onDragEnd={handleDragEnd}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
              {/* Source Items */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Draggable Items ({items.length})
                </h4>
                <div className="space-y-3">
                  {items.map((item) => (
                    <DraggableCard key={item.id} {...item} />
                  ))}
                  {items.length === 0 && (
                    <div className="text-gray-400 text-center py-8">
                      All items moved to drop zone
                    </div>
                  )}
                </div>
              </div>

              {/* Drop Zone */}
              <DropZone id="drop-zone" title={`Drop Zone (${droppedItems.length} items)`}>
                <div className="space-y-2">
                  {droppedItems.map((item) => (
                    <Card key={item.id} className="bg-purple-50">
                      <div className="text-center p-3">
                        <Badge color="success">{item.content}</Badge>
                      </div>
                    </Card>
                  ))}
                </div>
                {droppedItems.length === 0 && (
                  <div className="text-gray-400 text-center py-8">
                    Drag items here to test modifiers
                  </div>
                )}
              </DropZone>
            </div>
            <DragOverlay>
              {getActiveItem()}
            </DragOverlay>
          </DndContext>
        </div>
      </div>

      {/* Available Modifiers */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Available Modifiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h4 className="text-lg font-semibold mb-3">Movement Modifiers</h4>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">restrictToHorizontalAxis</code> - Horizontal movement only</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">restrictToVerticalAxis</code> - Vertical movement only</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">restrictToFirstScrollableAncestor</code> - Bound to scrollable parent</li>
            </ul>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">Boundary Modifiers</h4>
            <ul className="space-y-2 text-sm">
              <li><code className="bg-gray-100 px-2 py-1 rounded">restrictToWindowEdges</code> - Stay within viewport</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">restrictToParentElement</code> - Stay within parent</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">createSnapModifier</code> - Custom snap positions</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Custom Modifier Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Custom Modifier Example</h3>
        <Card>
          <h4 className="text-lg font-semibold mb-3">Grid Snap Modifier</h4>
          <pre className="text-sm overflow-x-auto bg-gray-100 p-4 rounded">
            <code>{`const snapToGrid = createSnapModifier(50) // 50px grid

// Custom modifier function
const customModifier = ({ transform }) => {
  return {
    ...transform,
    x: Math.round(transform.x / 50) * 50,
    y: Math.round(transform.y / 50) * 50,
  }
}

// Usage
<DndContext modifiers={[snapToGrid, restrictToWindowEdges]}>
  {/* Your components */}
</DndContext>`}</code>
          </pre>
        </Card>
      </div>

      {/* Code Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code Example</h3>
        <Card>
          <pre className="text-sm overflow-x-auto">
            <code>{`import {
  DndContext,
  restrictToVerticalAxis,
  restrictToWindowEdges,
  snapCenterToCursor,
} from '@dnd-kit/core'

function MyComponent() {
  const modifiers = [
    restrictToVerticalAxis,
    restrictToWindowEdges,
    snapCenterToCursor,
  ]

  return (
    <DndContext modifiers={modifiers}>
      {/* Your draggable components */}
    </DndContext>
  )
}`}</code>
          </pre>
        </Card>
      </div>
    </div>
  )
}
