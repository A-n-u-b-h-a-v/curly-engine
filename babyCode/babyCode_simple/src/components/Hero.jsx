import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Master Your <span className="text-blue-600">IELTS</span> Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Achieve your dream IELTS score with our expert-led courses, AI-powered practice tests, 
              and personalized learning approach. Join thousands of successful students worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 hover:shadow-lg">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">10,000+</div>
                <div className="text-sm sm:text-base text-gray-600">Students Enrolled</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">8.5</div>
                <div className="text-sm sm:text-base text-gray-600">Average Band Score</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Banner */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform rotate-1 sm:rotate-3 hover:rotate-0 transition duration-500">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4 sm:p-6 lg:p-8 text-white">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">IELTS Certificate</h3>
                  <p className="text-blue-100 mb-4 text-sm sm:text-base">Band Score: 8.5</p>
                  <div className="text-xs sm:text-sm text-blue-100 space-y-1">
                    <div>✓ Speaking: 8.5</div>
                    <div>✓ Listening: 8.5</div>
                    <div>✓ Reading: 8.5</div>
                    <div>✓ Writing: 8.0</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-yellow-500 text-white p-2 sm:p-4 rounded-full shadow-lg animate-bounce">
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-green-500 text-white p-2 sm:p-4 rounded-full shadow-lg animate-pulse">
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
