import React from 'react'

const Features = () => {
  return (
    <div>
        <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Crafted for Excellence
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Every seat is a masterpiece of engineering and design, combining comfort, durability, and luxury
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl mb-4 text-gray-900">Crafted for Comfort</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience unparalleled support and elegance with our ergonomically designed seats that adapt to your
                  body
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl mb-4 text-gray-900">Tailored to Perfection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom designs that fit your unique style and vehicle specifications with premium materials
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 sm:col-span-2 lg:col-span-1">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl mb-4 text-gray-900">Sustainable Luxury</h3>
                <p className="text-gray-600 leading-relaxed">
                  Eco-friendly materials without compromising quality, ensuring a sustainable future for luxury
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
