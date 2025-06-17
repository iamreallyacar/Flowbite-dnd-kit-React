import { Avatar } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseSmallText } from "../../components"

export function AvatarSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Avatar</ShowcaseHeading>
      <div className="flex flex-wrap gap-6 items-center">        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://via.placeholder.com/40x40?text=User" />
          <ShowcaseSmallText className="mb-0">Default</ShowcaseSmallText>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://via.placeholder.com/40x40?text=User" size="lg" />
          <ShowcaseSmallText className="mb-0">Large</ShowcaseSmallText>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://via.placeholder.com/40x40?text=User" rounded />
          <ShowcaseSmallText className="mb-0">Rounded</ShowcaseSmallText>
        </div>        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://via.placeholder.com/40x40?text=User" bordered />
          <ShowcaseSmallText className="mb-0">Bordered</ShowcaseSmallText>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://via.placeholder.com/40x40?text=User" status="online" />
          <ShowcaseSmallText className="mb-0">Online</ShowcaseSmallText>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://via.placeholder.com/40x40?text=User" status="busy" />
          <ShowcaseSmallText className="mb-0">Busy</ShowcaseSmallText>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar placeholderInitials="RR" />
          <ShowcaseSmallText className="mb-0">Initials</ShowcaseSmallText>
        </div>
      </div>
    </ShowcaseCard>
  )
}
