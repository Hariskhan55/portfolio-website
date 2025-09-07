import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React.js, Next.js, and modern CSS frameworks.',
      iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      features: ['React.js & Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Full Stack Development',
      description: 'Complete web application development from frontend to backend with modern technologies.',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      features: ['MERN Stack', 'API Development', 'Database Design', 'Authentication']
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Creating beautiful and user-friendly interfaces with focus on user experience and modern design.',
      iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5v12a2 2 0 002 2 2 2 0 002-2V3zM17 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM17 3h-2v12a2 2 0 002 2 2 2 0 002-2V3z',
      features: ['Modern Design', 'User Experience', 'Prototyping', 'Design Systems']
    },
    {
      id: 4,
      title: 'Web Optimization',
      description: 'Improving website performance, SEO optimization, and ensuring fast loading times.',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
      features: ['Performance Optimization', 'SEO', 'Core Web Vitals', 'Speed Enhancement']
    },
    {
      id: 5,
      title: 'E-commerce Solutions',
      description: 'Building complete e-commerce platforms with payment integration and admin dashboards.',
      iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01',
      features: ['Payment Integration', 'Inventory Management', 'Admin Dashboard', 'Order Processing']
    },
    {
      id: 6,
      title: 'AI Integration',
      description: 'Integrating AI-powered features like translation tools, chatbots, and smart recommendations.',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      features: ['OpenAI Integration', 'Real-time Translation', 'Smart Features', 'AI-powered Tools']
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen md:h-full overflow-y-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-delay">
            I offer comprehensive web development services to help bring your ideas to life with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;