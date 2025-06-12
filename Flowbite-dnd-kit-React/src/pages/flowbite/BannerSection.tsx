import { Banner, Button } from 'flowbite-react'
import { HiX } from 'react-icons/hi'
import { MdAnnouncement } from 'react-icons/md'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function BannerSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold text-gray-200 mb-6">Banner</h2>
      <div className="space-y-4">
        <Banner>
          <div className="flex w-full justify-between border-b border-gray-200 bg-gray-200 p-4">
            <div className="mx-auto flex items-center">
              <p className="flex items-center text-sm font-normal text-gray-500">
                <MdAnnouncement className="mr-4 h-4 w-4" />
                <span className="[&_p]:inline">
                  New brand identity has been launched for the{' '}
                  <a
                    href="https://flowbite.com"
                    className="decoration-1 decoration-solid underline underline-offset-2 hover:decoration-blue-700"
                  >
                    Flowbite Library
                  </a>
                </span>
              </p>
            </div>
            <Button color="gray" className="border-0 bg-transparent text-gray-500" size="xs">
              <HiX className="h-4 w-4" />
            </Button>
          </div>
        </Banner>

        <Banner>
          <div className="flex w-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:flex-row">
            <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
              <a
                href="https://flowbite.com/"
                className="mb-2 flex items-center border-gray-200 md:mb-0 md:mr-4 md:border-r md:pr-4"
              >
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-2 h-6" alt="Flowbite Logo" />
                <span className="self-center whitespace-nowrap text-lg font-semibold text-gray-900">Flowbite</span>
              </a>
              <p className="flex items-center text-sm font-normal text-gray-500">
                Get started with a free and open-source component library for Tailwind CSS
              </p>
            </div>
            <div className="flex shrink-0 items-center">
              <a
                href="#"
                className="mr-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
              >
                Learn more
              </a>
              <a
                href="#"
                className="mr-2 inline-flex items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Get started{' '}
                <svg
                  className="ml-2 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <Button color="gray" className="border-0 bg-transparent text-gray-500" size="xs">
                <HiX className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Banner>
      </div>
    </ShowcaseSection>
  )
}
