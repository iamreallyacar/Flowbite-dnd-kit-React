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
import { ShowcaseSectionTitle, ShowcaseSectionSubtitle } from '../components/ShowcaseSection'

export function FlowbiteShowcase() {  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Main
          </Link>
          <ShowcaseSectionTitle>
            Flowbite React Components Showcase
          </ShowcaseSectionTitle>
          <ShowcaseSectionSubtitle>
            Subtitle 1
          </ShowcaseSectionSubtitle>
        </div>
        <AccordionSection />
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