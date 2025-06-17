import { Blockquote } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSubheading } from "../../components"

export function BlockquoteSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Blockquote</ShowcaseHeading>
      <ShowcaseText>
        Display quoted text content with proper typography and styling for testimonials and citations.
      </ShowcaseText>
      
      <div className="space-y-8">
        {/* Default Blockquote */}
        <div>
          <ShowcaseSubheading>Default Blockquote</ShowcaseSubheading>
          <Blockquote>
            Not sure what practical uses we can find for this. I guess it's an extra text option.
          </Blockquote>
        </div>

        {/* Solid Background Blockquote */}
        <div>
          <ShowcaseSubheading>Solid Background</ShowcaseSubheading>
          <div className="p-4 bg-gray-900 rounded-lg">
            <Blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
              <p>"Maybe we can use these in the user manual for summaries?"</p>
            </Blockquote>
          </div>
        </div>

        {/* Blockquote with Citation */}
        <div>
          <ShowcaseSubheading>With Citation</ShowcaseSubheading>
          <figure className="max-w-screen-md">
            <div className="mb-4 text-4xl text-gray-400 dark:text-gray-600">
              <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
            </div>
            <Blockquote>
              <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
                "This one is straight up used for marketing."
              </p>
            </Blockquote>
            <figcaption className="flex items-center mt-6 space-x-3">
              <img className="w-6 h-6 rounded-full" src="https://via.placeholder.com/40x40?text=Profile" alt="profile picture" />
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
              </div>
            </figcaption>
          </figure>
        </div>

        {/* User Testimonial */}
        <div>
          <ShowcaseSubheading>User Testimonial</ShowcaseSubheading>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img className="w-10 h-10 me-4 rounded-full" src="https://via.placeholder.com/40x40?text=Profile" alt="" />
              <div className="font-medium dark:text-white">
                <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
              </div>
            </div>
            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              <p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p>
            </footer>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              This is my third Invicta Pro Diver. They are just fantastic for the money. This one came without a bezel, which is one of the things I liked about it. I am not a big fan of the "Batman" color scheme but I think I will get used to it.
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              It weighs the right amount, has the right color, and fits my wrist well. I would buy many more of these if I could afford it.
            </p>
            <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
            <aside>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
              <div className="flex items-center mt-3">
                <a href="#" className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</a>
                <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
              </div>
            </aside>
          </div>
        </div>

        {/* Blockquote Variants */}
        <div>
          <ShowcaseSubheading>Different Styles</ShowcaseSubheading>
          <div className="space-y-6">
            {/* Border Left */}
            <div className="pl-4 border-l-4 border-gray-300 dark:border-gray-500">
              <p className="text-lg italic leading-relaxed text-gray-900 dark:text-white">
                "The future belongs to those who believe in the beauty of their dreams."
              </p>
              <cite className="text-sm text-gray-600 dark:text-gray-400">— Eleanor Roosevelt</cite>
            </div>

            {/* Centered */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-2xl italic font-light text-gray-900 dark:text-white mb-4">
                "Innovation distinguishes between a leader and a follower."
              </p>
              <cite className="text-sm text-gray-600 dark:text-gray-400">— Steve Jobs</cite>
            </div>

            {/* With Icon */}
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-lg italic text-gray-900 dark:text-white">
                  "Quality is not an act, it is a habit."
                </p>
                <cite className="text-sm text-gray-600 dark:text-gray-400">— Aristotle</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}
