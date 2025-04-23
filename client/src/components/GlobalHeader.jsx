import React, { useState } from "react";

const GlobalHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Left section */}
            <div className="flex items-center">
              <img
                className="h-8 w-auto mr-3"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
              />
              <span className="text-lg font-bold">ADHD Calendar</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-indigo-300">Dashboard</a>
              <a href="#" className="hover:text-indigo-300">Team</a>
              <a href="#" className="hover:text-indigo-300">Projects</a>
              <a href="#" className="hover:text-indigo-300">Calendar</a>
            </div>

            {/* Right - Profile dropdown (just avatar for now) */}
            <div className="hidden md:block">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="User avatar"
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md hover:bg-gray-700">
                {menuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu items */}
        {menuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base hover:bg-gray-700">Dashboard</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base hover:bg-gray-700">Team</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base hover:bg-gray-700">Projects</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base hover:bg-gray-700">Calendar</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default GlobalHeader;
