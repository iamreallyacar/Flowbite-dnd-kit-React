import { Tabs, TabItem } from 'flowbite-react'
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function TabsSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tabs</h2>
      <p className="text-gray-600 mb-6">
        Organize content into multiple panels, allowing users to switch between different sections.
      </p>
      
      <div className="space-y-8">
        {/* Default Tabs */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Tabs</h3>
          <Tabs aria-label="Default tabs">
            <TabItem active title="Profile">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
              </p>
            </TabItem>
            <TabItem title="Dashboard">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
              </p>
            </TabItem>
            <TabItem title="Settings">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
              </p>
            </TabItem>
            <TabItem title="Contacts">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
              </p>
            </TabItem>
            <TabItem disabled title="Disabled">
              <p className="text-sm text-gray-500 dark:text-gray-400">This content should not be shown.</p>
            </TabItem>
          </Tabs>
        </div>

        {/* Tabs with Icons */}
        <div>
          <h3 className="text-lg font-medium mb-4">Tabs with Icons</h3>
          <Tabs aria-label="Tabs with icons">
            <TabItem active title="Profile" icon={HiUserCircle}>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content for the Profile tab with an icon.
              </p>
            </TabItem>
            <TabItem title="Dashboard" icon={MdDashboard}>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content for the Dashboard tab with an icon.
              </p>
            </TabItem>
            <TabItem title="Settings" icon={HiAdjustments}>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content for the Settings tab with an icon.
              </p>
            </TabItem>
            <TabItem title="Contacts" icon={HiClipboardList}>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content for the Contacts tab with an icon.
              </p>
            </TabItem>
          </Tabs>
        </div>

        {/* Pills Style Tabs */}
        <div>
          <h3 className="text-lg font-medium mb-4">Pills Style Tabs</h3>
          <Tabs aria-label="Pills">
            <TabItem active title="Tab 1">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Content for Tab 1 in pills style.
              </p>
            </TabItem>
            <TabItem title="Tab 2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Content for Tab 2 in pills style.
              </p>
            </TabItem>
            <TabItem title="Tab 3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Content for Tab 3 in pills style.
              </p>
            </TabItem>
          </Tabs>
        </div>

        {/* Underline Style Tabs */}
        <div>
          <h3 className="text-lg font-medium mb-4">Underline Style Tabs</h3>
          <Tabs aria-label="Underline Tabs">
            <TabItem active title="Profile">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Profile content with underline style.
              </p>
            </TabItem>
            <TabItem title="Dashboard">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dashboard content with underline style.
              </p>
            </TabItem>
            <TabItem title="Settings">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Settings content with underline style.
              </p>
            </TabItem>
          </Tabs>
        </div>

        {/* Full Width Tabs */}
        <div>
          <h3 className="text-lg font-medium mb-4">Full Width Tabs</h3>
          <Tabs aria-label="Full width tabs">
            <TabItem title="Profile">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Profile content in full width tabs.
              </p>
            </TabItem>
            <TabItem title="Dashboard">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dashboard content in full width tabs.
              </p>
            </TabItem>
            <TabItem title="Settings">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Settings content in full width tabs.
              </p>
            </TabItem>
          </Tabs>
        </div>
      </div>
    </ShowcaseSection>
  )
}
