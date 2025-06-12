import { Kbd } from 'flowbite-react'
import { ShowcaseCard } from "../../components"

export function KBDSection() {
  return (
    <ShowcaseCard>
      <h2 className="text-2xl font-semibold mb-6">KBD (Keyboard Keys)</h2>
      <div className="space-y-4">
        <p>
          Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to re-render an MDN page.
        </p>
        <p>
          Update your browser by pressing <Kbd>Ctrl</Kbd> + <Kbd>R</Kbd> on Windows or <Kbd>Cmd</Kbd> + <Kbd>R</Kbd> on Mac.
        </p>
        <p>
          Function keys: <Kbd>F1</Kbd> <Kbd>F2</Kbd> <Kbd>F3</Kbd> <Kbd>F4</Kbd> <Kbd>F5</Kbd>
        </p>
        <p>
          Arrow keys: <Kbd>↑</Kbd> <Kbd>↓</Kbd> <Kbd>←</Kbd> <Kbd>→</Kbd>
        </p>
      </div>
    </ShowcaseCard>
  )
}
