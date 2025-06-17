import { ListGroup, ListGroupItem } from 'flowbite-react'
import { HiUserCircle, HiOutlineUserCircle } from 'react-icons/hi'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText } from "../../components"

export function ListGroupSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production List Groups</ShowcaseHeading>
      <ShowcaseText>
        Organize production data, machine lists, and navigation items in structured list formats.
      </ShowcaseText>
      <div className="space-y-4">
        <div className="max-w-md">
          <ListGroup>
            <ListGroupItem>Profile</ListGroupItem>
            <ListGroupItem>Settings</ListGroupItem>
            <ListGroupItem>Messages</ListGroupItem>
            <ListGroupItem>Download</ListGroupItem>
          </ListGroup>
        </div>
        
        <div className="max-w-md">
          <ListGroup>
            <ListGroupItem active>Profile</ListGroupItem>
            <ListGroupItem>Settings</ListGroupItem>
            <ListGroupItem>Messages</ListGroupItem>
            <ListGroupItem disabled>Download</ListGroupItem>
          </ListGroup>
        </div>

        <div className="max-w-md">
          <ListGroup>
            <ListGroupItem icon={HiUserCircle}>Profile</ListGroupItem>
            <ListGroupItem icon={HiOutlineUserCircle}>Settings</ListGroupItem>
            <ListGroupItem icon={HiUserCircle}>Messages</ListGroupItem>
            <ListGroupItem icon={HiOutlineUserCircle}>Download</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </ShowcaseCard>
  )
}
