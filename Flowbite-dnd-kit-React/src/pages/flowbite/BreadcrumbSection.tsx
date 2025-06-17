import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function BreadcrumbSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Breadcrumb</ShowcaseHeading>
      <div className="space-y-4">        <Breadcrumb aria-label="Default breadcrumb example">
          <BreadcrumbItem href="#" icon={HiHome}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Projects</BreadcrumbItem>
          <BreadcrumbItem>UI Library</BreadcrumbItem>
        </Breadcrumb>        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 py-3 px-5">
          <BreadcrumbItem href="#" icon={HiHome}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Projects</BreadcrumbItem>
          <BreadcrumbItem>UI Library</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </ShowcaseCard>
  )
}
