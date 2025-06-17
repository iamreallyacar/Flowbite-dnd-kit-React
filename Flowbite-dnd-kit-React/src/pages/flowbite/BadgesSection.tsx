import { Badge } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSectionHeader } from "../../components"

export function BadgesSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Status Badges</ShowcaseHeading>
      <ShowcaseText>
        Use badges to quickly identify job status, priorities, and machine states in your production system.
      </ShowcaseText>
      
      <div className="space-y-6">
        <div>
          <ShowcaseSectionHeader>Job Status</ShowcaseSectionHeader>
          <div className="flex flex-wrap gap-3">
            <Badge color="blue">Scheduled</Badge>
            <Badge color="yellow">In Progress</Badge>
            <Badge color="green">Completed</Badge>
            <Badge color="red">Delayed</Badge>
            <Badge color="gray">On Hold</Badge>
            <Badge color="purple">Quality Check</Badge>
          </div>
        </div>
          <div>
          <ShowcaseSectionHeader>Priority Levels</ShowcaseSectionHeader>
          <div className="flex flex-wrap gap-3">
            <Badge color="red" size="lg">HIGH</Badge>
            <Badge color="yellow">MEDIUM</Badge>
            <Badge color="green" size="sm">LOW</Badge>
            <Badge color="gray" size="sm">ROUTINE</Badge>
          </div>
        </div>
          <div>
          <ShowcaseSectionHeader>Machine Status</ShowcaseSectionHeader>
          <div className="flex flex-wrap gap-3">
            <Badge color="green">OPERATIONAL</Badge>
            <Badge color="yellow">MAINTENANCE</Badge>
            <Badge color="red">DOWN</Badge>
            <Badge color="blue">SETUP</Badge>
            <Badge color="purple">CLEANING</Badge>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}
