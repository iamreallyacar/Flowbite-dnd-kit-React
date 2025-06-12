import { Tooltip, Button } from 'flowbite-react'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function TooltipSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tooltip</h2>
      <p className="text-gray-600 mb-6">
        Display additional information when users hover over or focus on elements.
      </p>
      
      <div className="space-y-8">
        {/* Default Tooltip */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Tooltip</h3>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Tooltip content">
              <Button>Default tooltip</Button>
            </Tooltip>
          </div>
        </div>

        {/* Tooltip Placement */}
        <div>
          <h3 className="text-lg font-medium mb-4">Tooltip Placement</h3>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Tooltip on top" placement="top">
              <Button>Tooltip top</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip on right" placement="right">
              <Button>Tooltip right</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip on bottom" placement="bottom">
              <Button>Tooltip bottom</Button>
            </Tooltip>
            
            <Tooltip content="Tooltip on left" placement="left">
              <Button>Tooltip left</Button>
            </Tooltip>
          </div>
        </div>

        {/* Tooltip Styles */}
        <div>
          <h3 className="text-lg font-medium mb-4">Tooltip Styles</h3>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Light tooltip" style="light">
              <Button>Light</Button>
            </Tooltip>
            
            <Tooltip content="Dark tooltip" style="dark">
              <Button>Dark</Button>
            </Tooltip>
            
            <Tooltip content="Auto style tooltip" style="auto">
              <Button>Auto</Button>
            </Tooltip>
          </div>
        </div>

        {/* Tooltip with Custom Content */}
        <div>
          <h3 className="text-lg font-medium mb-4">Custom Content Tooltip</h3>
          <div className="flex flex-wrap gap-4">
            <Tooltip
              content={
                <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                  <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Tooltip with list</h3>
                  </div>
                  <div className="px-3 py-2">
                    <ul className="space-y-1">
                      <li>• Feature one</li>
                      <li>• Feature two</li>
                      <li>• Feature three</li>
                    </ul>
                  </div>
                </div>
              }
            >
              <Button>Custom tooltip</Button>
            </Tooltip>
          </div>
        </div>

        {/* Tooltips on Different Elements */}
        <div>
          <h3 className="text-lg font-medium mb-4">Tooltips on Different Elements</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
              <Tooltip content="Tooltip on text">
                <span className="text-blue-600 cursor-help underline">Hover over this text</span>
              </Tooltip>
              
              <Tooltip content="Tooltip on icon">
                <svg className="w-5 h-5 text-gray-500 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </Tooltip>
              
              <Tooltip content="Tooltip on image">
                <img
                  className="w-10 h-10 rounded cursor-help"
                  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                  alt="Profile"
                />
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Tooltip Triggers */}
        <div>
          <h3 className="text-lg font-medium mb-4">Tooltip Triggers</h3>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Hover to see tooltip" trigger="hover">
              <Button>Hover trigger</Button>
            </Tooltip>
            
            <Tooltip content="Click to see tooltip" trigger="click">
              <Button>Click trigger</Button>
            </Tooltip>
          </div>
        </div>

        {/* Informational Tooltips */}
        <div>
          <h3 className="text-lg font-medium mb-4">Informational Examples</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <span>Password strength:</span>
                <Tooltip content="Password must be at least 8 characters long with numbers and special characters">
                  <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </Tooltip>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <span>File size:</span>
                <Tooltip content="Maximum file size is 10MB. Supported formats: JPG, PNG, PDF">
                  <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseSection>
  )
}
