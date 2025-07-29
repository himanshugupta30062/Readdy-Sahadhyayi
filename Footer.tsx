'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-book-open-line text-white text-lg"></i>
              </div>
              <span className="text-2xl font-pacifico text-white">Sahadhyayi</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Connecting readers worldwide through the power of books. Build reading habits, join discussions, and discover your next favorite read with our vibrant community.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                <i className="ri-facebook-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                <i className="ri-twitter-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                <i className="ri-instagram-line text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                <i className="ri-linkedin-fill text-lg"></i>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="space-y-3">
              <Link href="/discover" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Discover Books
              </Link>
              <Link href="/groups" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Reading Groups
              </Link>
              <Link href="/library" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Library
              </Link>
              <Link href="/maps" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Reader Maps
              </Link>
              <Link href="/avatar" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Create Avatar
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-3">
              <Link href="/help" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Help Center
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Contact Us
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                About Us
              </Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sahadhyayi. All rights reserved. Reviving reading culture through community.</p>
        </div>
      </div>
    </footer>
  );
}
