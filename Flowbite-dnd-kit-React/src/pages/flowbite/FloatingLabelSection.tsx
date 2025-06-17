import { FloatingLabel } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSectionHeader } from "../../components"

export function FloatingLabelSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Form Labels</ShowcaseHeading>
      <ShowcaseText>
        Input fields with floating labels for production order forms, machine data entry, and system configuration.
      </ShowcaseText>
      
      <div className="space-y-8">
        {/* Default Floating Label */}
        <div>
          <ShowcaseSectionHeader>Default Floating Label</ShowcaseSectionHeader>
          <div className="grid gap-6 md:grid-cols-2">
            <FloatingLabel variant="filled" label="Email" />
            <FloatingLabel variant="filled" label="Password" type="password" />
          </div>
        </div>

        {/* Outlined Floating Label */}
        <div>
          <ShowcaseSectionHeader>Outlined Floating Label</ShowcaseSectionHeader>
          <div className="grid gap-6 md:grid-cols-2">
            <FloatingLabel variant="outlined" label="Email" />
            <FloatingLabel variant="outlined" label="Password" type="password" />
          </div>
        </div>

        {/* Standard Floating Label */}
        <div>
          <h3 className="text-lg font-medium mb-4">Standard Floating Label</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <FloatingLabel variant="standard" label="Email" />
            <FloatingLabel variant="standard" label="Password" type="password" />
          </div>
        </div>

        {/* Different Input Types */}
        <div>
          <h3 className="text-lg font-medium mb-4">Different Input Types</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FloatingLabel variant="filled" label="Email" type="email" />
            <FloatingLabel variant="filled" label="Phone Number" type="tel" />
            <FloatingLabel variant="filled" label="Website URL" type="url" />
            <FloatingLabel variant="filled" label="Birth Date" type="date" />
            <FloatingLabel variant="filled" label="Age" type="number" />
            <FloatingLabel variant="filled" label="Search" type="search" />
          </div>
        </div>

        {/* Validation States */}
        <div>
          <h3 className="text-lg font-medium mb-4">Validation States</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <FloatingLabel
                variant="filled"
                label="Valid Email"
                color="success"
              />
							<p className="mt-2 text-sm text-green-600 dark:text-green-500">
								Well done! Email format is correct.
							</p>
            </div>
            <div>
              <FloatingLabel
                variant="filled"
                label="Invalid Email"
                color="error"
              />
							<p className="mt-2 text-sm text-red-600 dark:text-red-500">
								Please enter a valid email address.
							</p>
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div>
          <h3 className="text-lg font-medium mb-4">Disabled State</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <FloatingLabel variant="filled" label="Disabled Field" disabled />
            <FloatingLabel variant="outlined" label="Disabled Outlined" disabled />
          </div>
        </div>

        {/* Form Example */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact Form Example</h3>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FloatingLabel variant="outlined" label="First Name" required />
              <FloatingLabel variant="outlined" label="Last Name" required />
            </div>
            
            <FloatingLabel variant="outlined" label="Email Address" type="email" required />
            
            <FloatingLabel variant="outlined" label="Phone Number" type="tel" />
            
            <FloatingLabel variant="outlined" label="Company" />
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Different Sizes */}
        <div>
          <h3 className="text-lg font-medium mb-4">Different Sizes</h3>
          <div className="space-y-4">
            <FloatingLabel variant="filled" label="Small Size" sizing="sm" />
            <FloatingLabel variant="filled" label="Default Size" sizing="md" />
            <FloatingLabel variant="filled" label="Large Size" />
          </div>
        </div>

        {/* Custom Styling Example */}
        <div>
          <h3 className="text-lg font-medium mb-4">Custom Styling</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg">
              <FloatingLabel
                variant="filled"
                label="Blue Theme"
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <FloatingLabel
                variant="outlined"
                label="Green Theme"
                className="focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}
