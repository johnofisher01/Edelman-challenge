import React from "react";

const GlobalHeader = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <a href="#" className="hover:underline text-lg font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline text-lg font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline text-lg font-medium">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline text-lg font-medium">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalHeader;
