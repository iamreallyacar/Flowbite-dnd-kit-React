import { Carousel } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function CarouselSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Carousel</ShowcaseHeading>
      <div className="h-32 sm:h-40 xl:h-48 2xl:h-56">
        <Carousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." className="w-full h-full object-cover" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." className="w-full h-full object-cover" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." className="w-full h-full object-cover" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." className="w-full h-full object-cover" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." className="w-full h-full object-cover" />
        </Carousel>
      </div>
    </ShowcaseCard>
  )
}
