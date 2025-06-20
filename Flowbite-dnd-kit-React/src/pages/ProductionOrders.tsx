import { Link } from 'react-router-dom'
import { Button, Badge, Modal, TextInput, Label, Select, Textarea } from 'flowbite-react'
import { useState } from 'react'
import { 
  ShowcaseCard,
  ShowcasePageTitle, 
  ShowcaseText, 
  ShowcaseMetricValue, 
  ShowcaseMetricLabel
} from '../components'

interface ProductionOrder {
  id: string
  orderNumber: string
  customerName: string
  productName: string
  quantity: number
  dueDate: string
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
  estimatedDuration: number
  assignedMachine?: string
  notes?: string
  createdDate: string
  progress: number
}

export function ProductionOrders() {
  const [orders, setOrders] = useState<ProductionOrder[]>([
    {
      id: '1',
      orderNumber: 'ORD-12345',
      customerName: 'Acme Corporation',
      productName: 'Aluminum Housing',
      quantity: 50,
      dueDate: '2025-06-25',
      priority: 'high',
      status: 'in-progress',
      estimatedDuration: 8,
      assignedMachine: 'CNC Machine 001',
      notes: 'Special finish requirements',
      createdDate: '2025-06-15',
      progress: 65
    },
    {
      id: '2',
      orderNumber: 'ORD-12346',
      customerName: 'TechFlow Industries',
      productName: 'Steel Bracket',
      quantity: 100,
      dueDate: '2025-06-22',
      priority: 'medium',
      status: 'scheduled',
      estimatedDuration: 6,
      assignedMachine: 'CNC Machine 001',
      createdDate: '2025-06-16',
      progress: 0
    },
    {
      id: '3',
      orderNumber: 'ORD-12347',
      customerName: 'Precision Parts Ltd',
      productName: 'Titanium Component',
      quantity: 25,
      dueDate: '2025-06-28',
      priority: 'high',
      status: 'scheduled',
      estimatedDuration: 12,
      assignedMachine: 'CNC Machine 002',
      notes: 'High precision required',
      createdDate: '2025-06-17',
      progress: 0
    },
    {
      id: '4',
      orderNumber: 'ORD-12348',
      customerName: 'Industrial Solutions',
      productName: 'Metal Sheet Forming',
      quantity: 200,
      dueDate: '2025-06-20',
      priority: 'low',
      status: 'completed',
      estimatedDuration: 4,
      assignedMachine: 'Hydraulic Press 001',
      createdDate: '2025-06-14',
      progress: 100
    },
    {
      id: '5',
      orderNumber: 'ORD-12349',
      customerName: 'BuildTech Systems',
      productName: 'Frame Assembly',
      quantity: 75,
      dueDate: '2025-06-30',
      priority: 'medium',
      status: 'pending',
      estimatedDuration: 10,
      createdDate: '2025-06-17',
      progress: 0
    },
    {
      id: '6',
      orderNumber: 'ORD-12350',
      customerName: 'AutoParts Express',
      productName: 'Final Product Assembly',
      quantity: 30,
      dueDate: '2025-06-26',
      priority: 'high',
      status: 'in-progress',
      estimatedDuration: 16,
      assignedMachine: 'Assembly Station 001',
      notes: 'Rush order - expedite if possible',
      createdDate: '2025-06-15',
      progress: 40
    }
  ])

  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<ProductionOrder | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterPriority, setFilterPriority] = useState<string>('all')

  const [newOrder, setNewOrder] = useState({
    orderNumber: '',
    customerName: '',
    productName: '',
    quantity: 1,
    dueDate: '',
    priority: 'medium' as 'high' | 'medium' | 'low',
    estimatedDuration: 1,
    notes: ''
  })

  const getStatusColor = (status: string): 'gray' | 'info' | 'warning' | 'success' | 'failure' => {
    switch (status) {
      case 'pending': return 'gray'
      case 'scheduled': return 'info'
      case 'in-progress': return 'warning'
      case 'completed': return 'success'
      case 'cancelled': return 'failure'
      default: return 'gray'
    }
  }

  const getPriorityColor = (priority: string): 'failure' | 'warning' | 'success' | 'gray' => {
    switch (priority) {
      case 'high': return 'failure'
      case 'medium': return 'warning'
      case 'low': return 'success'
      default: return 'gray'
    }
  }

  const handleCreateOrder = () => {
    const order: ProductionOrder = {
      id: String(orders.length + 1),
      orderNumber: newOrder.orderNumber || `ORD-${Date.now()}`,
      customerName: newOrder.customerName,
      productName: newOrder.productName,
      quantity: newOrder.quantity,
      dueDate: newOrder.dueDate,
      priority: newOrder.priority,
      status: 'pending',
      estimatedDuration: newOrder.estimatedDuration,
      notes: newOrder.notes,
      createdDate: new Date().toISOString().split('T')[0],
      progress: 0
    }

    setOrders([...orders, order])
    setNewOrder({
      orderNumber: '',
      customerName: '',
      productName: '',
      quantity: 1,
      dueDate: '',
      priority: 'medium',
      estimatedDuration: 1,
      notes: ''
    })
    setShowCreateModal(false)
  }

  const filteredOrders = orders.filter(order => {
    const statusMatch = filterStatus === 'all' || order.status === filterStatus
    const priorityMatch = filterPriority === 'all' || order.priority === filterPriority
    return statusMatch && priorityMatch
  })

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    scheduled: orders.filter(o => o.status === 'scheduled').length,
    inProgress: orders.filter(o => o.status === 'in-progress').length,
    completed: orders.filter(o => o.status === 'completed').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  }

  return (    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">{/* Header */}
        <div className="mb-8">
          <Link to="/" className="text-blue-400 hover:text-blue-300 underline mb-4 inline-block">
            ← Back to Main
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <ShowcasePageTitle>
                Production Orders
              </ShowcasePageTitle>
              <ShowcaseText>
                Manage and track production orders through their lifecycle
              </ShowcaseText>
            </div>
            <div className="flex space-x-3">
              <Button color="blue" onClick={() => setShowCreateModal(true)}>
                Create New Order
              </Button>
              <Link to="/scheduler">
                <Button color="green">
                  View Scheduler
                </Button>
              </Link>
            </div>
          </div>
        </div>        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <ShowcaseCard>
            <div className="text-center">
              <ShowcaseMetricValue>{orderStats.total}</ShowcaseMetricValue>
              <ShowcaseMetricLabel>Total Orders</ShowcaseMetricLabel>
            </div>
          </ShowcaseCard>
          <ShowcaseCard>
            <div className="text-center">
              <ShowcaseMetricValue className="text-gray-400">{orderStats.pending}</ShowcaseMetricValue>
              <ShowcaseMetricLabel>Pending</ShowcaseMetricLabel>
            </div>
          </ShowcaseCard>
          <ShowcaseCard>
            <div className="text-center">
              <ShowcaseMetricValue className="text-blue-400">{orderStats.scheduled}</ShowcaseMetricValue>
              <ShowcaseMetricLabel>Scheduled</ShowcaseMetricLabel>
            </div>
          </ShowcaseCard>
          <ShowcaseCard>
            <div className="text-center">
              <ShowcaseMetricValue className="text-yellow-400">{orderStats.inProgress}</ShowcaseMetricValue>
              <ShowcaseMetricLabel>In Progress</ShowcaseMetricLabel>
            </div>
          </ShowcaseCard>
          <ShowcaseCard>
            <div className="text-center">
              <ShowcaseMetricValue className="text-green-400">{orderStats.completed}</ShowcaseMetricValue>
              <ShowcaseMetricLabel>Completed</ShowcaseMetricLabel>
            </div>
          </ShowcaseCard>
          <ShowcaseCard>
            <div className="text-center">
              <ShowcaseMetricValue className="text-red-400">{orderStats.cancelled}</ShowcaseMetricValue>
              <ShowcaseMetricLabel>Cancelled</ShowcaseMetricLabel>
            </div>
          </ShowcaseCard>
        </div>        {/* Filters */}
        <ShowcaseCard className="mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Label htmlFor="status-filter" className="text-gray-300">Status:</Label>
              <Select
                id="status-filter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-40"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="scheduled">Scheduled</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="priority-filter" className="text-gray-300">Priority:</Label>
              <Select
                id="priority-filter"
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="w-40"
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </Select>
            </div>
            <div className="flex-1"></div>
            <div className="text-sm text-gray-400">
              Showing {filteredOrders.length} of {orders.length} orders
            </div>
          </div>
        </ShowcaseCard>        
        {/* Orders Table */}
        <ShowcaseCard>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300">
              <thead className="text-xs text-gray-400 uppercase bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3">Order #</th>
                  <th scope="col" className="px-6 py-3">Customer</th>
                  <th scope="col" className="px-6 py-3">Product</th>
                  <th scope="col" className="px-6 py-3">Quantity</th>
                  <th scope="col" className="px-6 py-3">Due Date</th>
                  <th scope="col" className="px-6 py-3">Priority</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Progress</th>
                  <th scope="col" className="px-6 py-3">Machine</th>
                  <th scope="col" className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="bg-gray-800 border-b border-gray-600 hover:bg-gray-700">
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                      {order.orderNumber}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{order.customerName}</td>
                    <td className="px-6 py-4 text-gray-300">{order.productName}</td>
                    <td className="px-6 py-4 text-gray-300">{order.quantity}</td>
                    <td className="px-6 py-4 text-gray-300">{order.dueDate}</td>
                    <td className="px-6 py-4">
                      <Badge color={getPriorityColor(order.priority)}>
                        {order.priority}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge color={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all" 
                            style={{ width: `${order.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400">{order.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {order.assignedMachine ? (
                        <Badge color="info" size="xs">{order.assignedMachine}</Badge>
                      ) : (
                        <span className="text-gray-500">Unassigned</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button
                          size="xs"
                          color="blue"
                          onClick={() => {
                            setSelectedOrder(order)
                            setShowDetailsModal(true)
                          }}
                        >
                          Details
                        </Button>
                        <Button size="xs" color="gray">
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ShowcaseCard>{/* Create Order Modal */}
        <Modal show={showCreateModal} onClose={() => setShowCreateModal(false)} size="lg">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Create New Production Order
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="orderNumber">Order Number</Label>
                  <TextInput
                    id="orderNumber"
                    placeholder="Auto-generated if empty"
                    value={newOrder.orderNumber}
                    onChange={(e) => setNewOrder({ ...newOrder, orderNumber: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="customerName">Customer Name</Label>
                  <TextInput
                    id="customerName"
                    required
                    value={newOrder.customerName}
                    onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="productName">Product Name</Label>
                  <TextInput
                    id="productName"
                    required
                    value={newOrder.productName}
                    onChange={(e) => setNewOrder({ ...newOrder, productName: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <TextInput
                    id="quantity"
                    type="number"
                    min="1"
                    required
                    value={newOrder.quantity}
                    onChange={(e) => setNewOrder({ ...newOrder, quantity: parseInt(e.target.value) || 1 })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="dueDate">Due Date</Label>
                  <TextInput
                    id="dueDate"
                    type="date"
                    required
                    value={newOrder.dueDate}
                    onChange={(e) => setNewOrder({ ...newOrder, dueDate: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    id="priority"
                    value={newOrder.priority}
                    onChange={(e) => setNewOrder({ ...newOrder, priority: e.target.value as 'high' | 'medium' | 'low' })}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="estimatedDuration">Estimated Duration (hours)</Label>
                  <TextInput
                    id="estimatedDuration"
                    type="number"
                    min="0.5"
                    step="0.5"
                    required
                    value={newOrder.estimatedDuration}
                    onChange={(e) => setNewOrder({ ...newOrder, estimatedDuration: parseFloat(e.target.value) || 1 })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  rows={3}
                  placeholder="Additional notes or special requirements..."
                  value={newOrder.notes}
                  onChange={(e) => setNewOrder({ ...newOrder, notes: e.target.value })}
                />
              </div>
            </div>            <div className="flex justify-end space-x-3 mt-6">
              <Button color="blue" onClick={handleCreateOrder}>
                Create Order
              </Button>
              <Button color="gray" onClick={() => setShowCreateModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal>

        {/* Order Details Modal */}
        <Modal show={showDetailsModal} onClose={() => setShowDetailsModal(false)} size="lg">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Order Details - {selectedOrder?.orderNumber}
            </h3>
            {selectedOrder && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Order Information</h3>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Order Number:</span>
                        <p className="font-medium">{selectedOrder.orderNumber}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Customer:</span>
                        <p className="font-medium">{selectedOrder.customerName}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Product:</span>
                        <p className="font-medium">{selectedOrder.productName}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Quantity:</span>
                        <p className="font-medium">{selectedOrder.quantity} units</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Schedule & Status</h3>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Created Date:</span>
                        <p className="font-medium">{selectedOrder.createdDate}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Due Date:</span>
                        <p className="font-medium">{selectedOrder.dueDate}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Estimated Duration:</span>
                        <p className="font-medium">{selectedOrder.estimatedDuration} hours</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Progress:</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${selectedOrder.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{selectedOrder.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Priority:</span>
                    <Badge color={getPriorityColor(selectedOrder.priority)} className="ml-2">
                      {selectedOrder.priority}
                    </Badge>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Status:</span>
                    <Badge color={getStatusColor(selectedOrder.status)} className="ml-2">
                      {selectedOrder.status}
                    </Badge>
                  </div>
                </div>

                {selectedOrder.assignedMachine && (
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Assigned Machine:</span>
                    <p className="font-medium">{selectedOrder.assignedMachine}</p>
                  </div>
                )}

                {selectedOrder.notes && (
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Notes:</span>
                    <p className="mt-1 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">{selectedOrder.notes}</p>
                  </div>
                )}
              </div>
            )}
            <div className="flex justify-end space-x-3 mt-6">
              <Button color="blue" onClick={() => setShowDetailsModal(false)}>
                Close
              </Button>
              <Button color="gray">
                Edit Order
              </Button>
              <Link to="/scheduler">
                <Button color="green">
                  View in Scheduler
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
