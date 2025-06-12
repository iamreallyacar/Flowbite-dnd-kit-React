import { Dropdown, DropdownItem, DropdownDivider } from 'flowbite-react'

export function DropdownSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Dropdown</h2>
      <div className="flex flex-wrap gap-4">        <Dropdown label="Dropdown button">
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
    </section>
  )
}
