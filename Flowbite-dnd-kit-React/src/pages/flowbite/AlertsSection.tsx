import { Alert } from 'flowbite-react'
import { 
  HiInformationCircle, 
  HiCheck, 
  HiX
} from 'react-icons/hi'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function AlertsSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Alerts</ShowcaseHeading>
      <div className="space-y-4">
        <Alert color="info" icon={HiInformationCircle}>
          <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </Alert>
        <Alert color="success" icon={HiCheck}>
          <span className="font-medium">Success alert!</span> Your operation completed successfully.
        </Alert>
        <Alert color="warning" icon={HiInformationCircle}>
          <span className="font-medium">Warning alert!</span> Something needs your attention.
        </Alert>
        <Alert color="failure" icon={HiX}>
          <span className="font-medium">Error alert!</span> Something went wrong.
        </Alert>
      </div>
    </ShowcaseCard>
  )
}
