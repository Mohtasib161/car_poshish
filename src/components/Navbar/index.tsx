"use client"

import { useState, useEffect, useCallback, useMemo } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const navLinks = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#products", label: "Products" },
      { href: "#features", label: "Features" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    [],
  )

  const handleLinkClick = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const MenuIcon = useMemo(
    () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    [],
  )

  const CloseIcon = useMemo(
    () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    [],
  )

  const PhoneIcon = useMemo(
    () => (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    [],
  )

  const navbarClasses = useMemo(
    () =>
      `fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-orange-200/50"
          : "bg-white/90 backdrop-blur-md border-b border-orange-100/30"
      }`,
    [isScrolled],
  )

  const mobileMenuClasses = useMemo(
    () =>
      `lg:hidden transition-all duration-500 ease-in-out ${
        isOpen
          ? "max-h-screen opacity-100 visible transform translate-y-0"
          : "max-h-0 opacity-0 invisible transform -translate-y-4"
      } overflow-hidden bg-white/98 backdrop-blur-lg border-t border-orange-100 shadow-xl`,
    [isOpen],
  )

  return (
    <nav className={navbarClasses} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#home" className="group flex items-center space-x-2" aria-label="LuxSeats Home">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v11h2v3h2v-3h12v3h2v-3h2V6h-2z" />
                </svg>
              </div>
              <span className="font-black text-2xl sm:text-3xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-orange-500 transition-all duration-300">
                LuxSeats
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium text-lg group rounded-lg hover:bg-orange-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium border border-transparent hover:border-orange-200 transition-all duration-200 focus:ring-2 focus:ring-orange-500 rounded-lg focus:outline-none"
              aria-label="Call now for consultation"
            >
              {PhoneIcon}
              <span className="ml-2">Call Now</span>
            </button>
            <button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Get a quote for car seats"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 p-2 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? CloseIcon : MenuIcon}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={mobileMenuClasses} aria-hidden={!isOpen}>
        <div className="px-6 py-8 space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium text-lg py-3 px-4 rounded-lg border-l-4 border-transparent hover:border-orange-500 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
              style={{
                animationDelay: isOpen ? `${index * 100}ms` : "0ms",
                animation: isOpen ? "fadeInUp 0.6s ease-out forwards" : "none",
              }}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-6 space-y-4 border-t border-orange-100 mt-6">
            <button
              className="w-full inline-flex items-center justify-center px-4 py-3 text-gray-700 border-2 border-orange-200 hover:text-orange-600 hover:border-orange-500 hover:bg-orange-50 font-medium bg-transparent transition-all duration-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              onClick={handleLinkClick}
              aria-label="Call now for consultation"
            >
              {PhoneIcon}
              <span className="ml-2">Call Now</span>
            </button>
            <button
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              onClick={handleLinkClick}
              aria-label="Get a quote for car seats"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}
