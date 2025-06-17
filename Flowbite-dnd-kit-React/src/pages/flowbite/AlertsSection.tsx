import { Alert } from 'flowbite-react'
import { 
  HiInformationCircle, 
  HiCheck, 
  HiX,
  HiExclamationCircle,
  HiClock
} from 'react-icons/hi'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function AlertsSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Alerts</ShowcaseHeading>
      <div className="space-y-4">
        <Alert color="info" icon={HiInformationCircle}>
          <span className="font-medium">Schedule Update!</span> Production schedule has been updated for Machine A-101.
        </Alert>
        <Alert color="success" icon={HiCheck}>
          <span className="font-medium">Job Completed!</span> Order #PO-2024-158 finished ahead of schedule.
        </Alert>
        <Alert color="warning" icon={HiExclamationCircle}>
          <span className="font-medium">Material Low!</span> Raw material inventory below threshold for Machine B-205.
        </Alert>
        <Alert color="failure" icon={HiX}>
          <span className="font-medium">Machine Down!</span> CNC Machine C-301 is offline - maintenance required.
        </Alert>
        <Alert color="gray" icon={HiClock}>
          <span className="font-medium">Shift Change!</span> Night shift starting in 30 minutes - 15 operators scheduled.
        </Alert>
      </div>
    </ShowcaseCard>
  )
}
