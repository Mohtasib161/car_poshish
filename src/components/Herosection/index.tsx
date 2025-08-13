import React from 'react'

const HeroSection = () => {
  return (
    <div>
       <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: "url('/images/image6.jpg')" }} />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight">
            Elevate Your
            <span className="block text-orange-400">Driving Experience</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-orange-100 font-light">
            Discover the Art of Luxury Seating
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:opacity-90 px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Collection
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg rounded-lg font-semibold bg-transparent transition-all duration-300 transform hover:scale-105">
              Custom Design
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
