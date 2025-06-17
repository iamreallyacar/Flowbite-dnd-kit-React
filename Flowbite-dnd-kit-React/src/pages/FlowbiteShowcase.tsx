import { Link } from 'react-router-dom'
import { 
  AccordionSection,
  AlertsSection,
  AvatarSection,
  BadgesSection,
  BannerSection,
  BlockquoteSection,
  BreadcrumbSection,
  ButtonGroupSection,
  ButtonsSection,
  CardsSection,
  CarouselSection,
  ClipboardSection,
  DatepickerSection,
  DrawerSection,
  DropdownSection,
  FileInputSection,
  FloatingLabelSection,
  FooterSection,
  FormsSection,
  HRSection,
  KBDSection,
  ListGroupSection,
  ListSection,
  ModalSection,
  NavbarSection,
  PaginationSection,
  ProgressSection,
  RatingSection,
  SpinnerSection,
  TableSection,
  TabsSection,
  TimelineSection,
  ToastSection,
  TooltipSection
} from './flowbite'

export function FlowbiteShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Main
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Flowbite Components in Production Scheduling
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Explore how Flowbite React components enhance production scheduling interfaces. 
            Each section demonstrates practical applications of UI components in manufacturing workflows.
          </p>
        </div>        <div className="space-y-8">
          <AccordionSection />
          <AlertsSection />
          <AvatarSection />
          <BadgesSection />
          <BannerSection />
          <BlockquoteSection />
          <BreadcrumbSection />
          <ButtonGroupSection />
          <ButtonsSection />
          <CardsSection />
          <CarouselSection />
          <ClipboardSection />
          <DatepickerSection />
          <DrawerSection />
          <DropdownSection />
          <FileInputSection />
          <FloatingLabelSection />
          <FooterSection />
          <FormsSection />
          <HRSection />
          <KBDSection />
          <ListGroupSection />
          <ListSection />
          <ModalSection />
          <NavbarSection />
          <PaginationSection />
          <ProgressSection />
          <RatingSection />
          <SpinnerSection />
          <TableSection />
          <TabsSection />
          <TimelineSection />
          <ToastSection />
          <TooltipSection />
        </div>
      </div>
    </div>
  )
}