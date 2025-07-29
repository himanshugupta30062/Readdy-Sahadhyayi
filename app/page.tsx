'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20peaceful%20library%20scene%20with%20warm%20golden%20lighting%2C%20people%20reading%20books%20in%20comfortable%20chairs%2C%20bookshelves%20filled%20with%20colorful%20books%20in%20the%20background%2C%20plants%20and%20natural%20light%20streaming%20through%20large%20windows%2C%20creating%20an%20inviting%20and%20inspiring%20reading%20atmosphere%2C%20cozy%20and%20intellectual%20environment%20with%20diverse%20people%20of%20different%20ages%20enjoying%20books%2C%20modern%20minimalist%20library%20design%20with%20wooden%20accents&width=1200&height=800&seq=hero-reading-1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative w-full px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Revive the <span className="text-blue-400">Reading Culture</span> Through Community
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl">
              Join Sahadhyayi - Connect with fellow readers, discover thousands of books online, find friends who share your reading passion, and build meaningful connections through literature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/discover">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer">
                  Explore Books
                </button>
              </Link>
              <Link href="/maps">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/20 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer">
                  Find Readers Near You
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Reading Communities Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In a world of videos and podcasts, reading remains the gold standard for deep learning and meaningful connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-brain-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Concentration</h3>
              <p className="text-gray-600">
                Reading books improves focus and concentration skills unlike videos or audio content that can be passive consumption.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-map-pin-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Reading Maps</h3>
              <p className="text-gray-600">
                Discover readers and friends near you through our interactive maps. Connect with people reading the same books in your area.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-smile-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Avatars</h3>
              <p className="text-gray-600">
                Create your unique reading avatar that represents you in the community and appears on social reading maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Track Your Reading Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor your progress, set goals, and celebrate milestones with our vibrant reading community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-read-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reading Progress</h3>
              <p className="text-gray-600 mb-4">Track pages read, time spent, and completion rates across all your books</p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">73%</div>
                <div className="text-sm text-gray-500">Current Book</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-community-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Features</h3>
              <p className="text-gray-600 mb-4">Find readers near you and connect through shared interests</p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">50K+</div>
                <div className="text-sm text-gray-500">Active Readers</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reading Goals</h3>
              <p className="text-gray-600 mb-4">Set monthly and yearly reading targets with community support</p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">12/15</div>
                <div className="text-sm text-gray-500">Books This Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Discover Thousands of Books Online
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Access our vast digital library with books across all genres. From bestsellers to hidden gems, 
                find your next favorite read and connect with others who share your literary interests.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-gray-600">Books Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Reading Groups</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-gray-600">Featured Authors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">25K+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/library">
                  <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer">
                    Explore Library
                  </button>
                </Link>
                <Link href="/maps">
                  <button className="px-8 py-4 bg-gray-100 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer">
                    Find Readers
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20digital%20library%20interface%20showing%20book%20covers%20on%20tablet%20and%20mobile%20devices%2C%20social%20reading%20features%20with%20avatars%20and%20maps%2C%20clean%20minimalist%20design%2C%20people%20connecting%20through%20books%2C%20technology%20and%20literature%20combined%20harmoniously%2C%20community%20aspects%20visible&width=600&height=400&seq=digital-library-social&orientation=landscape"
                alt="Social digital library experience"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join the Reading Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with thousands of readers, discover your next favorite book, and be part of a community that's reviving the reading culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/discover">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer">
                Start Reading
              </button>
            </Link>
            <Link href="/avatar">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer">
                Create Avatar
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </div>
  );
}