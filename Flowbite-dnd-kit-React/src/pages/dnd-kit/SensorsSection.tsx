import React, { useState } from 'react'
import { Card, Badge, Button, ToggleSwitch } from 'flowbite-react'
import {
  DndContext,
  DragOverlay,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  KeyboardSensor,
  TouchSensor,
  MouseSensor,
} from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent, KeyboardCoordinateGetter } from '@dnd-kit/core'

// Custom keyboard coordinate getter for drag and drop
const keyboardCoordinates: KeyboardCoordinateGetter = (event, { context: { active, collisionRect } }) => {
  if (!active || !collisionRect) {
    return
  }

  const { code } = event

  if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(code)) {
    event.preventDefault()

    const movements = {
      ArrowDown: [0, 25],
      ArrowUp: [0, -25], 
      ArrowLeft: [-25, 0],
      ArrowRight: [25, 0],
    }

    const movement = movements[code as keyof typeof movements]

    if (movement) {
      return {
        x: collisionRect.left + movement[0],
        y: collisionRect.top + movement[1],
      }
    }
  }

  return undefined
}

interface SensorItem {
  id: string
  content: string
}

function DraggableCard({ id, content }: SensorItem) {
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
      tabIndex={0}
      role="button"
      aria-label={`Draggable item: ${content}`}
      className={`cursor-grab ${isDragging ? 'opacity-50' : ''} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg`}
    >
      <Card className="hover:shadow-md transition-shadow">
        <div className="text-center p-2">
          <Badge color="indigo">{content}</Badge>
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
        className={`${isOver ? 'bg-indigo-50 border-indigo-300' : 'bg-gray-50 border-gray-300'} 
          border-2 border-dashed rounded-lg transition-colors min-h-32 p-4`}
      >
        {children}
      </div>
    </div>
  )
}

export function SensorsSection() {
  const [items, setItems] = useState<SensorItem[]>([
    { id: 'item-1', content: 'Drag me with mouse' },
    { id: 'item-2', content: 'Touch and drag on mobile' },
    { id: 'item-3', content: 'Use keyboard (Space + arrows)' },
  ])
  const [droppedItems, setDroppedItems] = useState<SensorItem[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  // Sensor configuration options
  const [mouseEnabled, setMouseEnabled] = useState(true)
  const [touchEnabled, setTouchEnabled] = useState(true)
  const [keyboardEnabled, setKeyboardEnabled] = useState(true)
  const [activationDistance, setActivationDistance] = useState(0)
  const [activationDelay, setActivationDelay] = useState(0)  // Configure sensors based on settings
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: activationDistance,
      delay: activationDelay,
    },
  })
  
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: activationDistance,
      delay: activationDelay,
    },
  })
  
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: keyboardCoordinates,
  })
  
  // Build sensor list based on enabled settings
  const enabledSensors = []
  if (mouseEnabled) enabledSensors.push(mouseSensor)
  if (touchEnabled) enabledSensors.push(touchSensor)
  if (keyboardEnabled) enabledSensors.push(keyboardSensor)
  
  // Always provide at least one sensor to prevent issues
  const sensors = enabledSensors.length > 0 ? useSensors(...enabledSensors) : useSensors(mouseSensor)

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
      { id: 'item-1', content: 'Drag me with mouse' },
      { id: 'item-2', content: 'Touch and drag on mobile' },
      { id: 'item-3', content: 'Use keyboard (Space + arrows)' },
    ])
    setDroppedItems([])
  }

  const getActiveItem = () => {
    if (!activeId) return null
    const item = [...items, ...droppedItems].find(item => item.id === activeId)
    if (!item) return null
    
    return (
      <Card className="w-48 opacity-90">
        <div className="text-center p-2">
          <Badge color="indigo">{item.content}</Badge>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sensors</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Sensors detect and handle different input methods for drag and drop interactions.
          Configure mouse, touch, and keyboard sensors with various activation constraints.
        </p>
      </div>

      {/* Sensor Configuration */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sensor Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <h4 className="text-lg font-semibold mb-3">Enable Sensors</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Mouse</span>
                <ToggleSwitch checked={mouseEnabled} onChange={setMouseEnabled} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Touch</span>
                <ToggleSwitch checked={touchEnabled} onChange={setTouchEnabled} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Keyboard</span>
                <ToggleSwitch checked={keyboardEnabled} onChange={setKeyboardEnabled} />
              </div>
            </div>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">Activation Distance</h4>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="20"
                value={activationDistance}
                onChange={(e) => setActivationDistance(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-sm text-gray-600">
                {activationDistance}px minimum drag distance
              </div>
            </div>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">Activation Delay</h4>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="1000"
                step="100"
                value={activationDelay}
                onChange={(e) => setActivationDelay(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-sm text-gray-600">
                {activationDelay}ms delay before drag starts
              </div>
            </div>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">Reset</h4>
            <Button onClick={resetItems} size="sm" color="gray" className="w-full">
              Reset Demo
            </Button>
          </Card>
        </div>
      </div>

      {/* Interactive Demo */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interactive Demo</h3>        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">How to test sensors:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li><strong>Mouse:</strong> Click and drag items</li>
            <li><strong>Touch:</strong> Tap and drag on mobile devices</li>
            <li><strong>Keyboard:</strong> Tab to focus item, press Space, then use arrow keys to move</li>
          </ul>
        </div>
          {enabledSensors.length === 0 ? (
          <div className="p-8 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
            <h4 className="text-lg font-medium text-yellow-800 mb-2">No Sensors Enabled</h4>
            <p className="text-yellow-600">Please enable at least one sensor (Mouse, Touch, or Keyboard) to test drag and drop functionality.</p>
          </div>
        ) : (
          <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Source Items */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Available Items ({items.length})
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
                  <Card key={item.id} className="bg-indigo-50">
                    <div className="text-center p-2">
                      <Badge color="success">{item.content}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
              {droppedItems.length === 0 && (
                <div className="text-gray-400 text-center py-8">
                  Use different input methods to drag items here
                </div>
              )}
            </DropZone>          </div>
          <DragOverlay>
            {getActiveItem()}
          </DragOverlay>
        </DndContext>
        )}
      </div>

      {/* Sensor Types */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Available Sensors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h4 className="text-lg font-semibold mb-3">PointerSensor</h4>
            <p className="text-sm text-gray-600 mb-3">
              Handles both mouse and touch events. Most commonly used sensor.
            </p>
            <ul className="text-xs space-y-1">
              <li>• Unified mouse and touch handling</li>
              <li>• Activation constraints support</li>
              <li>• Automatic event prevention</li>
            </ul>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">KeyboardSensor</h4>
            <p className="text-sm text-gray-600 mb-3">
              Enables keyboard navigation for accessibility.
            </p>
            <ul className="text-xs space-y-1">
              <li>• Space to activate drag</li>
              <li>• Arrow keys for movement</li>
              <li>• Custom coordinate getters</li>
            </ul>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">MouseSensor / TouchSensor</h4>
            <p className="text-sm text-gray-600 mb-3">
              Separate sensors for specific input types.
            </p>
            <ul className="text-xs space-y-1">
              <li>• Input-specific handling</li>
              <li>• Independent configuration</li>
              <li>• Fine-grained control</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Activation Constraints */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Activation Constraints</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h4 className="text-lg font-semibold mb-3">Distance Constraint</h4>
            <p className="text-sm text-gray-600 mb-3">
              Minimum distance before drag activates. Prevents accidental drags.
            </p>
            <div className="bg-gray-100 p-3 rounded text-xs">
              <code>{`useSensor(PointerSensor, {
  activationConstraint: {
    distance: 8, // pixels
  },
})`}</code>
            </div>
          </Card>

          <Card>
            <h4 className="text-lg font-semibold mb-3">Delay Constraint</h4>
            <p className="text-sm text-gray-600 mb-3">
              Time delay before drag activates. Useful for touch interfaces.
            </p>
            <div className="bg-gray-100 p-3 rounded text-xs">
              <code>{`useSensor(TouchSensor, {
  activationConstraint: {
    delay: 250, // milliseconds
    tolerance: 5, // pixels
  },
})`}</code>
            </div>
          </Card>
        </div>
      </div>

      {/* Code Example */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code Example</h3>
        <Card>
          <pre className="text-sm overflow-x-auto">
            <code>{`import {
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'

function MyComponent() {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <DndContext sensors={sensors}>
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
