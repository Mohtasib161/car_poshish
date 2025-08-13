import React from 'react'

const FooterSection = () => {
  return (
    <div>
       <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-serif font-black text-2xl sm:text-3xl text-orange-400 mb-4">LuxSeats</div>
            <p className="text-gray-400 mb-6">Elevating automotive luxury since 2010</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Warranty
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
              © 2024 LuxSeats. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FooterSection
