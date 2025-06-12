import { Button, Drawer } from 'flowbite-react'
import { useState } from 'react'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function DrawerSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRightOpen, setIsRightOpen] = useState(false)
  const [isTopOpen, setIsTopOpen] = useState(false)

  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Drawer</h2>
      <p className="text-gray-600 mb-6">
        Slide-over panels that overlay content from the side, top, or bottom of the screen.
      </p>
      
      <div className="space-y-6">
        {/* Basic Drawer Examples */}
        <div>
          <h3 className="text-lg font-medium mb-4">Basic Drawers</h3>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setIsOpen(true)}>Show left drawer</Button>
            <Button onClick={() => setIsRightOpen(true)} color="gray">Show right drawer</Button>
            <Button onClick={() => setIsTopOpen(true)} color="purple">Show top drawer</Button>
          </div>
        </div>

        {/* Left Drawer */}
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="mb-6 flex items-center">
            <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
              Drawer Navigation
            </h5>
          </div>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our{' '}
            <a href="#" className="text-cyan-600 underline dark:text-cyan-500 hover:no-underline">
              limited-time sale
            </a>{' '}
            for Flowbite Docs + Job Board. Unlimited access to over 190 components and interactive elements.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a href="#" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
              Learn more
            </a>
            <a href="#" className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Get access
              <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </Drawer>

        {/* Right Drawer */}
        <Drawer open={isRightOpen} onClose={() => setIsRightOpen(false)} position="right">
          <div className="mb-6 flex items-center">
            <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
              Right Drawer
            </h5>
          </div>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            This drawer slides in from the right side of the screen.
          </p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                E-commerce
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Kanban
              </a>
            </li>
          </ul>
        </Drawer>

        {/* Top Drawer */}
        <Drawer open={isTopOpen} onClose={() => setIsTopOpen(false)} position="top">
          <div className="mb-6 flex items-center">
            <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
              Top Drawer
            </h5>
          </div>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            This drawer slides down from the top of the screen. Great for notifications or alerts.
          </p>
          <div className="flex gap-4">
            <Button size="sm" onClick={() => setIsTopOpen(false)}>Accept</Button>
            <Button size="sm" color="gray" onClick={() => setIsTopOpen(false)}>Cancel</Button>
          </div>
        </Drawer>
      </div>
    </ShowcaseSection>
  )
}