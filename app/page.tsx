'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    favoriteGenres: [] as string[],
    acceptTerms: false,
    receiveNewsletter: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [errorMessage, setErrorMessage] = useState('');

  const genres = [
    'Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Sci-Fi', 'Fantasy', 
    'Biography', 'History', 'Self-Help', 'Poetry', 'Philosophy', 'Adventure'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGenreToggle = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      favoriteGenres: prev.favoriteGenres.includes(genre)
        ? prev.favoriteGenres.filter(g => g !== genre)
        : [...prev.favoriteGenres, genre]
    }));
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage('Please fill in all required fields.');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return false;
    }
    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return false;
    }
    if (!formData.acceptTerms) {
      setErrorMessage('Please accept the terms and conditions.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setMessageType('error');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
      return;
    }

    setIsLoading(true);

    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false);
      setMessageType('success');
      setErrorMessage('');
      setShowMessage(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        favoriteGenres: [],
        acceptTerms: false,
        receiveNewsletter: true
      });
      setTimeout(() => setShowMessage(false), 4000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-book-open-line text-white text-xl"></i>
              </div>
              <span className="text-3xl font-pacifico text-blue-600">Sahadhyayi</span>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Our Reading Community</h2>
            <p className="text-gray-600">Create your account and connect with fellow book lovers worldwide</p>
          </div>

          {showMessage && (
            <div className={`mb-6 p-4 rounded-lg ${messageType === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center">
                <div className={`w-5 h-5 flex items-center justify-center mr-3`}>
                  <i className={`${messageType === 'success' ? 'ri-check-line text-green-600' : 'ri-error-warning-line text-red-600'}`}></i>
                </div>
                <p className={`text-sm ${messageType === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                  {messageType === 'success' 
                    ? 'Welcome to Sahadhyayi! Your account has been created successfully.' 
                    : errorMessage}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-user-line text-gray-400"></i>
                  </div>
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-mail-line text-gray-400"></i>
                  </div>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-lock-line text-gray-400"></i>
                  </div>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Create a password (min. 6 characters)"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-lock-2-line text-gray-400"></i>
                  </div>
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Favorite Reading Genres (Optional)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => handleGenreToggle(genre)}
                    className={`px-3 py-2 text-sm rounded-full border transition-colors cursor-pointer ${
                      formData.favoriteGenres.includes(genre)
                        ? 'bg-blue-100 border-blue-300 text-blue-700'
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  I accept the{' '}
                  <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </Link>
                  *
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  id="receiveNewsletter"
                  name="receiveNewsletter"
                  type="checkbox"
                  checked={formData.receiveNewsletter}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="receiveNewsletter" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Send me reading recommendations and community updates
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                  </div>
                  Creating Account...
                </div>
              ) : (
                'Join Sahadhyayi Community'
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-google-fill text-red-500"></i>
                </div>
                <span className="ml-2">Google</span>
              </button>
              <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-facebook-fill text-blue-600"></i>
                </div>
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/signin" className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
            ← Back to Sahadhyayi
          </Link>
        </div>
      </div>
    </div>
  );
}