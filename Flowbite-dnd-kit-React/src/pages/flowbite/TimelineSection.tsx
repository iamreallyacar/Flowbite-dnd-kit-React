import { Timeline, TimelineItem, TimelinePoint, TimelineContent, TimelineTime, TimelineTitle, TimelineBody } from 'flowbite-react'
import { HiCalendar, HiCheck, HiClock, HiDownload } from 'react-icons/hi'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function TimelineSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Timeline</ShowcaseHeading>
      <p className="text-gray-600 mb-6">
        Display a sequence of events in chronological order with customizable timeline components.
      </p>
      
      <div className="space-y-8">
        {/* Default Timeline */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Timeline</h3>
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>February 2022</TimelineTime>
                <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
                <TimelineBody>
                  Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                  E-commerce & Marketing pages.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>March 2022</TimelineTime>
                <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
                <TimelineBody>
                  All of the pages and components are first designed in Figma and we keep a parity between the two versions
                  even as we update the project.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>April 2022</TimelineTime>
                <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
                <TimelineBody>
                  Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        {/* Timeline with Icons */}
        <div>
          <h3 className="text-lg font-medium mb-4">Timeline with Icons</h3>
          <Timeline>
            <TimelineItem>
              <TimelinePoint icon={HiCalendar} />
              <TimelineContent>
                <TimelineTime>February 2022</TimelineTime>
                <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
                <TimelineBody>
                  Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                  E-commerce & Marketing pages.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint icon={HiCheck} />
              <TimelineContent>
                <TimelineTime>March 2022</TimelineTime>
                <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
                <TimelineBody>
                  All of the pages and components are first designed in Figma and we keep a parity between the two versions
                  even as we update the project.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint icon={HiDownload} />
              <TimelineContent>
                <TimelineTime>April 2022</TimelineTime>
                <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
                <TimelineBody>
                  Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        {/* Horizontal Timeline */}
        <div>
          <h3 className="text-lg font-medium mb-4">Horizontal Timeline</h3>
          <Timeline horizontal>
            <TimelineItem>
              <TimelinePoint icon={HiClock} />
              <TimelineContent>
                <TimelineTime>Step 1</TimelineTime>
                <TimelineTitle>Planning</TimelineTitle>
                <TimelineBody>
                  Initial project planning and requirement gathering.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint icon={HiCheck} />
              <TimelineContent>
                <TimelineTime>Step 2</TimelineTime>
                <TimelineTitle>Development</TimelineTitle>
                <TimelineBody>
                  Building the application with modern technologies.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint icon={HiDownload} />
              <TimelineContent>
                <TimelineTime>Step 3</TimelineTime>
                <TimelineTitle>Deployment</TimelineTitle>
                <TimelineBody>
                  Deploying the application to production environment.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        {/* Activity Timeline */}
        <div>
          <h3 className="text-lg font-medium mb-4">Activity Timeline</h3>
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>Just now</TimelineTime>
                <TimelineTitle>New user registered</TimelineTitle>
                <TimelineBody>
                  John Doe created a new account and completed the onboarding process.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>2 hours ago</TimelineTime>
                <TimelineTitle>Order #1234 shipped</TimelineTitle>
                <TimelineBody>
                  Package has been dispatched and is on its way to the customer.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>Yesterday</TimelineTime>
                <TimelineTitle>System maintenance completed</TimelineTitle>
                <TimelineBody>
                  Scheduled system maintenance was completed successfully with no downtime.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>3 days ago</TimelineTime>
                <TimelineTitle>New feature released</TimelineTitle>
                <TimelineBody>
                  Enhanced dashboard with improved analytics and reporting capabilities.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </ShowcaseCard>
  )
}
