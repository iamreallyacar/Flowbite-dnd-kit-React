import { Badge } from 'flowbite-react'

export function BadgesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Badges</h2>
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
    </section>
  )
}
