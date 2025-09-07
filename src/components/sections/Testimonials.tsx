import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Asad Ali',
      position: 'CEO',
      company: 'AeroSenergy',
      rating: 5,
      text: 'Muhammad Haris has been an exceptional frontend developer at AeroSenergy. His expertise in React and modern web technologies has significantly contributed to our project success. His attention to detail and problem-solving skills make him a valuable team member.'
    },
    {
      id: 2,
      name: 'Sara Khan',
      position: 'Project Manager',
      company: 'Developer Hub Corporation',
      rating: 5,
      text: 'Working with Haris was a great experience. His ability to deliver high-quality frontend solutions on time and his collaborative approach made our projects successful. He consistently exceeded our expectations with clean, efficient code.'
    },
    {
      id: 3,
      name: 'Ahmed Hassan',
      position: 'Lead Developer',
      company: 'Code Alpha',
      rating: 5,
      text: 'Haris started his journey with us and quickly proved his dedication to learning and excellence. His growth as a developer and his commitment to delivering quality work made him stand out from day one.'
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
          <p className="text-gray-600 dark:text-gray-400">What clients say about my work</p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8 min-h-[300px] flex flex-col justify-center animate-fade-in hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                {testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                index === currentSlide ? 'ring-2 ring-blue-600' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
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