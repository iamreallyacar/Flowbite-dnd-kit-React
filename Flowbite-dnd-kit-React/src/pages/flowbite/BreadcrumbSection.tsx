import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function BreadcrumbSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold mb-6">Breadcrumb</h2>
      <div className="space-y-4">        <Breadcrumb aria-label="Default breadcrumb example">
          <BreadcrumbItem href="#" icon={HiHome}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Projects</BreadcrumbItem>
          <BreadcrumbItem>Flowbite React</BreadcrumbItem>
        </Breadcrumb>

        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 py-3 px-5">
          <BreadcrumbItem href="#" icon={HiHome}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Projects</BreadcrumbItem>
          <BreadcrumbItem>Flowbite React</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </ShowcaseSection>
  )
}
