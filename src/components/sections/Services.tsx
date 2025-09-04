import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React.js, Next.js, and modern CSS frameworks.',
      icon: '💻',
      features: ['React.js & Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Full Stack Development',
      description: 'Complete web application development from frontend to backend with modern technologies.',
      icon: '🚀',
      features: ['MERN Stack', 'API Development', 'Database Design', 'Authentication']
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Creating beautiful and user-friendly interfaces with focus on user experience and modern design.',
      icon: '🎨',
      features: ['Modern Design', 'User Experience', 'Prototyping', 'Design Systems']
    },
    {
      id: 4,
      title: 'Web Optimization',
      description: 'Improving website performance, SEO optimization, and ensuring fast loading times.',
      icon: '⚡',
      features: ['Performance Optimization', 'SEO', 'Core Web Vitals', 'Speed Enhancement']
    },
    {
      id: 5,
      title: 'E-commerce Solutions',
      description: 'Building complete e-commerce platforms with payment integration and admin dashboards.',
      icon: '🛒',
      features: ['Payment Integration', 'Inventory Management', 'Admin Dashboard', 'Order Processing']
    },
    {
      id: 6,
      title: 'AI Integration',
      description: 'Integrating AI-powered features like translation tools, chatbots, and smart recommendations.',
      icon: '🤖',
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
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
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