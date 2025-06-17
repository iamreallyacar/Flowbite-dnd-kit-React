import { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSubsection, ShowcaseSmallText } from "../../components"

export function ModalSection() {
  const [openModal, setOpenModal] = useState(false)
  const [openSmallModal, setOpenSmallModal] = useState(false)
  const [openLargeModal, setOpenLargeModal] = useState(false)

  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Modals</ShowcaseHeading>
      <ShowcaseText>
        Interactive overlays for production order details, work confirmations, and critical actions.
      </ShowcaseText>
      
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
          <Button onClick={() => setOpenSmallModal(true)} color="gray">Small modal</Button>
          <Button onClick={() => setOpenLargeModal(true)} color="success">Large modal</Button>
        </div>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader>Terms of Service</ModalHeader>
          <ModalBody>
            <div className="space-y-6">
              <ShowcaseText className="mb-4">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </ShowcaseText>
              <ShowcaseText className="mb-4">
                The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </ShowcaseText>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </ModalFooter>
        </Modal>

        <Modal show={openSmallModal} size="md" onClose={() => setOpenSmallModal(false)} popup>
          <ModalHeader />
          <ModalBody>
            <div className="text-center">
              <ShowcaseSubsection className="mb-5 text-center">
                Are you sure you want to delete this product?
              </ShowcaseSubsection>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => setOpenSmallModal(false)}>
                  Yes, I'm sure
                </Button>
                <Button color="gray" onClick={() => setOpenSmallModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>        <Modal show={openLargeModal} size="7xl" onClose={() => setOpenLargeModal(false)}>
          <ModalHeader>Large modal</ModalHeader>
          <ModalBody>
            <div className="space-y-6">
              <ShowcaseText>
                This is a large modal with more content space. It can be used for forms, detailed information, or any content that requires more room.
              </ShowcaseText>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ShowcaseSubsection>Left Column</ShowcaseSubsection>
                  <ShowcaseSmallText>Content for the left side of the modal.</ShowcaseSmallText>
                </div>
                <div>
                  <ShowcaseSubsection>Right Column</ShowcaseSubsection>
                  <ShowcaseSmallText>Content for the right side of the modal.</ShowcaseSmallText>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenLargeModal(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    </ShowcaseCard>
  )
}
