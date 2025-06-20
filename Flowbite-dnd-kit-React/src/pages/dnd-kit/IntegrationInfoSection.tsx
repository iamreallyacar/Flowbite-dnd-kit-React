import { 
  ShowcaseCard, 
  ShowcaseSubsection,
  ShowcaseSectionHeader
} from '../../components/ShowcaseTheme'

export function IntegrationInfoSection() {
  return (
    <ShowcaseCard>
      <ShowcaseSubsection>Integration Features</ShowcaseSubsection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ShowcaseSectionHeader>Drag & Drop Library Features</ShowcaseSectionHeader>
          <ul className="text-gray-300 space-y-1">
            <li>• Accessible drag and drop</li>
            <li>• Keyboard navigation support</li>
            <li>• Touch device compatibility</li>
            <li>• Collision detection algorithms</li>
            <li>• Sortable contexts</li>
          </ul>
        </div>
        <div>
          <ShowcaseSectionHeader>UI Library Integration</ShowcaseSectionHeader>
          <ul className="text-gray-300 space-y-1">
            <li>• Beautiful pre-styled components</li>
            <li>• Consistent design system</li>
            <li>• Responsive layouts</li>
            <li>• CSS framework utilities</li>
            <li>• Easy customization</li>
          </ul>
        </div>
      </div>
    </ShowcaseCard>
  )
}
