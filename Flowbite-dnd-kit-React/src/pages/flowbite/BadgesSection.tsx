import { Badge } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function BadgesSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Badges</ShowcaseHeading>
      <div className="flex flex-wrap gap-4">
        <Badge>Default</Badge>
        <Badge color="blue">Blue</Badge>
        <Badge color="green">Green</Badge>
        <Badge color="red">Red</Badge>
        <Badge color="yellow">Yellow</Badge>
        <Badge color="purple">Purple</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    </ShowcaseCard>
  )
}
