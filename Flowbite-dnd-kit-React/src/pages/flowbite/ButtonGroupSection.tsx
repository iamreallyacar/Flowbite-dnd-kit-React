import { Button, ButtonGroup } from 'flowbite-react'

export function ButtonGroupSection() {
  return (
    <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Button Group</h2>
      <p className="text-gray-600 mb-6">
        Group multiple buttons together in a single component with various styles and configurations.
      </p>
      
      <div className="space-y-6">
        {/* Default Button Group */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Button Group</h3>
          <ButtonGroup>
            <Button color="gray">Profile</Button>
            <Button color="gray">Settings</Button>
            <Button color="gray">Messages</Button>
          </ButtonGroup>
        </div>

        {/* Colored Button Group */}
        <div>
          <h3 className="text-lg font-medium mb-4">Colored Button Group</h3>
          <ButtonGroup>
            <Button>Profile</Button>
            <Button>Settings</Button>
            <Button>Messages</Button>
          </ButtonGroup>
        </div>

        {/* Outline Button Group */}
        <div>
          <h3 className="text-lg font-medium mb-4">Outline Button Group</h3>
          <ButtonGroup outline>
            <Button color="gray">Profile</Button>
            <Button color="gray">Settings</Button>
            <Button color="gray">Messages</Button>
          </ButtonGroup>
        </div>

        {/* Different Colors */}
        <div>
          <h3 className="text-lg font-medium mb-4">Different Colors</h3>
          <div className="flex flex-wrap gap-4">
            <ButtonGroup>
              <Button color="purple">Left</Button>
              <Button color="purple">Middle</Button>
              <Button color="purple">Right</Button>
            </ButtonGroup>
            
            <ButtonGroup>
              <Button color="green">Left</Button>
              <Button color="green">Middle</Button>
              <Button color="green">Right</Button>
            </ButtonGroup>
            
            <ButtonGroup>
              <Button color="red">Left</Button>
              <Button color="red">Middle</Button>
              <Button color="red">Right</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
