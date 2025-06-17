import { Dropdown, DropdownItem, DropdownDivider } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText } from "../../components"

export function DropdownSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Action Menus</ShowcaseHeading>
      <ShowcaseText>
        Quick access menus for production management, machine controls, and user settings.
      </ShowcaseText>
      <div className="flex flex-wrap gap-4"><Dropdown label="Dropdown button">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>

        <Dropdown color="blue" label="Blue dropdown">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>

        <Dropdown placement="top" label="Dropdown top">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
    </ShowcaseCard>
  )
}
