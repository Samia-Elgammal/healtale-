'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'comic-stories', label: '📖 Comic Stories' },
    { id: 'ingredient-impact', label: '🧪 Ingredient Impact' },
    { id: 'behind-science', label: '🧬 Behind the Science' },
    { id: 'confidence-journal', label: '📓 Confidence Journal' },
    { id: 'contact', label: '✉️ Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo and Tagline */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900">
              HealTale
            </h1>
            <p className="text-sm text-gray-600 mt-1 hidden sm:block">
              Where confidence, cosmetics, and science connect.
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-green-50"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <div className="w-6 h-6 flex items-center justify-center">✕</div>
            ) : (
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
