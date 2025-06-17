import { Card } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseSubheading, ShowcaseText } from "../../components"

export function CardsSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Cards</ShowcaseHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="max-w-sm">
          <ShowcaseSubheading>
            Technology News
          </ShowcaseSubheading>
          <ShowcaseText>
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </ShowcaseText>
        </Card>
        
        <Card className="max-w-sm">
          <ShowcaseSubheading>
            Another Card
          </ShowcaseSubheading>          <ShowcaseText>
            This card shows how UI library components work seamlessly with CSS framework.
          </ShowcaseText>
        </Card>

        <Card className="max-w-sm">
          <ShowcaseSubheading>
            Third Card
          </ShowcaseSubheading>          <ShowcaseText>
            Beautiful, responsive card layouts are easy with UI component library.
          </ShowcaseText>
        </Card>
      </div>
    </ShowcaseCard>
  )
}
