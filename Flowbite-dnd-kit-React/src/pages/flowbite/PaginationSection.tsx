import { useState } from 'react'
import { Pagination } from 'flowbite-react'

export function PaginationSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPage2, setCurrentPage2] = useState(3)

  const onPageChange = (page: number) => setCurrentPage(page)
  const onPageChange2 = (page: number) => setCurrentPage2(page)

  return (
    <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pagination</h2>
      <p className="text-gray-600 mb-6">
        Navigate through multiple pages of content with pagination controls.
      </p>
      
      <div className="space-y-8">
        {/* Default Pagination */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Pagination</h3>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Current page: {currentPage}
          </p>
        </div>

        {/* Pagination with Icons */}
        <div>
          <h3 className="text-lg font-medium mb-4">Pagination with Icons</h3>
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

        {/* Large Pagination */}
        <div>
          <h3 className="text-lg font-medium mb-4">Large Size Pagination</h3>
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
          <h3 className="text-lg font-medium mb-4">Compact Pagination</h3>
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
          <h3 className="text-lg font-medium mb-4">Pagination with Text</h3>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400 mb-4">
              Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to{' '}
              <span className="font-semibold text-gray-900 dark:text-white">10</span> of{' '}
              <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
            </span>
            <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} showIcons />
          </div>
        </div>
      </div>
    </section>
  )
}
