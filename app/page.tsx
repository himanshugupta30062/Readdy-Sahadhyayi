
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function LibraryPage() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const genres = [
    { id: 'all', name: 'All Books' },
    { id: 'fiction', name: 'Fiction' },
    { id: 'self-help', name: 'Self-Help' },
    { id: 'history', name: 'History' },
    { id: 'finance', name: 'Finance' },
    { id: 'memoir', name: 'Memoir' },
    { id: 'psychology', name: 'Psychology' },
    { id: 'business', name: 'Business' },
    { id: 'science', name: 'Science' }
  ];

  const digitalBooks = [
    {
      id: 1,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      genre: "Finance",
      cost: "Free",
      downloadLink: "#",
      rating: 4.8,
      downloads: 15420,
      description: "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know."
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      cost: "₹199",
      downloadLink: "#",
      rating: 4.9,
      downloads: 23567,
      description: "An easy & proven way to build good habits & break bad ones. Transform your life with tiny changes."
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "History",
      cost: "₹299",
      downloadLink: "#",
      rating: 4.7,
      downloads: 18905,
      description: "A brief history of humankind exploring how humans conquered the world through shared myths."
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      genre: "Finance",
      cost: "Free",
      downloadLink: "#",
      rating: 4.6,
      downloads: 31245,
      description: "What the rich teach their kids about money that the poor and middle class do not."
    },
    {
      id: 5,
      title: "Educated",
      author: "Tara Westover",
      genre: "Memoir",
      cost: "₹249",
      downloadLink: "#",
      rating: 4.8,
      downloads: 12890,
      description: "A powerful memoir about education, transformation, and the price of leaving a family behind."
    },
    {
      id: 6,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      genre: "Psychology",
      cost: "₹349",
      downloadLink: "#",
      rating: 4.5,
      downloads: 9876,
      description: "Reveals where we can trust our intuitions and how we can tap into the benefits of slow thinking."
    }
  ];

  const filteredBooks = digitalBooks.filter(book => {
    const matchesGenre = selectedGenre === 'all' || book.genre.toLowerCase() === selectedGenre;
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Library</h1>
          <p className="text-lg text-gray-600">Access thousands of books instantly - read, download, and share</p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search books by title, author, or genre..."
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
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  selectedGenre === genre.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={`https://readdy.ai/api/search-image?query=Professional%20book%20cover%20design%20for%20${book.title}%20by%20${book.author}%2C%20clean%20modern%20typography%2C%20${book.genre.toLowerCase()}%20book%20cover%20style%2C%20elegant%20design%20with%20readable%20text&width=120&height=180&seq=lib-book-${book.id}&orientation=portrait`}
                  alt={book.title}
                  className="w-20 h-28 object-cover object-top rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">{book.title}</h3>
                  <p className="text-gray-600 mb-2">by {book.author}</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {book.genre}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      book.cost === 'Free' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {book.cost}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400 text-sm"></i>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{book.rating}</span>
                    <span className="text-sm text-gray-500">({book.downloads} downloads)</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{book.description}</p>

              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                  <div className="w-4 h-4 inline-flex items-center justify-center mr-2">
                    <i className="ri-download-line text-sm"></i>
                  </div>
                  Download Now
                </button>
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                    Preview
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Join the Reading Revolution</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Access our complete digital library with thousands of books across all genres. 
            Download, read offline, and join discussions with fellow readers.
          </p>
          <button className="px-8 py-3 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors font-medium whitespace-nowrap cursor-pointer">
            Get Full Library Access
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
