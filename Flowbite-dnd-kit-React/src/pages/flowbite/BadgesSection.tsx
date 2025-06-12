import { Badge } from 'flowbite-react'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function BadgesSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold text-gray-200 mb-6">Badges</h2>
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
    </ShowcaseSection>
  )
}
