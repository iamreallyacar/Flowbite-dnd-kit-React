import { Datepicker } from 'flowbite-react'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function DatepickerSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold mb-6">Datepicker</h2>
      <div className="space-y-4">
        <div className="max-w-sm">
          <Datepicker />
        </div>
        <div className="max-w-sm">
          <Datepicker inline />
        </div>
      </div>
    </ShowcaseSection>
  )
}
