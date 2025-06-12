import { Rating, RatingStar } from 'flowbite-react'
import { useState } from 'react'
import { ShowcaseSection } from "../../components/ShowcaseSection"

export function RatingSection() {
  const [rating, setRating] = useState(4)

  return (
    <ShowcaseSection>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rating</h2>
      <p className="text-gray-600 mb-6">
        Display user ratings and allow interactive rating input with customizable star components.
      </p>
      
      <div className="space-y-8">
        {/* Default Rating */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Rating</h3>
          <div className="space-y-4">
            <Rating>
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar filled={false} />
            </Rating>
          </div>
        </div>

        {/* Rating with Text */}
        <div>
          <h3 className="text-lg font-medium mb-4">Rating with Text</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Rating>
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
              </Rating>
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
            </div>
            
            <div className="flex items-center">
              <Rating>
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar filled={false} />
              </Rating>
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.0 out of 5</p>
            </div>

            <div className="flex items-center">
              <Rating>
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar filled={false} />
                <RatingStar filled={false} />
              </Rating>
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.0 out of 5</p>
            </div>
          </div>
        </div>

        {/* Different Sizes */}
        <div>
          <h3 className="text-lg font-medium mb-4">Different Sizes</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Small</p>
              <Rating size="sm">
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar filled={false} />
              </Rating>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Medium (Default)</p>
              <Rating size="md">
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar filled={false} />
              </Rating>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Large</p>
              <Rating size="lg">
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar filled={false} />
              </Rating>
            </div>
          </div>
        </div>

        {/* Rating Scale */}
        <div>
          <h3 className="text-lg font-medium mb-4">Rating Scale</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-yellow-300 rounded" style={{ width: '70%' }}></div>
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-yellow-300 rounded" style={{ width: '17%' }}></div>
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
            </div>

            <div className="flex items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-yellow-300 rounded" style={{ width: '8%' }}></div>
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
            </div>

            <div className="flex items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-yellow-300 rounded" style={{ width: '4%' }}></div>
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
            </div>

            <div className="flex items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div className="h-5 bg-yellow-300 rounded" style={{ width: '1%' }}></div>
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
            </div>
          </div>
        </div>

        {/* Interactive Rating */}
        <div>
          <h3 className="text-lg font-medium mb-4">Interactive Rating</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Click on the stars to rate:</p>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? 'text-yellow-300' : 'text-gray-300'
                  } hover:text-yellow-400 transition-colors`}
                >
                  ★
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              You rated: {rating} star{rating !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Advanced Rating Example */}
        <div>
          <h3 className="text-lg font-medium mb-4">Product Rating Example</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start space-x-4">
              <img
                className="w-16 h-16 rounded-lg object-cover"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt="Product"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Premium Headphones</h4>
                <div className="flex items-center mt-1">
                  <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar filled={false} />
                  </Rating>
                  <span className="ml-2 text-sm text-gray-500">(4.0)</span>
                  <span className="ml-2 text-sm text-blue-600">125 reviews</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  High-quality wireless headphones with excellent sound quality.
                </p>
                <p className="text-lg font-bold text-gray-900 mt-2">$199.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseSection>
  )
}
