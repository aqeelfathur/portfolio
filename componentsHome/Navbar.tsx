'use client';

import React, { useState } from 'react';

type NavbarProps = {
  onHeroClick: () => void;
  onProjectClick: () => void;
  onAboutClick: () => void;
  onConnectClick: () => void;
};

export default function Navbar({
  onHeroClick,
  onProjectClick,
  onAboutClick,
  onConnectClick
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (action: () => void) => {
    action();
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 right-5 z-50 py-3 bg-gradient-to-b from-purple-900/50 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-semibold text-white">aqeel's portfolio</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onHeroClick}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              home
            </button>

            <button
              onClick={onProjectClick}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              my project
            </button>

            <button
              onClick={onAboutClick}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              about me
            </button>

            <button
              onClick={onConnectClick} 
              className="px-6 py-2.5 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
              let's connect!
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleClick(onHeroClick)}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left"
              >
                home
              </button>

              <button
                onClick={() => handleClick(onProjectClick)}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left"
              >
                my project
              </button>

              <button
                onClick={() => handleClick(onAboutClick)}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left"
              >
                about me
              </button>

              <button className="px-6 py-2.5 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold w-full">
                let's connect!
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
