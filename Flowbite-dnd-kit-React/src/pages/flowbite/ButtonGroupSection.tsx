import { Button, ButtonGroup } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseSubheading } from "../../components"

export function ButtonGroupSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Button Group</ShowcaseHeading>
      <p className="text-gray-600 mb-6">
        Group multiple buttons together in a single component with various styles and configurations.
      </p>
      
      <div className="space-y-6">
        {/* Default Button Group */}
        <div>
          <ShowcaseSubheading>Default Button Group</ShowcaseSubheading>
          <ButtonGroup>
            <Button color="gray">Profile</Button>
            <Button color="gray">Settings</Button>
            <Button color="gray">Messages</Button>
          </ButtonGroup>
        </div>

        {/* Colored Button Group */}
        <div>
          <ShowcaseSubheading>Colored Button Group</ShowcaseSubheading>
          <ButtonGroup>
            <Button>Profile</Button>
            <Button>Settings</Button>
            <Button>Messages</Button>
          </ButtonGroup>
        </div>

        {/* Outline Button Group */}
        <div>
          <ShowcaseSubheading>Outline Button Group</ShowcaseSubheading>
          <ButtonGroup outline>
            <Button color="gray">Profile</Button>
            <Button color="gray">Settings</Button>
            <Button color="gray">Messages</Button>
          </ButtonGroup>
        </div>

        {/* Different Colors */}
        <div>
          <ShowcaseSubheading>Different Colors</ShowcaseSubheading>
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
    </ShowcaseCard>
  )
}
