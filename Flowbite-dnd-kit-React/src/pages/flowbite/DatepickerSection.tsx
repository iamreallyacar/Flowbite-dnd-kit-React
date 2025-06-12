import { Datepicker } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function DatepickerSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Datepicker</ShowcaseHeading>
      <div className="space-y-4">
        <div className="max-w-sm">
          <Datepicker />
        </div>
        <div className="max-w-sm">
          <Datepicker inline />
        </div>
      </div>
    </ShowcaseCard>
  )
}
