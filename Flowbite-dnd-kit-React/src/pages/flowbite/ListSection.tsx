import { List, ListItem } from 'flowbite-react'
import { FaCheck, FaStar, FaArrowRight, FaShoppingCart, FaUser, FaHome } from 'react-icons/fa'
import { ShowcaseCard } from "../../components"

export function ListSection() {
  return (
    <ShowcaseCard>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">List Components</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Display series of related content in a structured list format with various styles and customization options.
        </p>
      </div>

      {/* Unordered Lists */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Unordered Lists</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Default List</h4>
            <List>
              <ListItem>At least 10 characters (and up to 100 characters)</ListItem>
              <ListItem>At least one lowercase character</ListItem>
              <ListItem>Inclusion of at least one uppercase character</ListItem>
              <ListItem>Inclusion of at least one number or symbol</ListItem>
            </List>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">With Icons</h4>
            <List>
              <ListItem icon={FaCheck}>At least 10 characters (and up to 100 characters)</ListItem>
              <ListItem icon={FaCheck}>At least one lowercase character</ListItem>
              <ListItem icon={FaCheck}>Inclusion of at least one uppercase character</ListItem>
              <ListItem icon={FaCheck}>Inclusion of at least one number or symbol</ListItem>
            </List>
          </div>
        </div>
      </div>

      {/* Ordered Lists */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ordered Lists</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Default Ordered</h4>
            <List ordered>
              <ListItem>Open the file or visit the URL in your web browser</ListItem>
              <ListItem>Review the security settings and permissions</ListItem>
              <ListItem>Check for software updates or patches</ListItem>
              <ListItem>Install the required dependencies</ListItem>
            </List>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Nested Lists</h4>
            <List ordered>
              <ListItem>
                Open the file that contains your function
                <List ordered nested className="ps-5 mt-2 space-y-1">
                  <ListItem>Check the syntax and formatting</ListItem>
                  <ListItem>Verify variable declarations</ListItem>
                </List>
              </ListItem>
              <ListItem>
                Configure your development environment
                <List ordered nested className="ps-5 mt-2 space-y-1">
                  <ListItem>Install required dependencies</ListItem>
                  <ListItem>Set up environment variables</ListItem>
                </List>
              </ListItem>
            </List>
          </div>
        </div>
      </div>

      {/* Unstyled Lists */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Unstyled Lists</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Plain List</h4>
            <List unstyled>
              <ListItem>Web-based protocol for relaying emails</ListItem>
              <ListItem>Encrypts data during transfer with TLS</ListItem>
              <ListItem>Simple Mail Transfer Protocol</ListItem>
              <ListItem>SMTP AUTH extension for authentication</ListItem>
            </List>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">With Custom Icons</h4>
            <List unstyled>
              <ListItem className="flex items-center space-x-3">
                <FaStar className="text-yellow-400" />
                <span>Premium features included</span>
              </ListItem>
              <ListItem className="flex items-center space-x-3">
                <FaShoppingCart className="text-green-500" />
                <span>Easy online ordering</span>
              </ListItem>
              <ListItem className="flex items-center space-x-3">
                <FaUser className="text-blue-500" />
                <span>User account management</span>
              </ListItem>
              <ListItem className="flex items-center space-x-3">
                <FaHome className="text-purple-500" />
                <span>Home delivery available</span>
              </ListItem>
            </List>
          </div>
        </div>
      </div>

      {/* Advanced Examples */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Advanced Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Description List</h4>
            <div className="space-y-3">
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Name:</dt>
                <dd className="text-gray-600 dark:text-gray-400">Flowbite</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Category:</dt>
                <dd className="text-gray-600 dark:text-gray-400">UI Component Library</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Technology:</dt>
                <dd className="text-gray-600 dark:text-gray-400">React, TypeScript, Tailwind CSS</dd>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Interactive List</h4>
            <List>
              <ListItem className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                <div className="flex items-center justify-between">
                  <span>Dashboard Overview</span>
                  <FaArrowRight className="text-gray-400" />
                </div>
              </ListItem>
              <ListItem className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                <div className="flex items-center justify-between">
                  <span>User Management</span>
                  <FaArrowRight className="text-gray-400" />
                </div>
              </ListItem>
              <ListItem className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                <div className="flex items-center justify-between">
                  <span>Settings & Configuration</span>
                  <FaArrowRight className="text-gray-400" />
                </div>
              </ListItem>
              <ListItem className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                <div className="flex items-center justify-between">
                  <span>Analytics & Reports</span>
                  <FaArrowRight className="text-gray-400" />
                </div>
              </ListItem>
            </List>
          </div>
        </div>
      </div>

      {/* Styles and Customization */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Styles & Customization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Custom Spacing</h4>
            <List className="space-y-4">
              <ListItem icon={FaCheck} className="text-green-600 dark:text-green-400">
                Large spacing between items
              </ListItem>
              <ListItem icon={FaCheck} className="text-green-600 dark:text-green-400">
                Better visual separation
              </ListItem>
              <ListItem icon={FaCheck} className="text-green-600 dark:text-green-400">
                Enhanced readability
              </ListItem>
            </List>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Compact List</h4>
            <List className="space-y-1 text-sm">
              <ListItem>• Compact design</ListItem>
              <ListItem>• Minimal spacing</ListItem>
              <ListItem>• Small text size</ListItem>
              <ListItem>• Dense information</ListItem>
              <ListItem>• Space efficient</ListItem>
            </List>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}
