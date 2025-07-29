'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <i className="ri-book-open-line text-white text-lg"></i>
            </div>
            <span className="text-2xl font-pacifico text-blue-600">Sahadhyayi</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/discover" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer font-medium">
              Explore Books
            </Link>
            <Link href="/groups" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer font-medium">
              Reading Groups
            </Link>
            <Link href="/library" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer font-medium">
              Library
            </Link>
            <Link href="/authors" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer font-medium">
              Authors
            </Link>
            <Link href="/maps" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer font-medium">
              Reader Maps
            </Link>
            <Link href="/avatar" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer font-medium">
              Avatar
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer font-medium">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signin">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Join Community
              </button>
            </Link>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/discover" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Explore Books
              </Link>
              <Link href="/groups" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Reading Groups
              </Link>
              <Link href="/library" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Library
              </Link>
              <Link href="/authors" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Authors
              </Link>
              <Link href="/maps" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Reader Maps
              </Link>
              <Link href="/avatar" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Avatar
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/signin">
                  <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
                    Sign In
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                    Join Community
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}