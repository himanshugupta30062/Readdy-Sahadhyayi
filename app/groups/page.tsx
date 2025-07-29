
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function GroupsPage() {
  const [selectedTab, setSelectedTab] = useState('active');

  const activeGroups = [
    {
      id: 1,
      bookTitle: "Atomic Habits",
      author: "James Clear",
      members: 45,
      progress: 68,
      discussions: 23,
      nextMeeting: "Tomorrow, 7:00 PM",
      location: "Mumbai",
      isOnline: true
    },
    {
      id: 2,
      bookTitle: "The Psychology of Money",
      author: "Morgan Housel",
      members: 32,
      progress: 85,
      discussions: 31,
      nextMeeting: "Sunday, 6:00 PM",
      location: "Delhi",
      isOnline: false
    },
    {
      id: 3,
      bookTitle: "Sapiens",
      author: "Yuval Noah Harari",
      members: 28,
      progress: 42,
      discussions: 18,
      nextMeeting: "Friday, 8:00 PM",
      location: "Bangalore",
      isOnline: true
    },
    {
      id: 4,
      bookTitle: "The Alchemist",
      author: "Paulo Coelho",
      members: 67,
      progress: 91,
      discussions: 45,
      nextMeeting: "Monday, 7:30 PM",
      location: "Pune",
      isOnline: false
    }
  ];

  const nearbyGroups = [
    {
      id: 5,
      bookTitle: "Think and Grow Rich",
      author: "Napoleon Hill",
      members: 15,
      startDate: "Starting next week",
      location: "Your City",
      distance: "2.3 km away",
      isOnline: false
    },
    {
      id: 6,
      bookTitle: "The Silent Patient",
      author: "Alex Michaelides",
      members: 22,
      startDate: "Starting in 3 days",
      location: "Online",
      distance: "Virtual",
      isOnline: true
    },
    {
      id: 7,
      bookTitle: "Educated",
      author: "Tara Westover",
      members: 19,
      startDate: "Starting next month",
      location: "Your City",
      distance: "1.8 km away",
      isOnline: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Reading Groups</h1>
          <p className="text-lg text-gray-600">Connect with fellow readers and discuss your favorite books</p>
        </div>

        <div className="flex space-x-1 mb-8 bg-gray-200 p-1 rounded-full max-w-md">
          <button
            onClick={() => setSelectedTab('active')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              selectedTab === 'active'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            My Groups
          </button>
          <button
            onClick={() => setSelectedTab('discover')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              selectedTab === 'discover'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Discover Groups
          </button>
        </div>

        {selectedTab === 'active' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Active Reading Groups</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeGroups.map((group) => (
                <div key={group.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{group.bookTitle}</h3>
                      <p className="text-gray-600 mb-3">by {group.author}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center space-x-1">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-group-line text-xs"></i>
                          </div>
                          <span>{group.members} members</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-chat-3-line text-xs"></i>
                          </div>
                          <span>{group.discussions} discussions</span>
                        </span>
                        {group.isOnline ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Online
                          </span>
                        ) : (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {group.location}
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Reading Progress</span>
                          <span className="text-sm font-medium text-gray-900">{group.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${group.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-calendar-line text-gray-500 text-sm"></i>
                        </div>
                        <span className="text-sm text-gray-600">Next meeting: {group.nextMeeting}</span>
                      </div>
                    </div>

                    <img
                      src={`https://readdy.ai/api/search-image?query=Book%20cover%20for%20$%7Bgroup.bookTitle%7D%20by%20$%7Bgroup.author%7D%2C%20professional%20cover%20design%2C%20modern%20typography%2C%20clean%20layout&width=80&height=120&seq=group-book-${group.id}&orientation=portrait`}
                      alt={group.bookTitle}
                      className="w-16 h-24 object-cover object-top rounded-lg ml-4"
                    />
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                      Join Discussion
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'discover' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Discover New Reading Groups</h2>
              <p className="text-gray-600">Find groups near you or join online discussions</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {nearbyGroups.map((group) => (
                <div key={group.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{group.bookTitle}</h3>
                      <p className="text-gray-600 mb-3">by {group.author}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center space-x-1">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-group-line text-xs"></i>
                          </div>
                          <span>{group.members} interested</span>
                        </span>
                        {group.isOnline ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Online
                          </span>
                        ) : (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {group.location}
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">{group.startDate}</p>
                        {!group.isOnline && (
                          <p className="text-sm text-gray-500 flex items-center space-x-1">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-map-pin-line text-xs"></i>
                            </div>
                            <span>{group.distance}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <img
                      src={`https://readdy.ai/api/search-image?query=Book%20cover%20for%20$%7Bgroup.bookTitle%7D%20by%20$%7Bgroup.author%7D%2C%20professional%20cover%20design%2C%20modern%20typography%2C%20clean%20layout&width=80&height=120&seq=discover-book-${group.id}&orientation=portrait`}
                      alt={group.bookTitle}
                      className="w-16 h-24 object-cover object-top rounded-lg ml-4"
                    />
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                      Join Group
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Can't Find the Right Group?</h3>
              <p className="text-blue-100 mb-4">Start your own reading group and invite others to join</p>
              <button className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-medium whitespace-nowrap cursor-pointer">
                Create New Group
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
