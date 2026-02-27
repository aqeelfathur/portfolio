"use client";

import React, { useState } from "react";

type NavbarProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  onHeroClick: () => void;
  onProjectClick: () => void;
  onAboutClick: () => void;
  onConnectClick: () => void;
};

export default function Navbar({
  scrollContainerRef,
  onHeroClick,
  onProjectClick,
  onAboutClick,
  onConnectClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-5 z-50 py-0.5 bg-gradient-to-b from-purple-900/50 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <h1 className="text-3xl font-semibold text-white">aqeel's portfolio</h1>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={onHeroClick} className="text-gray-300 hover:text-white">
              home
            </button>

            <button onClick={onProjectClick} className="text-gray-300 hover:text-white">
              my project
            </button>

            <button onClick={onAboutClick} className="text-gray-300 hover:text-white">
              about me
            </button>

            <button
              onClick={onConnectClick}
              className="px-6 py-2.5 border-2 border-white text-white rounded-xl hover:bg-white hover:text-purple-900"
            >
              let's connect!
            </button>
          </div>

          {/* Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            menu
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 mt-4">
            <button onClick={() => handleClick(onHeroClick)}>home</button>
            <button onClick={() => handleClick(onProjectClick)}>project</button>
            <button onClick={() => handleClick(onAboutClick)}>about</button>
          </div>
        )}
      </div>
    </nav>
  );
}