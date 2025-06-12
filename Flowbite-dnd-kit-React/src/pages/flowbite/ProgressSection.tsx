import { Progress } from 'flowbite-react'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function ProgressSection() {
  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Progress Bar</h2>
      <p className="text-gray-600 mb-6">
        Show the completion progress of tasks or processes with customizable progress bars.
      </p>
      
      <div className="space-y-8">
        {/* Default Progress */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Progress</h3>
          <div className="space-y-4">
            <div>
              <Progress progress={45} />
              <p className="text-sm text-gray-500 mt-1">45% Complete</p>
            </div>
            <div>
              <Progress progress={50} />
              <p className="text-sm text-gray-500 mt-1">50% Complete</p>
            </div>
            <div>
              <Progress progress={75} />
              <p className="text-sm text-gray-500 mt-1">75% Complete</p>
            </div>
          </div>
        </div>

        {/* Progress with Labels */}
        <div>
          <h3 className="text-lg font-medium mb-4">Progress with Labels</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">45%</span>
              </div>
              <Progress progress={45} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-purple-700 dark:text-white">React</span>
                <span className="text-sm font-medium text-purple-700 dark:text-white">50%</span>
              </div>
              <Progress progress={50} color="purple" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-cyan-700 dark:text-white">TypeScript</span>
                <span className="text-sm font-medium text-cyan-700 dark:text-white">75%</span>
              </div>
              <Progress progress={75} color="cyan" />
            </div>
          </div>
        </div>

        {/* Different Colors */}
        <div>
          <h3 className="text-lg font-medium mb-4">Different Colors</h3>
          <div className="space-y-4">
            <Progress progress={45} color="blue" />
            <Progress progress={50} color="gray" />
            <Progress progress={60} color="red" />
            <Progress progress={70} color="green" />
            <Progress progress={80} color="yellow" />
            <Progress progress={90} color="indigo" />
            <Progress progress={95} color="purple" />
          </div>
        </div>

        {/* Different Sizes */}
        <div>
          <h3 className="text-lg font-medium mb-4">Different Sizes</h3>
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
    </ShowcaseSection>
  )
}
