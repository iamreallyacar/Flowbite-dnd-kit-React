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

export function FlowbiteShowcase() {  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Main
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Flowbite React Components Showcase
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore various Flowbite React components integrated with Tailwind CSS
          </p>
        </div>        <AccordionSection />
        <AlertsSection />
        <AvatarSection />
        <BadgesSection />
        <BannerSection />
        <BlockquoteSection />
        <BreadcrumbSection />
        <ButtonsSection />
        <ButtonGroupSection />
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
  )
}