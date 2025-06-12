import { ListGroup, ListGroupItem } from 'flowbite-react'
import { HiUserCircle, HiOutlineUserCircle } from 'react-icons/hi'
import { ShowcaseCard } from "../../components"

export function ListGroupSection() {
  return (
    <ShowcaseCard>
      <h2 className="text-2xl font-semibold mb-6">List Group</h2>
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
