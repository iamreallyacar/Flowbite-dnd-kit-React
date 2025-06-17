import { Link } from 'react-router-dom'
import { Card, Button, Badge, Avatar, Progress } from 'flowbite-react'
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
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import {
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface Worker {
  id: string
  name: string
  role: string
  skills: string[]
  availability: 'available' | 'busy' | 'offline'
  currentTask?: string
  efficiency: number
  hoursWorked: number
  avatar?: string
}

interface Machine {
  id: string
  name: string
  type: string
  status: 'running' | 'idle' | 'maintenance' | 'error'
  utilization: number
  assignedWorker?: string
  currentJob?: string
  lastMaintenance: string
  nextMaintenance: string
}

interface Material {
  id: string
  name: string
  type: string
  quantity: number
  unit: string
  location: string
  reorderLevel: number
  supplier: string
  status: 'in-stock' | 'low-stock' | 'out-of-stock'
}

interface DraggableWorkerProps {
  worker: Worker
}

function DraggableWorker({ worker }: DraggableWorkerProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: worker.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'success'
      case 'busy': return 'warning'
      case 'offline': return 'failure'
      default: return 'gray'
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
        rounded-lg p-4 cursor-move hover:shadow-md transition-shadow mb-3
        ${isDragging ? 'shadow-lg ring-2 ring-blue-500' : ''}
      `}
    >
      <div className="flex items-center space-x-3">        <Avatar
          img={worker.avatar}
          alt={worker.name}
          statusPosition="top-right"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-900 dark:text-white">{worker.name}</h4>
            <Badge color={getAvailabilityColor(worker.availability)} size="xs">
              {worker.availability}
            </Badge>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{worker.role}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {worker.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} color="gray" size="xs">
                {skill}
              </Badge>
            ))}
          </div>
          {worker.currentTask && (
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
              Current: {worker.currentTask}
            </p>
          )}
        </div>
        <div className="text-right">
          <div className="text-sm font-medium">{worker.efficiency}%</div>
          <div className="text-xs text-gray-500">{worker.hoursWorked}h today</div>
        </div>
      </div>
    </div>
  )
}

export function ResourceManagement() {
  const [workers] = useState<Worker[]>([
    {
      id: 'worker-001',
      name: 'John Smith',
      role: 'CNC Operator',
      skills: ['CNC Machining', 'Programming', 'Quality Control'],
      availability: 'busy',
      currentTask: 'ORD-12345 - Aluminum Housing',
      efficiency: 94,
      hoursWorked: 6.5
    },
    {
      id: 'worker-002',
      name: 'Sarah Johnson',
      role: 'CNC Operator',
      skills: ['CNC Machining', 'Tool Setup', 'Maintenance'],
      availability: 'busy',
      currentTask: 'ORD-12347 - Titanium Component',
      efficiency: 89,
      hoursWorked: 5.0
    },
    {
      id: 'worker-003',
      name: 'Mike Wilson',
      role: 'Press Operator',
      skills: ['Hydraulic Press', 'Metal Forming', 'Safety'],
      availability: 'available',
      efficiency: 92,
      hoursWorked: 4.0
    },
    {
      id: 'worker-004',
      name: 'Lisa Chen',
      role: 'Assembly Technician',
      skills: ['Manual Assembly', 'Quality Control', 'Testing'],
      availability: 'busy',
      currentTask: 'ORD-12350 - Final Assembly',
      efficiency: 87,
      hoursWorked: 7.5
    },
    {
      id: 'worker-005',
      name: 'David Rodriguez',
      role: 'Maintenance Technician',
      skills: ['Electrical', 'Mechanical', 'Troubleshooting'],
      availability: 'offline',
      efficiency: 96,
      hoursWorked: 0
    },
    {
      id: 'worker-006',
      name: 'Emma Thompson',
      role: 'Quality Inspector',
      skills: ['Quality Control', 'Measurements', 'Documentation'],
      availability: 'available',
      efficiency: 98,
      hoursWorked: 3.5
    }
  ])

  const [machines] = useState<Machine[]>([
    {
      id: 'cnc-001',
      name: 'CNC Machine 001',
      type: 'CNC Machining Center',
      status: 'running',
      utilization: 89,
      assignedWorker: 'John Smith',
      currentJob: 'ORD-12345',
      lastMaintenance: '2025-06-15',
      nextMaintenance: '2025-07-15'
    },
    {
      id: 'cnc-002',
      name: 'CNC Machine 002',
      type: 'CNC Machining Center',
      status: 'running',
      utilization: 78,
      assignedWorker: 'Sarah Johnson',
      currentJob: 'ORD-12347',
      lastMaintenance: '2025-06-14',
      nextMaintenance: '2025-07-14'
    },
    {
      id: 'press-001',
      name: 'Hydraulic Press 001',
      type: 'Hydraulic Press',
      status: 'idle',
      utilization: 45,
      lastMaintenance: '2025-06-16',
      nextMaintenance: '2025-07-16'
    },
    {
      id: 'welder-001',
      name: 'Robotic Welder 001',
      type: 'Robotic Welding Station',
      status: 'maintenance',
      utilization: 0,
      lastMaintenance: '2025-06-17',
      nextMaintenance: '2025-06-18'
    },
    {
      id: 'assembly-001',
      name: 'Assembly Station 001',
      type: 'Manual Assembly',
      status: 'error',
      utilization: 0,
      lastMaintenance: '2025-06-10',
      nextMaintenance: '2025-06-20'
    }
  ])

  const [materials] = useState<Material[]>([
    {
      id: 'mat-001',
      name: 'Aluminum 6061',
      type: 'Raw Material',
      quantity: 500,
      unit: 'kg',
      location: 'Warehouse A-1',
      reorderLevel: 100,
      supplier: 'MetalCorp Inc.',
      status: 'in-stock'
    },
    {
      id: 'mat-002',
      name: 'Steel Plate 10mm',
      type: 'Raw Material',
      quantity: 45,
      unit: 'sheets',
      location: 'Warehouse A-2',
      reorderLevel: 50,
      supplier: 'SteelWorks Ltd.',
      status: 'low-stock'
    },
    {
      id: 'mat-003',
      name: 'Titanium Grade 2',
      type: 'Raw Material',
      quantity: 25,
      unit: 'kg',
      location: 'Warehouse B-1',
      reorderLevel: 20,
      supplier: 'TitanSupply Co.',
      status: 'in-stock'
    },
    {
      id: 'mat-004',
      name: 'Cutting Oil',
      type: 'Consumable',
      quantity: 5,
      unit: 'liters',
      location: 'Storage C-1',
      reorderLevel: 20,
      supplier: 'FluidTech Solutions',
      status: 'out-of-stock'
    },
    {
      id: 'mat-005',
      name: 'End Mills 10mm',
      type: 'Tooling',
      quantity: 15,
      unit: 'pieces',
      location: 'Tool Crib',
      reorderLevel: 10,
      supplier: 'ToolMaster Inc.',
      status: 'in-stock'
    }
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return

    // Handle worker assignment to machines
    console.log(`Worker ${active.id} assigned to ${over.id}`)
    // In a real app, you would update the state here
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'success'
      case 'idle': return 'warning'
      case 'maintenance': return 'info'
      case 'error': return 'failure'
      default: return 'gray'
    }
  }

  const getMaterialStatusColor = (status: string) => {
    switch (status) {
      case 'in-stock': return 'success'
      case 'low-stock': return 'warning'
      case 'out-of-stock': return 'failure'
      default: return 'gray'
    }
  }

  const availableWorkers = workers.filter(w => w.availability === 'available')
  const busyWorkers = workers.filter(w => w.availability === 'busy')
  const offlineWorkers = workers.filter(w => w.availability === 'offline')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Main
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Resource Management
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage workers, machines, and materials efficiently
              </p>
            </div>
            <div className="flex space-x-3">
              <Link to="/dashboard">
                <Button color="blue">
                  Dashboard
                </Button>
              </Link>
              <Link to="/scheduler">
                <Button color="green">
                  Scheduler
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Workers Section */}
            <div className="lg:col-span-1">
              <Card>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Workers ({workers.length})
                </h2>
                
                {/* Available Workers */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-green-600 mb-3">
                    Available ({availableWorkers.length})
                  </h3>
                  <SortableContext items={availableWorkers} strategy={verticalListSortingStrategy}>
                    <div>
                      {availableWorkers.map((worker) => (
                        <DraggableWorker key={worker.id} worker={worker} />
                      ))}
                    </div>
                  </SortableContext>
                </div>

                {/* Busy Workers */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-yellow-600 mb-3">
                    Busy ({busyWorkers.length})
                  </h3>
                  <div>
                    {busyWorkers.map((worker) => (
                      <DraggableWorker key={worker.id} worker={worker} />
                    ))}
                  </div>
                </div>

                {/* Offline Workers */}
                <div>
                  <h3 className="text-lg font-medium text-red-600 mb-3">
                    Offline ({offlineWorkers.length})
                  </h3>
                  <div>
                    {offlineWorkers.map((worker) => (
                      <DraggableWorker key={worker.id} worker={worker} />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Machines Section */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Machines ({machines.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {machines.map((machine) => (
                    <div
                      key={machine.id}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{machine.name}</h4>
                        <Badge color={getStatusColor(machine.status)}>
                          {machine.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{machine.type}</p>
                      
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Utilization</span>
                            <span className="font-medium">{machine.utilization}%</span>
                          </div>
                          <Progress progress={machine.utilization} color={machine.utilization > 70 ? 'green' : 'yellow'} />
                        </div>
                        
                        {machine.assignedWorker && (
                          <p className="text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Operator:</span>
                            <span className="font-medium ml-1">{machine.assignedWorker}</span>
                          </p>
                        )}
                        
                        {machine.currentJob && (
                          <p className="text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Current Job:</span>
                            <span className="font-medium ml-1">{machine.currentJob}</span>
                          </p>
                        )}
                        
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>Last Maintenance: {machine.lastMaintenance}</p>
                          <p>Next Maintenance: {machine.nextMaintenance}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </DndContext>

        {/* Materials Section */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Materials & Inventory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((material) => (
              <div
                key={material.id}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{material.name}</h4>
                  <Badge color={getMaterialStatusColor(material.status)} size="xs">
                    {material.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{material.type}</p>
                
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span className="font-medium">{material.quantity} {material.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-medium">{material.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reorder Level:</span>
                    <span className="font-medium">{material.reorderLevel} {material.unit}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Supplier: {material.supplier}
                  </div>
                </div>

                {material.quantity <= material.reorderLevel && (
                  <div className="mt-3">
                    <Button size="xs" color="warning" className="w-full">
                      Reorder Required
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Resource Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Card>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{availableWorkers.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Available Workers</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {machines.filter(m => m.status === 'running').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Running Machines</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {materials.filter(m => m.status === 'out-of-stock').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Out of Stock</div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {materials.filter(m => m.status === 'low-stock').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Low Stock Items</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
