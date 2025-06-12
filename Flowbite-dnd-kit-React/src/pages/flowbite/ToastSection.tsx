import { useState } from 'react'
import { Toast, ToastToggle } from 'flowbite-react'
import { HiCheck, HiExclamation, HiFire, HiX } from 'react-icons/hi'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function ToastSection() {
  const [showToast1, setShowToast1] = useState(true)
  const [showToast2, setShowToast2] = useState(true)
  const [showToast3, setShowToast3] = useState(true)
  const [showToast4, setShowToast4] = useState(true)

  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Toast</h2>
      <p className="text-gray-600 mb-6">
        Show non-intrusive notifications to users with customizable toast messages.
      </p>
      
      <div className="space-y-8">
        {/* Default Toast */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Toast</h3>
          <div className="space-y-4">
            {showToast1 && (
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                  <HiCheck className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
                <ToastToggle onDismiss={() => setShowToast1(false)} />
              </Toast>
            )}
            <button
              onClick={() => setShowToast1(true)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              Show Default Toast
            </button>
          </div>
        </div>

        {/* Interactive Toast */}
        <div>
          <h3 className="text-lg font-medium mb-4">Interactive Toast</h3>
          <div className="space-y-4">
            {showToast2 && (
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                  <HiFire className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  Improve your ad performance by{' '}
                  <a href="#" className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500">
                    15 validation rules
                  </a>{' '}
                  that help you drive more clicks.
                </div>
                <ToastToggle onDismiss={() => setShowToast2(false)} />
              </Toast>
            )}
            <button
              onClick={() => setShowToast2(true)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              Show Interactive Toast
            </button>
          </div>
        </div>

        {/* Warning Toast */}
        <div>
          <h3 className="text-lg font-medium mb-4">Warning Toast</h3>
          <div className="space-y-4">
            {showToast3 && (
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-500 dark:bg-yellow-800 dark:text-yellow-200">
                  <HiExclamation className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">Warning! Something needs your attention.</div>
                <ToastToggle onDismiss={() => setShowToast3(false)} />
              </Toast>
            )}
            <button
              onClick={() => setShowToast3(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
            >
              Show Warning Toast
            </button>
          </div>
        </div>

        {/* Error Toast */}
        <div>
          <h3 className="text-lg font-medium mb-4">Error Toast</h3>
          <div className="space-y-4">
            {showToast4 && (
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                  <HiX className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
                <ToastToggle onDismiss={() => setShowToast4(false)} />
              </Toast>
            )}
            <button
              onClick={() => setShowToast4(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300"
            >
              Show Error Toast
            </button>
          </div>
        </div>

        {/* Simple Toast Examples */}
        <div>
          <h3 className="text-lg font-medium mb-4">Simple Toast Notifications</h3>
          <div className="space-y-2">
            <Toast>
              <HiCheck className="h-5 w-5 text-green-600" />
              <div className="ml-3 text-sm font-normal">
                File uploaded successfully!
              </div>
            </Toast>

            <Toast>
              <HiExclamation className="h-5 w-5 text-orange-600" />
              <div className="ml-3 text-sm font-normal">
                Your session will expire in 5 minutes.
              </div>
            </Toast>

            <Toast>
              <HiFire className="h-5 w-5 text-red-600" />
              <div className="ml-3 text-sm font-normal">
                Server error occurred. Please try again.
              </div>
            </Toast>
          </div>
        </div>

        {/* Toast with Actions */}
        <div>
          <h3 className="text-lg font-medium mb-4">Toast with Actions</h3>
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Conversation archived.
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700"
              >
                Undo
              </a>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="Close"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>
          </Toast>
        </div>
      </div>
    </ShowcaseSection>
  )
}
