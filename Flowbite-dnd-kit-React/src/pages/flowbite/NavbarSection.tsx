import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Avatar } from 'flowbite-react'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function NavbarSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Navbar</h2>
      <p className="text-gray-600 mb-6">
        Responsive navigation headers with branding, navigation, and more.
      </p>
      
      <div className="space-y-6">
        {/* Default Navbar */}
        <div>
          <h3 className="text-lg font-medium mb-3">Default Navbar</h3>
          <Navbar fluid rounded>
            <NavbarBrand href="https://flowbite-react.com">
              <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Flowbite React
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
        </div>

        {/* Navbar with Dropdown */}
        <div>
          <h3 className="text-lg font-medium mb-3">Navbar with Dropdown</h3>
          <Navbar fluid rounded>
            <NavbarBrand href="https://flowbite-react.com">
              <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Flowbite React
              </span>
            </NavbarBrand>
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                }
              >
                <DropdownHeader>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">name@flowbite.com</span>
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
        <div>
          <h3 className="text-lg font-medium mb-3">Navbar with CTA</h3>
          <Navbar fluid rounded>
            <NavbarBrand href="https://flowbite-react.com">
              <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Flowbite React
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
    </ShowcaseSection>
  )
}
