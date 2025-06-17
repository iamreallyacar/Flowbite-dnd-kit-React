import { Progress } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSectionHeader, ShowcaseCaptionText } from "../../components"

export function ProgressSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Progress Tracking</ShowcaseHeading>
      <ShowcaseText>
        Monitor job completion, machine utilization, and production targets with real-time progress indicators.
      </ShowcaseText>
      
      <div className="space-y-8">
        {/* Job Progress */}
        <div>
          <ShowcaseSectionHeader>Active Job Progress</ShowcaseSectionHeader>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Order #PO-2024-158 - Widget Assembly</span>
                <span>850 / 1000 units</span>
              </div>              <Progress progress={85} color="green" />
              <ShowcaseCaptionText className="mt-1">85% Complete - On Schedule</ShowcaseCaptionText>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Order #PO-2024-159 - Gear Production</span>
                <span>300 / 500 units</span>
              </div>
              <Progress progress={60} color="blue" />
              <ShowcaseCaptionText className="mt-1">60% Complete - 2 hours remaining</ShowcaseCaptionText>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Order #PO-2024-160 - Motor Assembly</span>
                <span>120 / 800 units</span>
              </div>
              <Progress progress={15} color="yellow" />
              <ShowcaseCaptionText className="mt-1">15% Complete - Behind Schedule</ShowcaseCaptionText>
            </div>
          </div>
        </div>        {/* Machine Utilization */}
        <div>
          <ShowcaseSectionHeader>Machine Utilization</ShowcaseSectionHeader>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-green-700 dark:text-white">CNC Machine A-101</span>
                <span className="text-sm font-medium text-green-700 dark:text-white">92%</span>
              </div>
              <Progress progress={92} color="green" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">Assembly Line B-205</span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">78%</span>
              </div>
              <Progress progress={78} color="blue" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-red-700 dark:text-white">Paint Booth C-301</span>
                <span className="text-sm font-medium text-red-700 dark:text-white">45%</span>
              </div>
              <Progress progress={45} color="red" />
            </div>
          </div>
        </div>        {/* Daily Production Targets */}
        <div>
          <ShowcaseSectionHeader>Daily Production Targets</ShowcaseSectionHeader>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Widget Production Target</span>
                <span>2,340 / 2,500 units</span>
              </div>
              <Progress progress={93} color="green" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Quality Check Target</span>
                <span>1,890 / 2,340 units</span>
              </div>
              <Progress progress={81} color="blue" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Packaging Target</span>
                <span>1,256 / 1,890 units</span>
              </div>
              <Progress progress={66} color="yellow" />
            </div>
            <Progress progress={90} color="indigo" />
            <Progress progress={95} color="purple" />
          </div>
        </div>        {/* Different Sizes */}
        <div>
          <ShowcaseSectionHeader>Different Sizes</ShowcaseSectionHeader>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Small</p>
              <Progress progress={45} size="sm" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Medium (Default)</p>
              <Progress progress={50} size="md" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Large</p>
              <Progress progress={75} size="lg" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Extra Large</p>
              <Progress progress={85} size="xl" />
            </div>
          </div>
        </div>

        {/* Progress with Text Inside */}
        <div>
          <h3 className="text-lg font-medium mb-4">Progress with Text Inside</h3>
          <div className="space-y-4">
            <Progress 
              progress={45} 
              textLabel="45%" 
              textLabelPosition="inside" 
              size="lg" 
            />
            <Progress 
              progress={75} 
              textLabel="75%" 
              textLabelPosition="inside" 
              size="lg" 
              color="green" 
            />
          </div>
        </div>

        {/* Animated Progress */}
        <div>
          <h3 className="text-lg font-medium mb-4">Progress Indicators</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">File Upload Progress</p>
              <Progress progress={67} color="blue" />
              <p className="text-xs text-gray-500 mt-1">Uploading file.pdf (67%)</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Download Progress</p>
              <Progress progress={89} color="green" />
              <p className="text-xs text-gray-500 mt-1">Downloading update.zip (89%)</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Installation Progress</p>
              <Progress progress={23} color="yellow" />
              <p className="text-xs text-gray-500 mt-1">Installing dependencies (23%)</p>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}
