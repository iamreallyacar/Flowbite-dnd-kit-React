import { Carousel } from 'flowbite-react'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function CarouselSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold mb-6">Carousel</h2>      <div className="h-32 sm:h-40 xl:h-48 2xl:h-56">
        <Carousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." className="w-full h-full object-cover" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." className="w-full h-full object-cover" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." className="w-full h-full object-cover" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." className="w-full h-full object-cover" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." className="w-full h-full object-cover" />
        </Carousel>
      </div>
    </ShowcaseSection>
  )
}
