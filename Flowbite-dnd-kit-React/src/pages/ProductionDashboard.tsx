import { Link } from 'react-router-dom'
import { Badge, Progress, Button, Alert } from 'flowbite-react'
import { useState, useEffect } from 'react'
import { 
  ShowcaseCard,
  ShowcasePageTitle, 
  ShowcaseText, 
  ShowcaseHeading,
  ShowcaseSubheading,
  ShowcaseMetricValue, 
  ShowcaseMetricLabel,
  ShowcaseGreenText,
  ShowcaseBlueText,
  ShowcaseYellowText
} from '../components'

interface ProductionMetrics {
  efficiency: number
  oee: number
  downtime: number
  throughput: number
  quality: number
  activeOrders: number
  completedToday: number
  pendingOrders: number
}

interface MachineStatus {
  id: string
  name: string
  status: 'running' | 'idle' | 'maintenance' | 'error'
  utilization: number
  currentJob?: string
  lastMaintenance: string
}

export function ProductionDashboard() {
  const [metrics, setMetrics] = useState<ProductionMetrics>({
    efficiency: 87,
    oee: 82,
    downtime: 5.2,
    throughput: 145,
    quality: 94.5,
    activeOrders: 23,
    completedToday: 15,
    pendingOrders: 47
  })

  const [machines] = useState<MachineStatus[]>([
    {
      id: 'cnc-001',
      name: 'CNC Machine 001',
      status: 'running',
      utilization: 89,
      currentJob: 'Order #12345 - Part A',
      lastMaintenance: '2025-06-15'
    },
    {
      id: 'cnc-002',
      name: 'CNC Machine 002',
      status: 'idle',
      utilization: 45,
      lastMaintenance: '2025-06-14'
    },
    {
      id: 'press-001',
      name: 'Hydraulic Press 001',
      status: 'running',
      utilization: 78,
      currentJob: 'Order #12347 - Part C',
      lastMaintenance: '2025-06-16'
    },
    {
      id: 'welder-001',
      name: 'Robotic Welder 001',
      status: 'maintenance',
      utilization: 0,
      lastMaintenance: '2025-06-17'
    },
    {
      id: 'assembly-001',
      name: 'Assembly Station 001',
      status: 'error',
      utilization: 0,
      lastMaintenance: '2025-06-10'
    }
  ])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        efficiency: Math.max(70, Math.min(95, prev.efficiency + (Math.random() - 0.5) * 2)),
        throughput: Math.max(100, Math.min(200, prev.throughput + (Math.random() - 0.5) * 10))
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'success'
      case 'idle': return 'warning'
      case 'maintenance': return 'info'
      case 'error': return 'failure'
      default: return 'gray'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'running': return 'Running'
      case 'idle': return 'Idle'
      case 'maintenance': return 'Maintenance'
      case 'error': return 'Error'
      default: return 'Unknown'
    }
  }
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="text-blue-400 hover:text-blue-300 underline mb-4 inline-block">
            ← Back to Main
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <ShowcasePageTitle>
                Production Dashboard
              </ShowcasePageTitle>
              <ShowcaseText>
                Real-time production monitoring and analytics
              </ShowcaseText>
            </div>
            <div className="flex space-x-3">
              <Link to="/scheduler">
                <Button color="blue">
                  Open Scheduler
                </Button>
              </Link>
              <Link to="/orders">
                <Button color="gray">
                  View Orders
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="mb-6">
          <Alert color="warning" className="mb-3">
            <span className="font-medium">Attention:</span> Assembly Station 001 requires immediate maintenance. Production efficiency may be impacted.
          </Alert>
        </div>        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ShowcaseCard>
            <div className="flex items-center justify-between">
              <div>
                <ShowcaseMetricLabel>Overall Efficiency</ShowcaseMetricLabel>
                <ShowcaseMetricValue>{metrics.efficiency.toFixed(1)}%</ShowcaseMetricValue>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <Progress progress={metrics.efficiency} color="blue" className="mt-3" />
          </ShowcaseCard>

          <ShowcaseCard>
            <div className="flex items-center justify-between">
              <div>
                <ShowcaseMetricLabel>OEE</ShowcaseMetricLabel>
                <ShowcaseMetricValue>{metrics.oee}%</ShowcaseMetricValue>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
            </div>
            <Progress progress={metrics.oee} color="green" className="mt-3" />
          </ShowcaseCard>

          <ShowcaseCard>
            <div className="flex items-center justify-between">
              <div>
                <ShowcaseMetricLabel>Throughput</ShowcaseMetricLabel>
                <ShowcaseMetricValue>{metrics.throughput}</ShowcaseMetricValue>
                <p className="text-xs text-gray-500">units/hour</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
            </div>
          </ShowcaseCard>

          <ShowcaseCard>
            <div className="flex items-center justify-between">
              <div>
                <ShowcaseMetricLabel>Quality Rate</ShowcaseMetricLabel>
                <ShowcaseMetricValue>{metrics.quality}%</ShowcaseMetricValue>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <Progress progress={metrics.quality} color="yellow" className="mt-3" />
          </ShowcaseCard>
        </div>        {/* Production Orders Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <ShowcaseCard>
            <ShowcaseSubheading>
              Active Orders
            </ShowcaseSubheading>
            <div className="text-center">
              <ShowcaseBlueText className="text-3xl font-bold mb-2">{metrics.activeOrders}</ShowcaseBlueText>
              <ShowcaseText className="mb-0">Currently in progress</ShowcaseText>
            </div>
          </ShowcaseCard>

          <ShowcaseCard>
            <ShowcaseSubheading>
              Completed Today
            </ShowcaseSubheading>
            <div className="text-center">
              <ShowcaseGreenText className="text-3xl font-bold mb-2">{metrics.completedToday}</ShowcaseGreenText>
              <ShowcaseText className="mb-0">Orders finished</ShowcaseText>
            </div>
          </ShowcaseCard>

          <ShowcaseCard>
            <ShowcaseSubheading>
              Pending Orders
            </ShowcaseSubheading>
            <div className="text-center">
              <ShowcaseYellowText className="text-3xl font-bold mb-2">{metrics.pendingOrders}</ShowcaseYellowText>
              <ShowcaseText className="mb-0">Awaiting schedule</ShowcaseText>
            </div>
          </ShowcaseCard>
        </div>        {/* Machine Status */}
        <ShowcaseCard className="mb-8">
          <ShowcaseHeading>
            Machine Status
          </ShowcaseHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {machines.map((machine) => (
              <div key={machine.id} className="p-4 border border-gray-600 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h6 className="font-semibold text-white">{machine.name}</h6>
                  <Badge color={getStatusColor(machine.status)}>
                    {getStatusText(machine.status)}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <ShowcaseMetricLabel className="mb-0">Utilization</ShowcaseMetricLabel>
                      <span className="font-medium text-white">{machine.utilization}%</span>
                    </div>
                    <Progress progress={machine.utilization} color={machine.utilization > 70 ? 'green' : 'yellow'} />
                  </div>
                  
                  {machine.currentJob && (
                    <ShowcaseText className="mb-2">
                      <strong>Current Job:</strong> {machine.currentJob}
                    </ShowcaseText>
                  )}
                  
                  <p className="text-xs text-gray-500">
                    Last Maintenance: {machine.lastMaintenance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ShowcaseCard>        {/* Quick Actions */}
        <ShowcaseCard>
          <ShowcaseHeading>
            Quick Actions
          </ShowcaseHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/orders">
              <Button color="blue" className="w-full">
                New Order
              </Button>
            </Link>
            <Link to="/scheduler">
              <Button color="green" className="w-full">
                Schedule Job
              </Button>
            </Link>
            <Link to="/resources">
              <Button color="purple" className="w-full">
                Manage Resources
              </Button>
            </Link>
            <Button color="gray" className="w-full">
              Generate Report
            </Button>
          </div>
        </ShowcaseCard>
      </div>
    </div>
  )
}
