'use client';

import { useState } from 'react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Namaste! I'm your Sahadhyayi AI Assistant. I can help you find books, connect with readers near you, and explore our community features. How can I assist you today?",
      isBot: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickSuggestions = [
    "Find readers near me",
    "Recommend Indian authors", 
    "Popular books this month",
    "How to create my avatar",
    "Join reading groups"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputMessage,
        isBot: false
      };
      
      setMessages([...messages, userMessage]);
      setInputMessage('');

      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: getBotResponse(inputMessage),
          isBot: true
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('near') || lowerMessage.includes('map') || lowerMessage.includes('location')) {
      return "Great! You can find readers near you using our Reader Maps feature. Visit the 'Reader Maps' section to see people reading the same books in your area and connect with friends. You can filter by specific books and see their reading progress too!";
    }
    
    if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest') || lowerMessage.includes('indian')) {
      return "I'd love to recommend some excellent books! For Indian authors, try Chetan Bhagat's contemporary fiction, Amish Tripathi's mythology series, or Ruskin Bond's nature stories. For international bestsellers, 'Atomic Habits', 'The Psychology of Money', and 'Sapiens' are very popular in our community.";
    }
    
    if (lowerMessage.includes('avatar') || lowerMessage.includes('profile')) {
      return "Creating your avatar is easy and fun! Go to the Avatar section where you can choose from different styles, customize your appearance with various skin tones, hair colors, outfits, and accessories. Your avatar will appear on maps and in the community, representing your reading personality!";
    }
    
    if (lowerMessage.includes('group') || lowerMessage.includes('community') || lowerMessage.includes('join')) {
      return "Our reading groups are amazing for connecting with fellow book lovers! You can join existing groups reading books you're interested in, or start your own group. We have both online and local meetups. Check the 'Reading Groups' section to explore active discussions.";
    }
    
    if (lowerMessage.includes('habit') || lowerMessage.includes('start reading')) {
      return "Starting a reading habit is wonderful! I recommend beginning with 15-20 minutes daily, choosing books that genuinely excite you, and joining our community for motivation. Use our progress tracking to monitor your journey and connect with readers who can inspire you!";
    }
    
    return "I'm here to help you navigate Sahadhyayi! I can assist with finding books, connecting with readers near you, creating your avatar, joining reading groups, building reading habits, and exploring our community features. What would you like to know more about?";
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer group"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-robot-line text-xl group-hover:scale-110 transition-transform"></i>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
        <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-robot-line text-sm"></i>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Sahadhyayi AI</h3>
              <p className="text-xs text-blue-100">Your reading companion</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-6 h-6 flex items-center justify-center hover:bg-blue-500 rounded-full transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-sm"></i>
          </button>
        </div>

        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="space-y-2">
              <p className="text-xs text-gray-500 text-center">Quick suggestions:</p>
              {quickSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors cursor-pointer"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me about books, maps, avatars..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-send-plane-line text-xs"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}