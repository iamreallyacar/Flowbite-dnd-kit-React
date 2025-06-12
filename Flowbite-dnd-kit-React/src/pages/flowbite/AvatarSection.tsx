import { Avatar } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function AvatarSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Avatar</ShowcaseHeading>
      <div className="flex flex-wrap gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
          <span className="text-sm text-gray-600">Default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="lg" />
          <span className="text-sm text-gray-600">Large</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          <span className="text-sm text-gray-600">Rounded</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered />
          <span className="text-sm text-gray-600">Bordered</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" status="online" />
          <span className="text-sm text-gray-600">Online</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" status="busy" />
          <span className="text-sm text-gray-600">Busy</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar placeholderInitials="RR" />
          <span className="text-sm text-gray-600">Initials</span>
        </div>
      </div>
    </ShowcaseCard>
  )
}
