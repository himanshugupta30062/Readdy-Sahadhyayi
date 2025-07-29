'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function AvatarPage() {
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const [customizations, setCustomizations] = useState({
    skin: 'light',
    hair: 'brown',
    outfit: 'casual',
    accessories: 'glasses'
  });

  const avatarOptions = [
    {
      id: 1,
      name: 'Classic Reader',
      image: 'https://readdy.ai/api/search-image?query=Friendly%20cartoon%20avatar%20of%20young%20person%20reading%20book%2C%20clean%20minimalist%20style%2C%20bright%20colors%2C%20cheerful%20expression&width=120&height=120&seq=avatar-1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Book Lover',
      image: 'https://readdy.ai/api/search-image?query=Cute%20animated%20avatar%20holding%20stack%20of%20books%2C%20warm%20smile%2C%20modern%20illustration%20style%2C%20vibrant%20colors&width=120&height=120&seq=avatar-2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Studious Type',
      image: 'https://readdy.ai/api/search-image?query=Intellectual%20cartoon%20avatar%20with%20glasses%20and%20book%2C%20thoughtful%20expression%2C%20contemporary%20art%20style&width=120&height=120&seq=avatar-3&orientation=squarish'
    },
    {
      id: 4,
      name: 'Creative Mind',
      image: 'https://readdy.ai/api/search-image?query=Artistic%20cartoon%20avatar%20with%20creative%20accessories%2C%20colorful%20style%2C%20imaginative%20design%2C%20friendly%20face&width=120&height=120&seq=avatar-4&orientation=squarish'
    },
    {
      id: 5,
      name: 'Adventure Seeker',
      image: 'https://readdy.ai/api/search-image?query=Adventurous%20cartoon%20avatar%20with%20travel%20book%2C%20explorer%20style%2C%20bright%20optimistic%20colors%2C%20engaging%20expression&width=120&height=120&seq=avatar-5&orientation=squarish'
    },
    {
      id: 6,
      name: 'Wisdom Keeper',
      image: 'https://readdy.ai/api/search-image?query=Wise%20cartoon%20avatar%20with%20ancient%20book%2C%20mystical%20elements%2C%20warm%20earth%20tones%2C%20serene%20expression&width=120&height=120&seq=avatar-6&orientation=squarish'
    }
  ];

  const skinOptions = ['light', 'medium', 'dark', 'warm'];
  const hairOptions = ['black', 'brown', 'blonde', 'red', 'gray'];
  const outfitOptions = ['casual', 'formal', 'trendy', 'academic'];
  const accessoryOptions = ['none', 'glasses', 'hat', 'scarf', 'jewelry'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Create Your Avatar</h1>
          <p className="text-lg text-gray-600">Customize your reading persona that appears on maps and in the community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Choose Your Style</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {avatarOptions.map((avatar) => (
                <div
                  key={avatar.id}
                  onClick={() => setSelectedAvatar(avatar.id)}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                    selectedAvatar === avatar.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={avatar.image}
                    alt={avatar.name}
                    className="w-full h-24 object-cover object-top rounded-lg mb-2"
                  />
                  <p className="text-sm font-medium text-gray-900 text-center">{avatar.name}</p>
                  {selectedAvatar === avatar.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 flex items-center justify-center">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Preview & Customize</h2>
              
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <img
                    src={avatarOptions.find(a => a.id === selectedAvatar)?.image}
                    alt="Selected avatar"
                    className="w-28 h-28 rounded-full object-cover object-top"
                  />
                </div>
                <p className="text-sm text-gray-600">Your avatar as it appears to others</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skin Tone</label>
                  <div className="flex space-x-2">
                    {skinOptions.map((skin) => (
                      <button
                        key={skin}
                        onClick={() => setCustomizations({...customizations, skin})}
                        className={`px-3 py-2 rounded-lg text-sm capitalize transition-colors cursor-pointer whitespace-nowrap ${
                          customizations.skin === skin
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {skin}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hair Color</label>
                  <div className="flex space-x-2 flex-wrap gap-2">
                    {hairOptions.map((hair) => (
                      <button
                        key={hair}
                        onClick={() => setCustomizations({...customizations, hair})}
                        className={`px-3 py-2 rounded-lg text-sm capitalize transition-colors cursor-pointer whitespace-nowrap ${
                          customizations.hair === hair
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {hair}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Outfit Style</label>
                  <div className="flex space-x-2 flex-wrap gap-2">
                    {outfitOptions.map((outfit) => (
                      <button
                        key={outfit}
                        onClick={() => setCustomizations({...customizations, outfit})}
                        className={`px-3 py-2 rounded-lg text-sm capitalize transition-colors cursor-pointer whitespace-nowrap ${
                          customizations.outfit === outfit
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {outfit}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Accessories</label>
                  <div className="flex space-x-2 flex-wrap gap-2">
                    {accessoryOptions.map((accessory) => (
                      <button
                        key={accessory}
                        onClick={() => setCustomizations({...customizations, accessories: accessory})}
                        className={`px-3 py-2 rounded-lg text-sm capitalize transition-colors cursor-pointer whitespace-nowrap ${
                          customizations.accessories === accessory
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {accessory}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Avatar Usage</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-map-pin-line text-blue-600 text-xs"></i>
                  </div>
                  <span>Appears on Reader Maps near your location</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-chat-3-line text-green-600 text-xs"></i>
                  </div>
                  <span>Shows in group discussions and comments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-user-line text-purple-600 text-xs"></i>
                  </div>
                  <span>Represents you in the reading community</span>
                </div>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium whitespace-nowrap cursor-pointer">
              Save Avatar
            </button>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Express Your Reading Personality</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Your avatar helps other readers connect with you. Choose a style that reflects your reading personality 
            and makes you easily recognizable in the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors font-medium whitespace-nowrap cursor-pointer">
              View on Map
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-green-600 transition-colors font-medium whitespace-nowrap cursor-pointer">
              Share Profile
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}