'use client'

import React, { useEffect, useRef, useState } from 'react'

type NavbarProps = {
  onHeroClick: () => void
  onProjectClick: () => void
  onAboutClick: () => void
  onConnectClick: () => void
}

export default function Navbar({
  onHeroClick,
  onProjectClick,
  onAboutClick,
  onConnectClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const prevScroll = useRef(0)

  // ⭐ scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > prevScroll.current && currentScroll > 80) {
        // scroll down
        setIsVisible(false)
      } else {
        // scroll up
        setIsVisible(true)
      }

      prevScroll.current = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (action: () => void) => {
    action()
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-3 backdrop-blur-sm transition-transform duration-300
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        bg-gradient-to-b from-purple-900/50 to-transparent`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <h1 className="text-3xl font-semibold text-white">aqeel's portfolio</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={onHeroClick} className="text-gray-300 hover:text-white transition-colors font-medium">
              home
            </button>

            <button onClick={onProjectClick} className="text-gray-300 hover:text-white transition-colors font-medium">
              my project
            </button>

            <button onClick={onAboutClick} className="text-gray-300 hover:text-white transition-colors font-medium">
              about me
            </button>

            <button
              onClick={onConnectClick}
              className="px-6 py-2.5 border-2 border-white text-white rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
            >
              let's connect!
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleClick(onHeroClick)} className="text-gray-300 text-left">
                home
              </button>
              <button onClick={() => handleClick(onProjectClick)} className="text-gray-300 text-left">
                my project
              </button>
              <button onClick={() => handleClick(onAboutClick)} className="text-gray-300 text-left">
                about me
              </button>
              <button onClick={() => handleClick(onConnectClick)} className="border-2 border-white text-white rounded-lg py-2">
                let's connect!
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}