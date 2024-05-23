"use client"

import Link from 'next/link';
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">DocIo</div>
        <div className="space-x-4 flex items-center">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <div className="relative">
            <button
              className="text-gray-300 hover:text-white"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              More
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <Link href="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Services
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
