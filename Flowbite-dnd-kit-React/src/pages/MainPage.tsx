import { Button, Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

export function MainPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Production Scheduling System
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						A comprehensive production scheduling application showcasing the integration of 
						Flowbite React components with dnd-kit for drag-and-drop scheduling functionality.
					</p>
				</div>

				{/* Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
					<Card className="hover:shadow-xl transition-shadow duration-300">
						<div className="text-center p-4">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">Production Dashboard</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-4">Monitor KPIs, machine status, and production metrics in real-time</p>
							<Link to="/dashboard">
								<Button color="blue" className="w-full">
									View Dashboard
								</Button>
							</Link>
						</div>
					</Card>

					<Card className="hover:shadow-xl transition-shadow duration-300">
						<div className="text-center p-4">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">Interactive Scheduler</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-4">Drag-and-drop Gantt chart for visual production planning</p>
							<Link to="/scheduler">
								<Button color="green" className="w-full">
									Open Scheduler
								</Button>
							</Link>
						</div>
					</Card>

					<Card className="hover:shadow-xl transition-shadow duration-300">
						<div className="text-center p-4">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">Production Orders</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-4">Create, manage, and track production orders through their lifecycle</p>
							<Link to="/orders">
								<Button color="purple" className="w-full">
									Manage Orders
								</Button>
							</Link>
						</div>
					</Card>

					<Card className="hover:shadow-xl transition-shadow duration-300">
						<div className="text-center p-4">
							<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">Resource Management</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-4">Allocate machines, workers, and materials efficiently</p>
							<Link to="/resources">
								<Button color="yellow" className="w-full">
									Manage Resources
								</Button>
							</Link>
						</div>
					</Card>				</div>

				{/* Component Library Showcases */}
				<Card className="mb-8">
					<div className="p-6">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6 text-center">
							Component Library Showcases
						</h2>
						<p className="text-center text-gray-600 dark:text-gray-300 mb-6">
							Explore how Flowbite and dnd-kit components are adapted for production scheduling scenarios
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Link to="/flowbite">
								<Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
									<div className="text-center p-4">
										<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
											<svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
											</svg>
										</div>
										<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">Flowbite Components</h3>
										<p className="text-gray-600 dark:text-gray-300 mb-4">
											See alerts, badges, progress bars, tables, and timelines adapted for production scheduling
										</p>
										<Button color="blue" className="w-full">
											View Flowbite Showcase
										</Button>
									</div>
								</Card>
							</Link>
							<Link to="/dnd-kit">
								<Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
									<div className="text-center p-4">
										<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
											<svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
												<path d="M8 5v14l11-7z"/>
											</svg>
										</div>
										<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">DND-Kit Features</h3>
										<p className="text-gray-600 dark:text-gray-300 mb-4">
											Explore drag-and-drop job scheduling, sortable task lists, and production workflows
										</p>
										<Button color="green" className="w-full">
											View DND-Kit Showcase
										</Button>
									</div>
								</Card>
							</Link>
						</div>
					</div>
				</Card>

				{/* Technology Integration */}
				<Card className="mb-8">
					<div className="p-6">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6 text-center">
							Technology Integration Showcase
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							<div className="text-center">
								<div className="text-3xl mb-2">🎨</div>
								<h3 className="font-medium text-gray-900 dark:text-gray-200">Flowbite React</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">UI Components</p>
							</div>
							<div className="text-center">
								<div className="text-3xl mb-2">�</div>
								<h3 className="font-medium text-gray-900 dark:text-gray-200">dnd-kit</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">Drag & Drop</p>
							</div>
							<div className="text-center">
								<div className="text-3xl mb-2">⚛️</div>
								<h3 className="font-medium text-gray-900 dark:text-gray-200">React 19</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">Framework</p>
							</div>
							<div className="text-center">
								<div className="text-3xl mb-2">📘</div>
								<h3 className="font-medium text-gray-900 dark:text-gray-200">TypeScript</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">Type Safety</p>
							</div>
						</div>
					</div>
				</Card>

				{/* Application Features */}
				<div className="text-center">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
						Production Scheduling Features
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
						<Card>
							<h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">Visual Scheduling</h3>
							<p className="text-gray-600 dark:text-gray-300">Interactive Gantt charts with drag-and-drop job scheduling and real-time updates</p>
						</Card>
						<Card>
							<h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">Resource Optimization</h3>
							<p className="text-gray-600 dark:text-gray-300">Efficient allocation of machines, workers, and materials with conflict detection</p>
						</Card>
						<Card>
							<h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">Production Analytics</h3>
							<p className="text-gray-600 dark:text-gray-300">Real-time KPIs, performance metrics, and production insights dashboard</p>
						</Card>
					</div>				</div>
			</div>
		</div>
	)
}