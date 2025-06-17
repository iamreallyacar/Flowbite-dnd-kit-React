import { Tabs, TabItem } from 'flowbite-react'
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSectionHeader, ShowcaseSmallText } from "../../components"

export function TabsSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Dashboard Tabs</ShowcaseHeading>
      <ShowcaseText>
        Organize production data, machine status, and order information into tabbed sections for easy navigation.
      </ShowcaseText>
      
      <div className="space-y-8">
        {/* Default Tabs */}
        <div>
          <ShowcaseSectionHeader>Default Tabs</ShowcaseSectionHeader>
          <Tabs aria-label="Default tabs">
            <TabItem active title="Profile">
              <ShowcaseSmallText>
                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
              </ShowcaseSmallText>
            </TabItem>
            <TabItem title="Dashboard">              <ShowcaseSmallText>
                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
              </ShowcaseSmallText>
            </TabItem>
            <TabItem title="Settings">
              <ShowcaseSmallText>
                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
              </ShowcaseSmallText>
            </TabItem>            <TabItem title="Contacts">
              <ShowcaseSmallText>
                This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
              </ShowcaseSmallText>
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
    </ShowcaseCard>
  )
}
