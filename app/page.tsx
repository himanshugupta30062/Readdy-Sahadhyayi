
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      if (formData.email && formData.password) {
        setMessageType('success');
        setShowMessage(true);
        // Reset form
        setFormData({ email: '', password: '', rememberMe: false });
        setTimeout(() => setShowMessage(false), 3000);
      } else {
        setMessageType('error');
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-book-open-line text-white text-xl"></i>
              </div>
              <span className="text-3xl font-pacifico text-blue-600">Sahadhyayi</span>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back to your reading journey</h2>
            <p className="text-gray-600">Sign in to connect with fellow readers and discover your next favorite book</p>
          </div>

          {showMessage && (
            <div className={`mb-6 p-4 rounded-lg ${messageType === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center">
                <div className={`w-5 h-5 flex items-center justify-center mr-3`}>
                  <i className={`${messageType === 'success' ? 'ri-check-line text-green-600' : 'ri-error-warning-line text-red-600'}`}></i>
                </div>
                <p className={`text-sm ${messageType === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                  {messageType === 'success' 
                    ? 'Successfully signed in! Welcome back to your reading community.' 
                    : 'Please fill in all fields to continue.'}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
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
                Password
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
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer">
                Forgot password?
              </button>
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
                  Signing In...
                </div>
              ) : (
                'Sign In to Sahadhyayi'
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
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
              New to our reading community?{' '}
              <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                Create your account
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