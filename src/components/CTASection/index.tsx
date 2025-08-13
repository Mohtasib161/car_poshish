import React from 'react'

const CTA = () => {
  return (
    <div>
       <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your Drive?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-8 leading-relaxed">
            Experience the pinnacle of automotive luxury with our bespoke seating solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg rounded-lg font-semibold bg-transparent transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Request Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTA
