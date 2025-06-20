import { Button } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText } from "../../components"

export function ButtonsSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Action Buttons</ShowcaseHeading>
      <ShowcaseText>
        Interactive buttons for starting jobs, confirming orders, and managing production workflows.
      </ShowcaseText>
      <div className="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button color="blue">Blue</Button>
        <Button color="green">Green</Button>
        <Button color="red">Red</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="purple">Purple</Button>
        <Button outline>Outline</Button>
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    </ShowcaseCard>
  )
}
