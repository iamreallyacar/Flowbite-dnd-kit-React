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

export function DndKitShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Main
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            DND-Kit in Production Scheduling
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Explore how drag-and-drop interactions enhance production scheduling workflows. 
            Each section demonstrates practical applications of DND-Kit features in manufacturing scenarios.
          </p>
        </div>        <div className="space-y-12">
          <IntegrationInfoSection />
          <DndContextSection />
          <DraggableSection />
          <DroppableSection />
          <SensorsSection />
          <ModifiersSection />
          <VerticalSortableSection />
          <HorizontalSortableSection />
        </div>
      </div>
    </div>
  )
}