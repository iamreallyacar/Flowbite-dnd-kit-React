import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react"
import { ShowcaseCard, ShowcaseHeading, ShowcaseText } from "../../components"

export function AccordionSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Accordion</ShowcaseHeading>
      <ShowcaseText>
        Collapsible components to show and hide content sections.
      </ShowcaseText>
      
      <div className="space-y-6">
        {/* Default Accordion */}
        <div>
          <h3 className="text-lg text-gray-200 font-medium mb-4">Default Accordion</h3>
          <Accordion>
            <AccordionPanel>
              <AccordionTitle>Accordion 1</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Description 1
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Accordion 2</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Description 2
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Accordion 3</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Description 3
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>

        {/* Collapse All */}
        <div>
          <h3 className="text-lg text-gray-200 font-medium mb-4">Collapse All</h3>
          <Accordion collapseAll>
            <AccordionPanel>
              <AccordionTitle>Accordion 1</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Description 1
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Accordion 2</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Description 2
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>        </div>
      </div>
    </ShowcaseCard>
  )
}
