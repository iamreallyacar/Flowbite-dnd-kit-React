import { Link } from 'react-router-dom'
import { Card, Button, Badge, Modal } from 'flowbite-react'
import { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'
import {
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface ProductionJob {
  id: string
  orderId: string
  productName: string
  machine: string
  duration: number
  priority: 'high' | 'medium' | 'low'
  status: 'scheduled' | 'in-progress' | 'completed' | 'delayed'
  startTime: string
  endTime: string
  operator?: string
}

interface Machine {
  id: string
  name: string
  type: string
  jobs: ProductionJob[]
}

interface SortableJobProps {
  job: ProductionJob
  onJobClick: (job: ProductionJob) => void
}

function SortableJob({ job, onJobClick }: SortableJobProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: job.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'info'
      case 'in-progress': return 'warning'
      case 'completed': return 'success'
      case 'delayed': return 'failure'
      default: return 'gray'
    }
  }

  const getJobWidth = (duration: number) => {
    // Each hour = 60px, minimum 120px
    return Math.max(120, duration * 60)
  }

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        width: `${getJobWidth(job.duration)}px`,
      }}
      {...attributes}
      {...listeners}
      className={`
        relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
        rounded-lg p-3 cursor-move hover:shadow-md transition-shadow mr-2 min-h-[80px]
        ${isDragging ? 'shadow-lg' : ''}
      `}
      onClick={() => onJobClick(job)}
    >
      <div className={`absolute top-2 left-2 w-3 h-3 rounded-full ${getPriorityColor(job.priority)}`}></div>
      <div className="ml-5">
        <div className="flex items-center justify-between mb-1">
          <h6 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {job.orderId}
          </h6>
          <Badge color={getStatusColor(job.status)} size="xs">
            {job.status}
          </Badge>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 truncate">
          {job.productName}
        </p>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{job.duration}h</span>
          <span>{job.startTime}</span>
        </div>
      </div>
    </div>
  )
}

interface MachineRowProps {
  machine: Machine
  onJobClick: (job: ProductionJob) => void
}

function MachineRow({ machine, onJobClick }: MachineRowProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1">
          <div className="sticky left-0 bg-white dark:bg-gray-900 p-3">
            <h5 className="font-semibold text-gray-900 dark:text-white">{machine.name}</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">{machine.type}</p>
            <Badge color="info" size="xs">
              {machine.jobs.length} jobs
            </Badge>
          </div>
        </div>
        <div className="col-span-4">
          <SortableContext items={machine.jobs} strategy={horizontalListSortingStrategy}>
            <div className="flex overflow-x-auto pb-2" style={{ minHeight: '100px' }}>
              {machine.jobs.map((job) => (
                <SortableJob key={job.id} job={job} onJobClick={onJobClick} />
              ))}
              <div className="flex-shrink-0 w-40 h-20 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                <span className="text-sm">Drop job here</span>
              </div>
            </div>
          </SortableContext>
        </div>
      </div>
    </div>
  )
}

export function ProductionScheduler() {
  const [machines, setMachines] = useState<Machine[]>([
    {
      id: 'cnc-001',
      name: 'CNC Machine 001',
      type: 'CNC Machining Center',
      jobs: [
        {
          id: 'job-001',
          orderId: 'ORD-12345',
          productName: 'Aluminum Housing',
          machine: 'cnc-001',
          duration: 3,
          priority: 'high',
          status: 'in-progress',
          startTime: '08:00',
          endTime: '11:00',
          operator: 'John Smith'
        },
        {
          id: 'job-002',
          orderId: 'ORD-12346',
          productName: 'Steel Bracket',
          machine: 'cnc-001',
          duration: 2,
          priority: 'medium',
          status: 'scheduled',
          startTime: '11:00',
          endTime: '13:00',
          operator: 'John Smith'
        }
      ]
    },
    {
      id: 'cnc-002',
      name: 'CNC Machine 002',
      type: 'CNC Machining Center',
      jobs: [
        {
          id: 'job-003',
          orderId: 'ORD-12347',
          productName: 'Titanium Component',
          machine: 'cnc-002',
          duration: 4,
          priority: 'high',
          status: 'scheduled',
          startTime: '09:00',
          endTime: '13:00',
          operator: 'Sarah Johnson'
        }
      ]
    },
    {
      id: 'press-001',
      name: 'Hydraulic Press 001',
      type: 'Hydraulic Press',
      jobs: [
        {
          id: 'job-004',
          orderId: 'ORD-12348',
          productName: 'Metal Sheet Forming',
          machine: 'press-001',
          duration: 1.5,
          priority: 'low',
          status: 'completed',
          startTime: '10:00',
          endTime: '11:30',
          operator: 'Mike Wilson'
        },
        {
          id: 'job-005',
          orderId: 'ORD-12349',
          productName: 'Frame Assembly',
          machine: 'press-001',
          duration: 2.5,
          priority: 'medium',
          status: 'scheduled',
          startTime: '13:00',
          endTime: '15:30',
          operator: 'Mike Wilson'
        }
      ]
    },
    {
      id: 'welder-001',
      name: 'Robotic Welder 001',
      type: 'Robotic Welding Station',
      jobs: []
    },
    {
      id: 'assembly-001',
      name: 'Assembly Station 001',
      type: 'Manual Assembly',
      jobs: [
        {
          id: 'job-006',
          orderId: 'ORD-12350',
          productName: 'Final Product Assembly',
          machine: 'assembly-001',
          duration: 6,
          priority: 'high',
          status: 'delayed',
          startTime: '08:00',
          endTime: '14:00',
          operator: 'Lisa Chen'
        }
      ]
    }
  ])

  const [selectedJob, setSelectedJob] = useState<ProductionJob | null>(null)
  const [showJobModal, setShowJobModal] = useState(false)
  const [, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)

    if (!over) return

    const activeJobId = active.id as string
    const overJobId = over.id as string

    // Find source and destination machines
    let sourceMachine: Machine | null = null
    let sourceJobIndex = -1
    let targetMachine: Machine | null = null
    let targetJobIndex = -1

    machines.forEach((machine) => {
      const jobIndex = machine.jobs.findIndex(job => job.id === activeJobId)
      if (jobIndex !== -1) {
        sourceMachine = machine
        sourceJobIndex = jobIndex
      }

      const targetIndex = machine.jobs.findIndex(job => job.id === overJobId)
      if (targetIndex !== -1) {
        targetMachine = machine
        targetJobIndex = targetIndex
      }
    })

    if (sourceMachine && targetMachine && sourceJobIndex !== -1) {
      const activeJob = (sourceMachine as Machine).jobs[sourceJobIndex]

      setMachines(prevMachines => {
        const newMachines = [...prevMachines]

        // Remove job from source machine
        const sourceIndex = newMachines.findIndex(m => m.id === sourceMachine!.id)
        newMachines[sourceIndex] = {
          ...newMachines[sourceIndex],
          jobs: newMachines[sourceIndex].jobs.filter(job => job.id !== activeJobId)
        }

        // Add job to target machine
        const targetIndex = newMachines.findIndex(m => m.id === targetMachine!.id)
        if (sourceMachine!.id === targetMachine!.id) {
          // Same machine - reorder
          const jobs = [...sourceMachine!.jobs]
          const reorderedJobs = arrayMove(jobs, sourceJobIndex, targetJobIndex)
          newMachines[sourceIndex] = {
            ...newMachines[sourceIndex],
            jobs: reorderedJobs
          }
        } else {
          // Different machine - move job
          const updatedJob = { ...activeJob, machine: targetMachine!.id }
          if (targetJobIndex !== -1) {
            newMachines[targetIndex].jobs.splice(targetJobIndex + 1, 0, updatedJob)
          } else {
            newMachines[targetIndex].jobs.push(updatedJob)
          }
        }

        return newMachines
      })
    }
  }

  const handleJobClick = (job: ProductionJob) => {
    setSelectedJob(job)
    setShowJobModal(true)
  }

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
                Production Scheduler
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Drag and drop jobs between machines to optimize production schedule
              </p>
            </div>
            <div className="flex space-x-3">
              <Link to="/dashboard">
                <Button color="blue">
                  Dashboard
                </Button>
              </Link>
              <Link to="/orders">
                <Button color="green">
                  New Order
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Time Header */}
        <Card className="mb-6">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">Machine / Resource</h3>
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-12 gap-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="border-r border-gray-200 dark:border-gray-700 py-2">
                    {String(8 + i).padStart(2, '0')}:00
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Gantt Chart */}
        <Card>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <div className="space-y-2">
              {machines.map((machine) => (
                <MachineRow
                  key={machine.id}
                  machine={machine}
                  onJobClick={handleJobClick}
                />
              ))}
            </div>
          </DndContext>
        </Card>

        {/* Legend */}
        <Card className="mt-6">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legend</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">High Priority</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Medium Priority</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Low Priority</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge color="info" size="xs">Scheduled</Badge>
              <Badge color="warning" size="xs">In Progress</Badge>
              <Badge color="success" size="xs">Completed</Badge>
              <Badge color="failure" size="xs">Delayed</Badge>
            </div>
          </div>
        </Card>        {/* Job Details Modal */}
        <Modal show={showJobModal} onClose={() => setShowJobModal(false)}>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Job Details - {selectedJob?.orderId}
            </h3>
            {selectedJob && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Name</label>
                  <p className="text-gray-900 dark:text-white">{selectedJob.productName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Machine</label>
                  <p className="text-gray-900 dark:text-white">{selectedJob.machine}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Duration</label>
                    <p className="text-gray-900 dark:text-white">{selectedJob.duration} hours</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
                    <Badge color={selectedJob.priority === 'high' ? 'failure' : selectedJob.priority === 'medium' ? 'warning' : 'success'}>
                      {selectedJob.priority}
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Time</label>
                    <p className="text-gray-900 dark:text-white">{selectedJob.startTime}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">End Time</label>
                    <p className="text-gray-900 dark:text-white">{selectedJob.endTime}</p>
                  </div>
                </div>
                {selectedJob.operator && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Operator</label>
                    <p className="text-gray-900 dark:text-white">{selectedJob.operator}</p>
                  </div>
                )}
              </div>
            )}
            <div className="flex justify-end space-x-3 mt-6">
              <Button color="blue" onClick={() => setShowJobModal(false)}>
                Close
              </Button>
              <Button color="gray" onClick={() => setShowJobModal(false)}>
                Edit Job
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
