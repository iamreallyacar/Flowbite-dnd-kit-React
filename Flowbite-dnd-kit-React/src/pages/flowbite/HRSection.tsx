import { HR, HRTrimmed } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function HRSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Horizontal Rule (HR)</ShowcaseHeading>
      <p className="text-gray-600 mb-6">
        Create visual separation between content sections with horizontal divider lines.
      </p>
      
      <div className="space-y-8">
        {/* Default HR */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Horizontal Rule</h3>
          <div className="space-y-4">
            <p className="text-gray-600">Content above the divider line.</p>
            <HR />
            <p className="text-gray-600">Content below the divider line.</p>
          </div>
        </div>

        {/* HR with Text */}
        <div>
          <h3 className="text-lg font-medium mb-4">HR with Text</h3>
          <div className="space-y-4">
            <p className="text-gray-600">This is some content above the divider.</p>
            <div className="flex items-center">
              <HR className="flex-1" />
              <span className="px-3 text-gray-500 bg-white">OR</span>
              <HR className="flex-1" />
            </div>
            <p className="text-gray-600">This is some content below the divider.</p>
          </div>
        </div>

        {/* HR with Icon */}
        <div>
          <h3 className="text-lg font-medium mb-4">HR with Icon</h3>
          <div className="space-y-4">
            <p className="text-gray-600">Section with icon divider.</p>
            <div className="flex items-center">
              <HR className="flex-1" />
              <div className="px-3">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <HR className="flex-1" />
            </div>
            <p className="text-gray-600">Content continues here.</p>
          </div>
        </div>

        {/* Trimmed HR */}
        <div>
          <h3 className="text-lg font-medium mb-4">Trimmed Horizontal Rule</h3>
          <div className="space-y-4">
            <p className="text-gray-600">Content with trimmed divider.</p>
            <HRTrimmed />
            <p className="text-gray-600">Notice the shorter divider line.</p>
          </div>
        </div>

        {/* Custom HR Styles */}
        <div>
          <h3 className="text-lg font-medium mb-4">Custom Styles</h3>
          <div className="space-y-6">
            {/* Thick HR */}
            <div>
              <p className="text-gray-600 mb-4">Thick horizontal rule:</p>
              <hr className="h-1 bg-gray-200 border-0 rounded" />
            </div>

            {/* Colored HR */}
            <div>
              <p className="text-gray-600 mb-4">Colored horizontal rule:</p>
              <hr className="h-px bg-blue-500 border-0" />
            </div>

            {/* Dashed HR */}
            <div>
              <p className="text-gray-600 mb-4">Dashed horizontal rule:</p>
              <hr className="border-dashed border-gray-300" />
            </div>

            {/* Dotted HR */}
            <div>
              <p className="text-gray-600 mb-4">Dotted horizontal rule:</p>
              <hr className="border-dotted border-gray-300 border-2" />
            </div>
          </div>
        </div>

        {/* HR in Cards */}
        <div>
          <h3 className="text-lg font-medium mb-4">HR in Card Layout</h3>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h4>
              <p className="text-gray-600">This is the main content of the card with some descriptive text.</p>
            </div>
            <HR />
            <div className="p-6">
              <h5 className="text-md font-medium text-gray-900 mb-2">Additional Information</h5>
              <p className="text-gray-600">More content separated by a horizontal rule.</p>
            </div>
            <HR />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Last updated: 2 days ago</span>
                <button className="text-sm text-blue-600 hover:underline">Edit</button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Dividers */}
        <div>
          <h3 className="text-lg font-medium mb-4">Section Dividers</h3>
          <div className="space-y-8">
            <section>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Section 1: Introduction</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>

            <HR />

            <section>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Section 2: Features</h4>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            <HR />

            <section>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Section 3: Conclusion</h4>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </section>
          </div>
        </div>

        {/* HR with Gradients */}
        <div>
          <h3 className="text-lg font-medium mb-4">Gradient Dividers</h3>
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 mb-4">Blue gradient divider:</p>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>

            <div>
              <p className="text-gray-600 mb-4">Purple to pink gradient:</p>
              <div className="h-px bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>

            <div>
              <p className="text-gray-600 mb-4">Multi-color gradient:</p>
              <div className="h-px bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}
