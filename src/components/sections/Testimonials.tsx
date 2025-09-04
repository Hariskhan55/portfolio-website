import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Khan',
      position: 'CEO, TechVision Solutions',
      company: 'TechVision Solutions',
      image: '👨‍💼',
      rating: 5,
      text: 'Muhammad Haris delivered exceptional work on our e-commerce platform. His expertise in React and Next.js helped us create a fast, responsive website that exceeded our expectations.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Project Manager, Digital Hub',
      company: 'Digital Innovation Hub',
      image: '👩‍💼',
      rating: 5,
      text: 'Working with Haris was a pleasure. His attention to detail and ability to translate complex requirements into beautiful, functional interfaces is remarkable.'
    },
    {
      id: 3,
      name: 'Ali Raza',
      position: 'Startup Founder',
      company: 'StartupLab',
      image: '👨‍🚀',
      rating: 5,
      text: 'Haris built our AI translation tool from scratch. The real-time translation feature works flawlessly, and the UI is incredibly intuitive. Highly recommended!'
    },
    {
      id: 4,
      name: 'Maria Garcia',
      position: 'Marketing Director',
      company: 'Creative Agency',
      image: '👩‍🎨',
      rating: 5,
      text: 'The portfolio website Haris created for our agency is stunning. It perfectly represents our brand and has significantly improved our client engagement.'
    },
    {
      id: 5,
      name: 'John Smith',
      position: 'CTO, FinTech Solutions',
      company: 'FinTech Solutions',
      image: '👨‍💻',
      rating: 5,
      text: 'Haris integrated complex payment systems into our platform seamlessly. His knowledge of modern web technologies and security best practices is impressive.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen md:h-full overflow-y-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent mb-4">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 animate-fade-in-delay">What clients say about my work</p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8 min-h-[300px] flex flex-col justify-center animate-fade-in hover:shadow-2xl transition-all duration-500">
            <div className="text-center">
              <div className="text-6xl mb-4">
                {testimonials[currentSlide].image}
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-600 dark:text-gray-400 italic mb-6 leading-relaxed">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-blue-600 font-medium">
                  {testimonials[currentSlide].position}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {testimonials[currentSlide].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
            >
              ←
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Thumbnail Testimonials */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                index === currentSlide ? 'ring-2 ring-blue-600' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{testimonial.image}</span>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                {testimonial.text.substring(0, 80)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;