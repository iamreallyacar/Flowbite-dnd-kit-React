import { Link } from 'react-router-dom'
import { 
  DndContextSection,
  DroppableSection,
  DraggableSection,
  SensorsSection,
  ModifiersSection,
  VerticalSortableSection,
  HorizontalSortableSection,
  IntegrationInfoSection
} from './dnd-kit'

export function DndKitShowcase() {  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Main
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            DND Kit + Flowbite React Showcase
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore drag and drop functionality with DND Kit integrated with Flowbite React components
          </p>
        </div>        <DndContextSection />
        <DroppableSection />
        <DraggableSection />
        <SensorsSection />
        <ModifiersSection />
        <VerticalSortableSection />
        <HorizontalSortableSection />
        <IntegrationInfoSection />
      </div>
    </div>
  )
}