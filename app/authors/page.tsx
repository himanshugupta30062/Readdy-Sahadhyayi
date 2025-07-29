'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function AuthorsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Authors' },
    { id: 'fiction', name: 'Fiction Writers' },
    { id: 'business', name: 'Business Authors' },
    { id: 'psychology', name: 'Psychology Experts' },
    { id: 'indian', name: 'Indian Authors' },
    { id: 'international', name: 'International Authors' }
  ];

  const authors = [
    {
      id: 1,
      name: "Chetan Bhagat",
      category: "indian",
      specialization: "Contemporary Fiction",
      books: ["Five Point Someone", "2 States", "3 Mistakes of My Life"],
      bookCount: 12,
      followers: 45000,
      biography: "Indian author, columnist, screenwriter, and speaker. Known for his English-language dramedy novels about young urban middle-class Indians.",
      upcomingEvents: "Book Reading Session - Dec 25, 2024"
    },
    {
      id: 2,
      name: "James Clear",
      category: "international", 
      specialization: "Self-Improvement & Habits",
      books: ["Atomic Habits"],
      bookCount: 3,
      followers: 89000,
      biography: "Author, speaker, and entrepreneur focused on habits, decision making, and continuous improvement.",
      upcomingEvents: "Virtual Q&A - Jan 15, 2025"
    },
    {
      id: 3,
      name: "Yuval Noah Harari",
      category: "international",
      specialization: "History & Anthropology", 
      books: ["Sapiens", "Homo Deus", "21 Lessons for the 21st Century"],
      bookCount: 4,
      followers: 67000,
      biography: "Israeli historian and professor. Known for his popular science bestsellers examining free will, consciousness, and definitions of happiness.",
      upcomingEvents: "Conference on Future of Humanity - Feb 10, 2025"
    },
    {
      id: 4,
      name: "Amish Tripathi",
      category: "indian",
      specialization: "Mythological Fiction",
      books: ["The Immortals of Meluha", "The Secret of the Nagas", "The Oath of the Vayuputras"],
      bookCount: 8,
      followers: 52000,
      biography: "Indian author known for his novels The Immortals of Meluha, The Secret of the Nagas and The Oath of the Vayuputras.",
      upcomingEvents: "Mythology & Modern Times - Jan 30, 2025"
    },
    {
      id: 5,
      name: "Daniel Kahneman",
      category: "psychology",
      specialization: "Behavioral Psychology",
      books: ["Thinking, Fast and Slow", "Noise"],
      bookCount: 5,
      followers: 34000,
      biography: "Nobel Prize winner in Economic Sciences. Pioneer in behavioral economics and cognitive psychology.",
      upcomingEvents: "Decision Making Workshop - Mar 5, 2025"
    },
    {
      id: 6,
      name: "Ruskin Bond",
      category: "indian",
      specialization: "Children's Literature & Nature Writing",
      books: ["The Room on the Roof", "A Flight of Pigeons", "The Blue Umbrella"],
      bookCount: 150,
      followers: 78000,
      biography: "Indian author of British descent. Known for his tales of life in the hill stations of the Himalayas.",
      upcomingEvents: "Stories from the Hills - Dec 20, 2024"
    }
  ];

  const filteredAuthors = authors.filter(author => {
    if (selectedCategory === 'all') return true;
    return author.category === selectedCategory || author.specialization.toLowerCase().includes(selectedCategory);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Know Your Authors</h1>
          <p className="text-lg text-gray-600">Connect with your favorite authors, learn their stories, and join exclusive events</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAuthors.map((author) => (
            <div key={author.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={`https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20$%7Bauthor.name%7D%20author%2C%20clean%20background%2C%20friendly%20and%20intellectual%20appearance%2C%20high%20quality%20headshot%2C%20literary%20author%20photo%20style%2C%20well-lit%20professional%20photography&width=100&height=100&seq=author-${author.id}&orientation=squarish`}
                  alt={author.name}
                  className="w-20 h-20 object-cover object-top rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-xl mb-1">{author.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{author.specialization}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center space-x-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-book-line text-xs"></i>
                      </div>
                      <span>{author.bookCount} books</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-heart-line text-xs"></i>
                      </div>
                      <span>{author.followers.toLocaleString()} followers</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Popular Works</h4>
                <div className="flex flex-wrap gap-2">
                  {author.books.slice(0, 3).map((book, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {book}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{author.biography}</p>

              {author.upcomingEvents && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-blue-700">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-calendar-line text-sm"></i>
                    </div>
                    <span className="text-sm font-medium">Upcoming Event:</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">{author.upcomingEvents}</p>
                </div>
              )}

              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                  Follow Author
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                  View Books
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Connect Directly with Authors</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Join exclusive author events, Q&A sessions, and get insights into their writing process. 
            Build meaningful connections with the minds behind your favorite books.
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-medium whitespace-nowrap cursor-pointer">
            Explore Author Events
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
