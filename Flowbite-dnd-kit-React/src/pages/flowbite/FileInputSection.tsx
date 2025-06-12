import { FileInput, Label } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseSubheading, ShowcaseDescription } from "../../components"

export function FileInputSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>File Input</ShowcaseHeading>
      <ShowcaseDescription>
        Allow users to upload files with customizable file input components.
      </ShowcaseDescription>

      <div className="space-y-8">
        {/* Default File Input */}
        <div>
          <ShowcaseSubheading>Default File Input</ShowcaseSubheading>
          <div className="space-y-4">
            <div>
              <Label htmlFor="file-upload" className="mb-2 block">
                Upload file
              </Label>
              <FileInput id="file-upload" />
            </div>
          </div>
        </div>

        {/* File Input with Helper Text */}
        <div>
          <ShowcaseSubheading>File Input with Helper Text</ShowcaseSubheading>
          <div className="space-y-4">
            <div>
              <Label htmlFor="file-upload-helper-text" className="mb-2 block">
                Upload file
              </Label>
              <FileInput
                id="file-upload-helper-text"
              />
							<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
								SVG, PNG, JPG or GIF (MAX. 800x400px).
							</p>
            </div>
          </div>
        </div>

        {/* Multiple File Input */}
        <div>
          <ShowcaseSubheading>Multiple File Input</ShowcaseSubheading>
          <div className="space-y-4">
            <div>
              <Label htmlFor="multiple-file-upload" className="mb-2 block">
                Upload multiple files
              </Label>
              <FileInput id="multiple-file-upload" multiple />
            </div>
          </div>
        </div>

        {/* File Input Sizes */}
        <div>
          <ShowcaseSubheading>Different Sizes</ShowcaseSubheading>
          <div className="space-y-4">
            <div>
              <Label htmlFor="small-file-input" className="mb-2 block">
                Small file input
              </Label>
              <FileInput id="small-file-input" sizing="sm" />
            </div>
            
            <div>
              <Label htmlFor="default-file-input" className="mb-2 block">
                Default file input
              </Label>
              <FileInput id="default-file-input" sizing="md" />
            </div>
            
            <div>
              <Label htmlFor="large-file-input" className="mb-2 block">
                Large file input
              </Label>
              <FileInput id="large-file-input" sizing="lg" />
            </div>
          </div>
        </div>

        {/* Disabled File Input */}
        <div>
          <ShowcaseSubheading>Disabled State</ShowcaseSubheading>
          <div className="space-y-4">
            <div>
              <Label htmlFor="disabled-file-input" className="mb-2 block">
                Disabled file input
              </Label>
              <FileInput id="disabled-file-input" disabled />
            </div>
          </div>
        </div>

        {/* Custom File Input */}
        <div>
          <ShowcaseSubheading>Custom Styled File Input</ShowcaseSubheading>
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* File Input with Validation */}
        <div>
          <ShowcaseSubheading>File Input with Validation</ShowcaseSubheading>
          <div className="space-y-4">
            <div>
              <Label htmlFor="validated-file-input" className="mb-2 block">
                Upload document (Required)
              </Label>
              <FileInput
                id="validated-file-input"
                color="failure"
              />
							<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
								Please upload a valid document file.
							</p>
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Error:</span> Please select a file to upload.
              </p>
            </div>
          </div>
        </div>

        {/* File Input with Accept Attribute */}
        <div>
          <ShowcaseSubheading>File Type Restrictions</ShowcaseSubheading>
          <div className="space-y-4">
            <div>
              <Label htmlFor="image-upload" className="mb-2 block">
                Upload image only
              </Label>
              <FileInput
                id="image-upload"
                accept="image/*"
              />
							<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
								Only image files are allowed (JPG, PNG, GIF, etc.)
							</p>
            </div>
            
            <div>
              <Label htmlFor="pdf-upload" className="mb-2 block">
                Upload PDF only
              </Label>
              <FileInput
                id="pdf-upload"
                accept=".pdf"
              />
							<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Only PDF files are allowed
              </p>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}