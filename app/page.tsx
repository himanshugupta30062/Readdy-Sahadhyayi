'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function MapsPage() {
  const [activeMap, setActiveMap] = useState('readers');
  const [selectedBook, setSelectedBook] = useState('all');
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [locationPermission, setLocationPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');

  const popularBooks = [
    { id: 'all', title: 'All Books' },
    { id: 'atomic-habits', title: 'Atomic Habits' },
    { id: 'psychology-money', title: 'The Psychology of Money' },
    { id: 'sapiens', title: 'Sapiens' },
    { id: 'alchemist', title: 'The Alchemist' }
  ];

  const readersNearby = [
    {
      id: 1,
      name: 'Priya Sharma',
      book: 'Atomic Habits',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Indian%20woman%20reading%20avatar%2C%20friendly%20smile%2C%20casual%20attire%2C%20warm%20lighting%2C%20modern%20portrait%20style&width=60&height=60&seq=reader-1&orientation=squarish',
      distance: '1.2 km away',
      progress: 68,
      lat: 28.6139 + (Math.random() - 0.5) * 0.01,
      lng: 77.2090 + (Math.random() - 0.5) * 0.01,
      reading: 'atomic-habits'
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      book: 'The Psychology of Money',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Indian%20man%20reading%20avatar%2C%20intellectual%20look%2C%20glasses%2C%20friendly%20expression%2C%20modern%20portrait&width=60&height=60&seq=reader-2&orientation=squarish',
      distance: '2.8 km away',
      progress: 45,
      lat: 28.6139 + (Math.random() - 0.5) * 0.02,
      lng: 77.2090 + (Math.random() - 0.5) * 0.02,
      reading: 'psychology-money'
    },
    {
      id: 3,
      name: 'Ananya Gupta',
      book: 'Sapiens',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Indian%20woman%20student%20avatar%2C%20bright%20smile%2C%20contemporary%20style%2C%20confident%20look&width=60&height=60&seq=reader-3&orientation=squarish',
      distance: '0.8 km away',
      progress: 82,
      lat: 28.6139 + (Math.random() - 0.5) * 0.008,
      lng: 77.2090 + (Math.random() - 0.5) * 0.008,
      reading: 'sapiens'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      book: 'The Alchemist',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Indian%20man%20creative%20avatar%2C%20artistic%20look%2C%20thoughtful%20expression%2C%20modern%20casual%20wear&width=60&height=60&seq=reader-4&orientation=squarish',
      distance: '3.5 km away',
      progress: 91,
      lat: 28.6139 + (Math.random() - 0.5) * 0.025,
      lng: 77.2090 + (Math.random() - 0.5) * 0.025,
      reading: 'alchemist'
    }
  ];

  const friendsNearby = [
    {
      id: 1,
      name: 'Kavya Reddy',
      status: 'Reading Educated by Tara Westover',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Indian%20woman%20friend%20avatar%2C%20warm%20smile%2C%20trendy%20outfit%2C%20vibrant%20personality&width=60&height=60&seq=friend-1&orientation=squarish',
      lastSeen: '2 minutes ago',
      lat: 28.6139 + (Math.random() - 0.5) * 0.015,
      lng: 77.2090 + (Math.random() - 0.5) * 0.015,
      isOnline: true
    },
    {
      id: 2,
      name: 'Arjun Patel',
      status: 'Just finished Rich Dad Poor Dad',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Indian%20man%20friend%20avatar%2C%20casual%20smile%2C%20modern%20style%2C%20approachable%20look&width=60&height=60&seq=friend-2&orientation=squarish',
      lastSeen: '15 minutes ago',
      lat: 28.6139 + (Math.random() - 0.5) * 0.012,
      lng: 77.2090 + (Math.random() - 0.5) * 0.012,
      isOnline: false
    },
    {
      id: 3,
      name: 'Sneha Joshi',
      status: 'Looking for reading group members',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Indian%20woman%20friend%20avatar%2C%20enthusiastic%20expression%2C%20contemporary%20fashion&width=60&height=60&seq=friend-3&orientation=squarish',
      lastSeen: '5 minutes ago',
      lat: 28.6139 + (Math.random() - 0.5) * 0.018,
      lng: 77.2090 + (Math.random() - 0.5) * 0.018,
      isOnline: true
    }
  ];

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationPermission('granted');
        },
        (error) => {
          console.error('Location error:', error);
          setLocationPermission('denied');
          setUserLocation({ lat: 28.6139, lng: 77.2090 });
        }
      );
    }
  };

  useEffect(() => {
    requestLocation();
  }, []);

  const filteredReaders = selectedBook === 'all' 
    ? readersNearby 
    : readersNearby.filter(reader => reader.reading === selectedBook);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Reader Maps</h1>
          <p className="text-lg text-gray-600">Connect with fellow readers and friends near you</p>
        </div>

        <div className="flex space-x-1 mb-8 bg-gray-200 p-1 rounded-full max-w-md">
          <button
            onClick={() => setActiveMap('readers')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeMap === 'readers'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Readers Near Me
          </button>
          <button
            onClick={() => setActiveMap('friends')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeMap === 'friends'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Friends Near Me
          </button>
        </div>

        {activeMap === 'readers' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by book:
            </label>
            <select
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
            >
              {popularBooks.map(book => (
                <option key={book.id} value={book.id}>{book.title}</option>
              ))}
            </select>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {activeMap === 'readers' ? 'Readers' : 'Friends'} Around You
                </h3>
                {locationPermission === 'denied' && (
                  <button
                    onClick={requestLocation}
                    className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Enable Location
                  </button>
                )}
              </div>

              <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2363469812526!2d77.20687931508048!3d28.6139391824407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35d4b6c0ab%3A0x7d2bc9e8db2f5c7e!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1647875932000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Interactive map showing {activeMap === 'readers' ? 'readers' : 'friends'} within 5km radius
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {activeMap === 'readers' 
                ? `${filteredReaders.length} Reader${filteredReaders.length !== 1 ? 's' : ''} Found`
                : `${friendsNearby.length} Friends Nearby`
              }
            </h3>

            {activeMap === 'readers' && (
              <div className="space-y-3">
                {filteredReaders.map((reader) => (
                  <div key={reader.id} className="bg-white rounded-xl shadow-md p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <img
                        src={reader.avatar}
                        alt={reader.name}
                        className="w-12 h-12 rounded-full object-cover object-top"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{reader.name}</h4>
                        <p className="text-sm text-gray-600">{reader.distance}</p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm text-gray-700 mb-1">Reading: {reader.book}</p>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs font-medium text-gray-700">{reader.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${reader.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                        Connect
                      </button>
                      <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                        Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeMap === 'friends' && (
              <div className="space-y-3">
                {friendsNearby.map((friend) => (
                  <div key={friend.id} className="bg-white rounded-xl shadow-md p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="relative">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-12 h-12 rounded-full object-cover object-top"
                        />
                        {friend.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{friend.name}</h4>
                        <p className="text-xs text-gray-500">{friend.lastSeen}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-3">{friend.status}</p>

                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                        Chat
                      </button>
                      <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                        Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Connect Through Reading</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Discover readers and friends near you. Share your reading journey, exchange book recommendations, 
            and build meaningful connections through the power of books.
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-medium whitespace-nowrap cursor-pointer">
            Invite Friends
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}