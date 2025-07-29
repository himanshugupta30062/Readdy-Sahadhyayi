
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function DiscoverPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Books', icon: 'ri-book-line' },
    { id: 'fiction', name: 'Fiction', icon: 'ri-quill-pen-line' },
    { id: 'non-fiction', name: 'Non-Fiction', icon: 'ri-lightbulb-line' },
    { id: 'science', name: 'Science', icon: 'ri-flask-line' },
    { id: 'business', name: 'Business', icon: 'ri-briefcase-line' },
    { id: 'self-help', name: 'Self-Help', icon: 'ri-heart-line' },
    { id: 'history', name: 'History', icon: 'ri-time-line' }
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      rating: 4.8,
      reviews: 1247,
      price: "₹299",
      category: "Business",
      activeReaders: 234,
      groups: 12
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      rating: 4.9,
      reviews: 2156,
      price: "₹349",
      category: "Self-Help",
      activeReaders: 567,
      groups: 23
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      rating: 4.7,
      reviews: 3421,
      price: "₹199",
      category: "Fiction",
      activeReaders: 123,
      groups: 8
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      rating: 4.6,
      reviews: 1876,
      price: "₹399",
      category: "History",
      activeReaders: 345,
      groups: 15
    },
    {
      id: 5,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      rating: 4.5,
      reviews: 987,
      price: "₹249",
      category: "Self-Help",
      activeReaders: 189,
      groups: 9
    },
    {
      id: 6,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      rating: 4.4,
      reviews: 756,
      price: "₹279",
      category: "Fiction",
      activeReaders: 91,
      groups: 5
    },
    {
      id: 7,
      title: "Educated",
      author: "Tara Westover",
      rating: 4.7,
      reviews: 1432,
      price: "₹329",
      category: "Non-Fiction",
      activeReaders: 267,
      groups: 11
    },
    {
      id: 8,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      rating: 4.6,
      reviews: 1098,
      price: "₹289",
      category: "Self-Help",
      activeReaders: 156,
      groups: 7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Discover Your Next Great Read</h1>
          <p className="text-lg text-gray-600">Find books, join reading groups, and connect with fellow readers</p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search books, authors, or topics..."
              className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
              <i className="ri-search-line text-gray-400 text-lg"></i>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className={`${category.icon} text-sm`}></i>
                </div>
                <span className="text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="relative mb-4">
                <img
                  src={`https://readdy.ai/api/search-image?query=Book%20cover%20design%20for%20$%7Bbook.title%7D%20by%20$%7Bbook.author%7D%2C%20professional%20book%20cover%20with%20elegant%20typography%2C%20modern%20design%2C%20clean%20background%2C%20readable%20title%20and%20author%20name%2C%20$%7Bbook.category.toLowerCase%28%29%7D%20genre%20styling&width=200&height=300&seq=book-${book.id}&orientation=portrait`}
                  alt={book.title}
                  className="w-full h-48 object-cover object-top rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
                  {book.category}
                </div>
              </div>

              <h3 className="font-bold text-gray-900 mb-2 text-lg line-clamp-2">{book.title}</h3>
              <p className="text-gray-600 mb-3">by {book.author}</p>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-star-fill text-yellow-400 text-sm"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{book.rating}</span>
                  <span className="text-sm text-gray-500">({book.reviews})</span>
                </div>
                <span className="text-lg font-bold text-blue-600">{book.price}</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-user-line text-xs"></i>
                    </div>
                    <span>{book.activeReaders} reading</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-group-line text-xs"></i>
                    </div>
                    <span>{book.groups} groups</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                  Buy & Join Group
                </button>
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                  Preview & Reviews
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium whitespace-nowrap cursor-pointer">
            Load More Books
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
