import { useState } from 'react'
import { Pagination } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSubsection } from "../../components"

export function PaginationSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPage2, setCurrentPage2] = useState(3)

  const onPageChange = (page: number) => setCurrentPage(page)
  const onPageChange2 = (page: number) => setCurrentPage2(page)

  return (
    <ShowcaseCard>
      <ShowcaseHeading>Pagination</ShowcaseHeading>
      <ShowcaseText>
        Navigate through multiple pages of content with pagination controls.
      </ShowcaseText>
      
      <div className="space-y-8">
        {/* Default Pagination */}
        <div>
          <ShowcaseSubsection>Default Pagination</ShowcaseSubsection>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
          </div>          <p className="text-sm text-gray-300 mt-2 text-center">
            Current page: {currentPage}
          </p>
        </div>        {/* Pagination with Icons */}
        <div>
          <ShowcaseSubsection>Pagination with Icons</ShowcaseSubsection>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination 
              currentPage={currentPage2} 
              totalPages={50} 
              onPageChange={onPageChange2} 
              showIcons 
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Current page: {currentPage2}
          </p>
        </div>

        {/* Large Pagination */}        <div>
          <ShowcaseSubsection>Large Size Pagination</ShowcaseSubsection>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination 
              currentPage={5} 
              totalPages={20} 
              onPageChange={() => {}} 
              showIcons 
              className="text-lg"
            />
          </div>
        </div>

        {/* Compact Pagination */}
        <div>
          <ShowcaseSubsection>Compact Pagination</ShowcaseSubsection>
          <div className="flex overflow-x-auto sm:justify-center">
            <div className="flex items-center space-x-1">
              <button className="px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                Previous
              </button>
              <button className="px-3 py-2 text-sm leading-tight text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700">
                1
              </button>
              <button className="px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                2
              </button>
              <button className="px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                3
              </button>
              <span className="px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300">
                ...
              </span>
              <button className="px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                10
              </button>
              <button className="px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Pagination with Text */}
        <div>
          <ShowcaseSubsection>Pagination with Text</ShowcaseSubsection>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400 mb-4">              Showing <span className="font-semibold text-white">1</span> to{' '}
              <span className="font-semibold text-white">10</span> of{' '}
              <span className="font-semibold text-white">100</span> Entries
            </span>
            <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} showIcons />
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}
