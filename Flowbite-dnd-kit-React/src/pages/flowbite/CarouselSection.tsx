import { Carousel } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function CarouselSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Carousel</ShowcaseHeading>
      <div className="h-32 sm:h-40 xl:h-48 2xl:h-56">        <Carousel>
          <img src="https://via.placeholder.com/800x400/4f46e5/ffffff?text=Slide+1" alt="..." className="w-full h-full object-cover" />
          <img src="https://via.placeholder.com/800x400/10b981/ffffff?text=Slide+2" alt="..." className="w-full h-full object-cover" />
          <img src="https://via.placeholder.com/800x400/f59e0b/ffffff?text=Slide+3" alt="..." className="w-full h-full object-cover" />
          <img src="https://via.placeholder.com/800x400/ef4444/ffffff?text=Slide+4" alt="..." className="w-full h-full object-cover" />
          <img src="https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Slide+5" alt="..." className="w-full h-full object-cover" />
        </Carousel>
      </div>
    </ShowcaseCard>
  )
}
