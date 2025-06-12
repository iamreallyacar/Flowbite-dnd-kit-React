import { Card } from 'flowbite-react'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function CardsSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold mb-6">Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Technology News
          </h5>
          <p className="font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Another Card
          </h5>
          <p className="font-normal text-gray-700">
            This card shows how Flowbite React components work seamlessly with Tailwind CSS.
          </p>
        </Card>

        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Third Card
          </h5>
          <p className="font-normal text-gray-700">
            Beautiful, responsive card layouts are easy with Flowbite React.
          </p>
        </Card>
      </div>
    </ShowcaseSection>
  )
}
