import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Avatar } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSectionHeader } from "../../components"

export function NavbarSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Navigation</ShowcaseHeading>
      <ShowcaseText>
        Responsive navigation headers for production management, machine monitoring, and user access.
      </ShowcaseText>
      
      <div className="space-y-6">
        {/* Default Navbar */}
        <div>          <ShowcaseSectionHeader>Default Navbar</ShowcaseSectionHeader>
          <Navbar fluid rounded>
            <NavbarBrand href="#">
              <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="UI Library Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                UI Library
              </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="#" active>
                Home
              </NavbarLink>
              <NavbarLink href="#">About</NavbarLink>
              <NavbarLink href="#">Services</NavbarLink>
              <NavbarLink href="#">Pricing</NavbarLink>
              <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
          </Navbar>
        </div>        {/* Navbar with Dropdown */}
        <div>          <ShowcaseSectionHeader>Navbar with Dropdown</ShowcaseSectionHeader>
          <Navbar fluid rounded>
            <NavbarBrand href="#">
              <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="UI Library Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                UI Library
              </span>
            </NavbarBrand>
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img="https://via.placeholder.com/40x40?text=User" rounded />
                }
              >                <DropdownHeader>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">name@example.com</span>
                </DropdownHeader>
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Earnings</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Sign out</DropdownItem>
              </Dropdown>
              <NavbarToggle />
            </div>
            <NavbarCollapse>
              <NavbarLink href="#" active>
                Home
              </NavbarLink>
              <NavbarLink href="#">About</NavbarLink>
              <NavbarLink href="#">Services</NavbarLink>
              <NavbarLink href="#">Pricing</NavbarLink>
              <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
          </Navbar>
        </div>

        {/* CTA Navbar */}
        <div>          <h3 className="text-lg font-medium mb-3">Navbar with CTA</h3>
          <Navbar fluid rounded>
            <NavbarBrand href="#">
              <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="UI Library Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                UI Library
              </span>
            </NavbarBrand>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
              <NavbarToggle />
            </div>
            <NavbarCollapse>
              <NavbarLink href="#" active>
                Home
              </NavbarLink>
              <NavbarLink href="#">About</NavbarLink>
              <NavbarLink href="#">Services</NavbarLink>
              <NavbarLink href="#">Pricing</NavbarLink>
              <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
          </Navbar>
        </div>
      </div>
    </ShowcaseCard>
  )
}
