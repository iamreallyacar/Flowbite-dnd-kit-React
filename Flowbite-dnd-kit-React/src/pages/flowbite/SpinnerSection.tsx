import { Spinner } from 'flowbite-react'

export function SpinnerSection() {
  return (
    <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spinner</h2>
      <p className="text-gray-600 mb-6">
        Loading indicators to show users that content is being processed or loaded.
      </p>
      
      <div className="space-y-8">
        {/* Default Spinner */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Spinner</h3>
          <div className="flex items-center space-x-4">
            <Spinner aria-label="Default spinner example" />
            <span className="text-sm text-gray-600">Loading...</span>
          </div>
        </div>

        {/* Different Colors */}
        <div>
          <h3 className="text-lg font-medium mb-4">Different Colors</h3>
          <div className="flex items-center space-x-4 flex-wrap gap-4">
            <div className="flex flex-col items-center space-y-2">
              <Spinner color="info" aria-label="Info spinner example" />
              <span className="text-xs text-gray-500">Info</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Spinner color="success" aria-label="Success spinner example" />
              <span className="text-xs text-gray-500">Success</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Spinner color="failure" aria-label="Failure spinner example" />
              <span className="text-xs text-gray-500">Failure</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Spinner color="warning" aria-label="Warning spinner example" />
              <span className="text-xs text-gray-500">Warning</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Spinner color="pink" aria-label="Pink spinner example" />
              <span className="text-xs text-gray-500">Pink</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Spinner color="purple" aria-label="Purple spinner example" />
              <span className="text-xs text-gray-500">Purple</span>
            </div>
          </div>
        </div>

        {/* Different Sizes */}
        <div>
          <h3 className="text-lg font-medium mb-4">Different Sizes</h3>
          <div className="flex items-center space-x-4 flex-wrap gap-6">
            <div className="flex flex-col items-center space-y-2">
              <Spinner size="xs" aria-label="Extra small spinner example" />
              <span className="text-xs text-gray-500">Extra Small</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Spinner size="sm" aria-label="Small spinner example" />
              <span className="text-xs text-gray-500">Small</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Spinner size="md" aria-label="Medium spinner example" />
              <span className="text-xs text-gray-500">Medium</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Spinner size="lg" aria-label="Large spinner example" />
              <span className="text-xs text-gray-500">Large</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Spinner size="xl" aria-label="Extra large spinner example" />
              <span className="text-xs text-gray-500">Extra Large</span>
            </div>
          </div>
        </div>

        {/* Spinner with Text */}
        <div>
          <h3 className="text-lg font-medium mb-4">Spinner with Text</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Spinner aria-label="Loading" />
              <span className="text-gray-700">Loading...</span>
            </div>
            <div className="flex items-center space-x-3">
              <Spinner color="success" aria-label="Saving" />
              <span className="text-gray-700">Saving changes...</span>
            </div>
            <div className="flex items-center space-x-3">
              <Spinner color="warning" aria-label="Processing" />
              <span className="text-gray-700">Processing your request...</span>
            </div>
          </div>
        </div>

        {/* Centered Spinner */}
        <div>
          <h3 className="text-lg font-medium mb-4">Centered Loading</h3>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex flex-col items-center justify-center space-y-3">
              <Spinner size="xl" aria-label="Center-aligned spinner example" />
              <span className="text-gray-600">Please wait while we load your data...</span>
            </div>
          </div>
        </div>

        {/* Button with Spinner */}
        <div>
          <h3 className="text-lg font-medium mb-4">Button with Spinner</h3>
          <div className="space-y-4">
            <button
              disabled
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <Spinner size="sm" className="mr-3" />
              Loading...
            </button>

            <button
              disabled
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 inline-flex items-center"
            >
              <Spinner size="sm" className="mr-3" color="success" />
              Saving...
            </button>

            <button
              disabled
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 inline-flex items-center"
            >
              <Spinner size="sm" className="mr-3" color="failure" />
              Deleting...
            </button>
          </div>
        </div>

        {/* Card with Loading State */}
        <div>
          <h3 className="text-lg font-medium mb-4">Card Loading State</h3>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <div className="flex items-center justify-center h-32">
                <div className="text-center">
                  <Spinner size="lg" aria-label="Loading content" />
                  <p className="mt-2 text-sm text-gray-500">Loading content...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Page Loading */}
        <div>
          <h3 className="text-lg font-medium mb-4">Full Page Loading Overlay</h3>
          <div className="relative bg-gray-100 rounded-lg h-64">
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
              <div className="text-center">
                <Spinner size="xl" aria-label="Full page loading" />
                <p className="mt-2 text-gray-600">Loading page content...</p>
              </div>
            </div>
            <div className="p-4 text-gray-400">
              <h4 className="text-lg font-semibold">Page Content</h4>
              <p>This content is behind the loading overlay.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
