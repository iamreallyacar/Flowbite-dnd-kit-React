import { Timeline, TimelineItem, TimelinePoint, TimelineContent, TimelineTime, TimelineTitle, TimelineBody } from 'flowbite-react'
import { HiCalendar, HiCheck, HiClock, HiCog, HiExclamationCircle } from 'react-icons/hi'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSectionHeader } from "../../components"

export function TimelineSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Timeline</ShowcaseHeading>
      <ShowcaseText>
        Track production milestones, job progress, and scheduling events in chronological order. Perfect for monitoring manufacturing workflows and shift activities.
      </ShowcaseText>
      
      <div className="space-y-8">
        {/* Production Schedule Timeline */}
        <div>
          <ShowcaseSectionHeader>Today's Production Schedule</ShowcaseSectionHeader>
          <Timeline>
            <TimelineItem>
              <TimelinePoint icon={HiClock} />
              <TimelineContent>
                <TimelineTime>6:00 AM - Morning Shift Start</TimelineTime>
                <TimelineTitle>Day Shift Operations Begin</TimelineTitle>
                <TimelineBody>
                  15 operators clocked in. All machines pre-checked and ready for production. 
                  Priority jobs PO-2024-158 and QC-24-890 assigned to primary lines.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint icon={HiCog} />
              <TimelineContent>
                <TimelineTime>8:30 AM - Job Started</TimelineTime>
                <TimelineTitle>Widget Assembly Line A-101 Production Begin</TimelineTitle>
                <TimelineBody>
                  Order PO-2024-158 started on Assembly Line A-101. Target: 1000 units. 
                  Estimated completion: 2:30 PM. Current status: 25% complete (250 units).
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint icon={HiCheck} />
              <TimelineContent>
                <TimelineTime>11:45 AM - Quality Milestone</TimelineTime>
                <TimelineTitle>First Quality Control Check Passed</TimelineTitle>
                <TimelineBody>
                  500 units passed quality inspection with 99.8% acceptance rate. 
                  Production continues at optimal pace with no defects detected.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint icon={HiExclamationCircle} />
              <TimelineContent>
                <TimelineTime>1:15 PM - Alert</TimelineTime>
                <TimelineTitle>Material Inventory Low Warning</TimelineTitle>
                <TimelineBody>
                  Raw material inventory for Widget Assembly below 20% threshold. 
                  Procurement team notified. No immediate impact on current production.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        {/* Timeline with Icons */}
        <div>
          <h3 className="text-lg font-medium mb-4">Timeline with Icons</h3>
          <Timeline>            <TimelineItem>
              <TimelinePoint icon={HiCalendar} />
              <TimelineContent>
                <TimelineTime>February 2022</TimelineTime>
                <TimelineTitle>Application UI code in CSS Framework</TimelineTitle>
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
              </TimelineContent>            </TimelineItem>            <TimelineItem>
              <TimelinePoint icon={HiCalendar} />
              <TimelineContent>
                <TimelineTime>April 2022</TimelineTime>
                <TimelineTitle>E-Commerce UI code in CSS Framework</TimelineTitle>
                <TimelineBody>
                  Get started with dozens of web components and interactive elements built on top of CSS framework.
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
            </TimelineItem>            <TimelineItem>
              <TimelinePoint icon={HiCheck} />
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
