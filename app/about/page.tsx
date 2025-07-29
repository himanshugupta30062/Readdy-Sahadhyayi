'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Founder & CEO",
      description: "Passionate about reviving reading culture in India through technology and community building."
    },
    {
      id: 2,
      name: "Rahul Gupta",
      role: "Head of Community",
      description: "Building bridges between readers, authors, and book lovers across the country."
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Content Curator",
      description: "Curating the finest collection of books and ensuring quality reading experiences."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "BookCircle Founded",
      description: "Started with a vision to revive reading culture in India"
    },
    {
      year: "Early 2024",
      title: "10K+ Active Readers",
      description: "Built a thriving community of passionate book lovers"
    },
    {
      year: "Mid 2024",
      title: "500+ Authors Connected",
      description: "Bridged the gap between readers and their favorite authors"
    },
    {
      year: "Late 2024",
      title: "Physical Centers Launch",
      description: "Opening reading centers across major Indian cities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20library%20interior%20with%20warm%20lighting%2C%20people%20of%20different%20ages%20reading%20books%20together%20in%20a%20cozy%20environment%2C%20bookshelves%20in%20background%2C%20natural%20light%2C%20inspiring%20and%20peaceful%20reading%20atmosphere%2C%20diverse%20community%20of%20readers%2C%20modern%20minimalist%20library%20design&width=1200&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">About BookCircle</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Reviving the joy of reading through community, technology, and meaningful connections
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            In an age of digital distractions, we believe that reading books remains the gold standard 
            for deep learning, improved concentration, and personal growth. BookCircle exists to rebuild 
            the reading culture by connecting readers, authors, and communities through shared stories and experiences.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're not just another reading app - we're a movement to protect the timeless art of reading 
            while embracing modern community-building tools that make books more accessible and discussions more meaningful.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Reading Matters More Than Ever</h2>
            <p className="text-lg text-gray-600">The science behind why books beat videos and podcasts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-brain-line text-2xl text-blue-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deeper Concentration</h3>
              <p className="text-gray-600">
                Reading books trains your mind for sustained attention and deep thinking, 
                unlike the fragmented attention patterns from video consumption.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-eye-line text-2xl text-green-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Protects Your Health</h3>
              <p className="text-gray-600">
                Reading doesn't strain your eyes like screens or damage your hearing like 
                constant audio consumption. It's the healthiest way to consume information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-lightbulb-line text-2xl text-purple-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Active Learning</h3>
              <p className="text-gray-600">
                Reading requires active mental engagement, imagination, and critical thinking - 
                making it superior for retention and comprehension.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Building a reading revolution, one book at a time</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <span className="text-blue-600 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Passionate individuals working to revive reading culture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  src={`https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20${member.name}%2C%20${member.role.toLowerCase()}%2C%20friendly%20and%20approachable%20appearance%2C%20business%20casual%20attire%2C%20clean%20background%2C%20high%20quality%20headshot%20style%2C%20warm%20and%20inviting%20expression&width=200&height=200&seq=team-${member.id}&orientation=squarish`}
                  alt={member.name}
                  className="w-32 h-32 object-cover object-top rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join the Reading Revolution</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Together, we can bring back the culture of deep reading, meaningful discussions, 
            and the transformative power of books. Join thousands who are already part of this movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer">
              Start Reading Today
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer">
              Connect With Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
