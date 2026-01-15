import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Speaking Practice",
      description: "Interactive speaking sessions with AI feedback and real-time pronunciation analysis to boost your confidence.",
      color: "bg-blue-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Mock Tests",
      description: "Full-length practice tests that simulate real IELTS conditions with detailed performance analytics.",
      color: "bg-green-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "AI Band Score",
      description: "Advanced AI technology provides instant band score predictions and personalized improvement strategies.",
      color: "bg-purple-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Expert Tutoring",
      description: "One-on-one sessions with certified IELTS instructors for personalized guidance and rapid improvement.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Elite IELTS</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our comprehensive approach combines cutting-edge technology with proven teaching methods 
            to ensure your IELTS success.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center group hover:transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 sm:mt-6">
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300 text-sm sm:text-base">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your IELTS Journey?</h3>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join our comprehensive program and get access to all features with a 7-day free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
