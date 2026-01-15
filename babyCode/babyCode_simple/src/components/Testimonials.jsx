import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "Canada",
      score: "8.5",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "Elite IELTS transformed my preparation completely. The AI feedback on speaking was incredibly detailed, and I achieved my target score of 8.5 in just 3 months!",
      course: "Academic IELTS"
    },
    {
      name: "Mohammed Ali",
      country: "UAE",
      score: "7.5",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "The mock tests were exactly like the real exam. The detailed analytics helped me identify my weak areas and improve systematically. Highly recommended!",
      course: "General IELTS"
    },
    {
      name: "Priya Sharma",
      country: "India",
      score: "9.0",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "I never thought I could score 9.0! The personalized study plan and expert tutoring sessions made all the difference. Thank you Elite IELTS!",
      course: "Academic IELTS"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join thousands of successful students who achieved their dream IELTS scores with our proven methodology.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-blue-600 opacity-20">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Student Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 sm:mr-4 border-2 sm:border-4 border-blue-600">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg truncate">{testimonial.name}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{testimonial.country}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.course}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    Band {testimonial.score}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">10,000+</div>
              <div className="text-sm sm:text-base text-gray-600">Happy Students</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">8.2</div>
              <div className="text-sm sm:text-base text-gray-600">Average Score</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-600">Countries</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Start your IELTS preparation today and achieve the score you need for your dreams.
          </p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
