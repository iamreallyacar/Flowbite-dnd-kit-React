import { Button, Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

export function MainPage() {	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Flowbite React + DND Kit + TypeScript + Vite
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						A showcase demonstrating the powerful integration of modern React libraries, 
						beautiful UI components, and advanced drag-and-drop functionality.
					</p>
				</div>

				{/* Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<Card className="hover:shadow-xl transition-shadow duration-300">
						<div className="text-center p-4">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
									<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-200 mb-2">Flowbite React</h3>
							<p className="text-gray-300 mb-4">Beautiful, responsive components built with Tailwind CSS</p>
							<Link to="/flowbite">
								<Button color="blue" className="w-full">
									Explore Components
								</Button>
							</Link>
						</div>
					</Card>

					<Card className="hover:shadow-xl transition-shadow duration-300">
						<div className="text-center p-4">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
									<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-200 mb-2">DND Kit</h3>
							<p className="text-gray-300 mb-4">Advanced drag-and-drop functionality with accessibility</p>
							<Link to="/dnd-kit">
								<Button color="green" className="w-full">
									Try Drag & Drop
								</Button>
							</Link>
						</div>
					</Card>
				</div>

				{/* Technology Stack */}
				<Card className="mb-8">
					<div className="p-6">
						<h2 className="text-2xl font-semibold text-gray-200 mb-6 text-center">
							Technology Stack
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							<div className="text-center">
								<div className="text-3xl mb-2">⚛️</div>
								<h3 className="font-medium text-gray-200">React 19</h3>
								<p className="text-sm text-gray-300">UI Library</p>
							</div>
							<div className="text-center">
								<div className="text-3xl mb-2">📘</div>
								<h3 className="font-medium text-gray-200">TypeScript</h3>
								<p className="text-sm text-gray-300">Type Safety</p>
							</div>
							<div className="text-center">
								<div className="text-3xl mb-2">⚡</div>
								<h3 className="font-medium text-gray-200">Vite</h3>
								<p className="text-sm text-gray-300">Build Tool</p>
							</div>
							<div className="text-center">
								<div className="text-3xl mb-2">🎨</div>
								<h3 className="font-medium text-gray-200">Tailwind CSS</h3>
								<p className="text-sm text-gray-300">Styling</p>
							</div>
						</div>
					</div>
				</Card>

				{/* Features */}
				<div className="text-center">
					<h2 className="text-2xl font-semibold text-gray-200 mb-4">
						What You'll Discover
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
						<Card>
							<h3 className="font-semibold text-gray-200 mb-2">Component Integration</h3>
							<p className="text-gray-300">See how Flowbite React components work seamlessly with custom implementations</p>
						</Card>
						<Card>
							<h3 className="font-semibold text-gray-200 mb-2">Drag & Drop UX</h3>
							<p className="text-gray-300">Experience accessible, keyboard-friendly drag and drop interactions</p>
						</Card>
						<Card>
							<h3 className="font-semibold text-gray-200 mb-2">Modern Development</h3>
							<p className="text-gray-300">TypeScript, Vite, and modern React patterns working together</p>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}