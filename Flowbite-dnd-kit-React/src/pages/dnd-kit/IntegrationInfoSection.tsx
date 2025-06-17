import { Card } from 'flowbite-react'

export function IntegrationInfoSection() {
  return (
    <section className="mb-12">
      <Card>
        <h3 className="text-xl font-semibold mb-4">Integration Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">          <div>
            <h4 className="font-medium text-gray-900 mb-2">Drag & Drop Library Features</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Accessible drag and drop</li>
              <li>• Keyboard navigation support</li>
              <li>• Touch device compatibility</li>
              <li>• Collision detection algorithms</li>
              <li>• Sortable contexts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">UI Library Integration</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Beautiful pre-styled components</li>
              <li>• Consistent design system</li>
              <li>• Responsive layouts</li>
              <li>• CSS framework utilities</li>
              <li>• Easy customization</li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  )
}
