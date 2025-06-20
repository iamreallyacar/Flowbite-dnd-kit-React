import { Button } from 'flowbite-react'
import { useState } from 'react'
import { HiClipboard, HiCheck } from 'react-icons/hi'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function ClipboardSection() {
  const [copied, setCopied] = useState(false)
  const textToCopy = "npm install ui-component-library"

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <ShowcaseCard>
      <ShowcaseHeading>Clipboard</ShowcaseHeading>
      <div className="space-y-4">
        <div className="relative">
          <label htmlFor="npm-install" className="sr-only">
            Label
          </label>
          <input
            id="npm-install"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
            value={textToCopy}
            disabled
            readOnly
          />
          <Button
            onClick={handleCopy}
            className="absolute right-2.5 top-1/2 -translate-y-1/2"
            size="sm"
            color={copied ? "green" : "blue"}
          >
            {copied ? (
              <>
                <HiCheck className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <HiClipboard className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
      </div>
    </ShowcaseCard>
  )
}
