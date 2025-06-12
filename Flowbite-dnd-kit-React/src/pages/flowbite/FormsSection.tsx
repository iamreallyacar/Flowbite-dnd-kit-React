import { Button, Label, TextInput, Textarea, Select, Checkbox, Radio } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function FormsSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Forms</ShowcaseHeading>
      <div className="max-w-md space-y-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1">Your email</Label>
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Your password</Label>
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="countries">Select your country</Label>
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="comment">Your message</Label>
          </div>
          <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <a href="#" className="text-cyan-600 hover:underline">
              terms and conditions
            </a>
          </Label>
        </div>
        <fieldset className="flex max-w-md flex-col gap-4">
          <legend className="mb-4">Choose your favorite country</legend>
          <div className="flex items-center gap-2">
            <Radio id="united-state" name="countries" value="USA" defaultChecked />
            <Label htmlFor="united-state">United States</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="germany" name="countries" value="Germany" />
            <Label htmlFor="germany">Germany</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="spain" name="countries" value="Spain" />
            <Label htmlFor="spain">Spain</Label>
          </div>
        </fieldset>
        <Button type="submit">Submit</Button>
      </div>
    </ShowcaseCard>
  )
}
