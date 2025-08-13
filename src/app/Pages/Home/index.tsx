import AboutUs from '@/components/AboutUs'
import ContactSection from '@/components/ContactSection'
import CTA from '@/components/CTASection'
import Features from '@/components/FeaturesSection'
import FooterSection from '@/components/FooterSection'
import HeroSection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import ProductsSection from '@/components/ProductSection'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <AboutUs />
      <ProductsSection />
      <CTA />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default HomePage
