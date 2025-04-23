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
              <a href="https://www.edelman.com/" className="logo-white" title="Edelman Logo | Links to Homepage">
                <svg
                  id="Layer_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 347 140.6"
                  className="h-8 w-auto"
                  aria-label="Edelman Logo"
                >
                  <style>{`.cls-white { fill: #fff; stroke-width: 0px; }`}</style>
                  <g id="Layer_1-2">
                    <path className="cls-white" d="M156.2,88.5v-35.3h26v6.8h-17.2v6.5h16v6.8h-16v8.3h18.7v6.8l-27.5.1h0Z"></path>
                    <path className="cls-white" d="M210.1,88.5h-7.4v-2.6h-.1c-1.3,1.6-3.6,3.3-7.1,3.3-6.4,0-11.4-4.1-11.6-13.7-.1-10.5,5.9-14.1,11.2-14.1,2.1,0,5,.4,7.2,2.8v-11h7.7l.1,35.3h0ZM197,67c-3.7,0-5.3,3.2-5.3,8.2,0,4.3,1,8.2,5.3,8.2,4,0,5.4-3.7,5.4-8.8,0-4.6-1.4-7.6-5.4-7.6h0Z"></path>
                    <path
                      className="cls-white"
                      d="M220.3,76.9c0,5.1,3.3,6.7,5.8,6.7,2.9,0,4.2-1.5,6.5-4.7l5.8,3c-2.7,5-6.9,7.3-12.8,7.3-8.2,0-13-5.7-13-13.1,0-9.3,4.9-14.7,13-14.7,9.6,0,12.9,7.3,13,15.5h-18.3ZM230.8,72.1c-.2-3.9-3-5.1-5.3-5.1s-4.9,1.6-5.3,5.1h10.6Z"
                    ></path>
                    <path className="cls-white" d="M241.3,88.5v-35.3h7.7v35.3h-7.7Z"></path>
                    <path
                      className="cls-white"
                      d="M253.4,62.1h7.7v2.3c2-2.3,5.3-3,7.6-3,3,0,5.3,1.2,7,3.5,2.5-2.6,5.4-3.5,8.5-3.5,2.6,0,8.1.9,8.1,6.9v20.2h-7.7v-15.4c0-3.7-1-5.4-4-5.4-2.6,0-3.9,1.9-3.9,4.6v16.2h-7.7v-16.5c0-2.6-.8-4.3-3.8-4.3s-4.1,2-4.1,4.4v16.4h-7.7v-26.4h0Z"
                    ></path>
                    <path
                      className="cls-white"
                      d="M319.1,83c0,1.8,0,3.9.7,5.5h-7.1c-.3-.9-.4-1.8-.5-2.7h-.1c-1.3,2.1-5.2,3.4-7.9,3.4-5.1,0-8.8-2.8-8.8-7.8,0-6.4,5.1-8.6,13.5-9.8l2.8-.4v-2.2c0-2-1.6-2.8-3.7-2.8-2.5,0-3.7.9-4.1,3.5h-7.4c.2-7.6,7.3-8.3,10.9-8.3,7.2,0,11.7,1.7,11.8,7.6v14h-.1ZM311.7,75.6l-5.2,1.5c-1.9.5-3.7,1.3-3.7,3.4s1.7,3,3.6,3c3,0,5.3-2,5.3-6.1v-1.8h0Z"
                    ></path>
                    <path
                      className="cls-white"
                      d="M323.7,62.1h7.7v2.3c2-2.3,5.3-3,7.6-3,6.3,0,8,3.6,8,7.6v19.5h-7.7v-16.5c0-2.6-.8-4.3-3.8-4.3s-4.1,2-4.1,4.4v16.4h-7.7v-26.4h0Z"
                    ></path>
                    <polygon className="cls-white" points="140.7 71.3 71.4 71.3 71.4 140.6 140.7 71.3"></polygon>
                    <polygon className="cls-white" points="69.3 140.6 69.3 71.3 0 71.3 69.3 140.6"></polygon>
                    <polygon className="cls-white" points="71.4 0 71.4 69.3 140.7 69.3 71.4 0"></polygon>
                  </g>
                </svg>
              </a>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-indigo-300">
                Dashboard
              </a>
              <a href="#" className="hover:text-indigo-300">
                Team
              </a>
              <a href="#" className="hover:text-indigo-300">
                Projects
              </a>
              <a href="#" className="hover:text-indigo-300">
                Calendar
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md hover:bg-gray-700"
              >
                {menuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu items */}
        {menuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base hover:bg-gray-700"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base hover:bg-gray-700"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base hover:bg-gray-700"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base hover:bg-gray-700"
            >
              Calendar
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default GlobalHeader;