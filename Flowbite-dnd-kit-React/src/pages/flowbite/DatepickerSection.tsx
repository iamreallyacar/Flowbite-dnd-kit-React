import { Datepicker } from 'flowbite-react'

export function DatepickerSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Datepicker</h2>
      <div className="space-y-4">
        <div className="max-w-sm">
          <Datepicker />
        </div>
        <div className="max-w-sm">
          <Datepicker inline />
        </div>
      </div>
    </section>
  )
}
