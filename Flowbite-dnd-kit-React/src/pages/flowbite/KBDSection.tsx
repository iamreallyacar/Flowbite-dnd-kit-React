import { Kbd } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText } from "../../components"

export function KBDSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Keyboard Shortcuts & Keys</ShowcaseHeading>
      <ShowcaseText>
        Display keyboard shortcuts and key combinations for production system navigation and controls.
      </ShowcaseText>
      <div className="space-y-4">
        <ShowcaseText>
          Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to re-render an MDN page.
        </ShowcaseText>
        <ShowcaseText>
          Update your browser by pressing <Kbd>Ctrl</Kbd> + <Kbd>R</Kbd> on Windows or <Kbd>Cmd</Kbd> + <Kbd>R</Kbd> on Mac.
        </ShowcaseText>
        <ShowcaseText>
          Function keys: <Kbd>F1</Kbd> <Kbd>F2</Kbd> <Kbd>F3</Kbd> <Kbd>F4</Kbd> <Kbd>F5</Kbd>
        </ShowcaseText>
        <ShowcaseText>
          Arrow keys: <Kbd>↑</Kbd> <Kbd>↓</Kbd> <Kbd>←</Kbd> <Kbd>→</Kbd>
        </ShowcaseText>
      </div>
    </ShowcaseCard>
  )
}
