import React from 'react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, isDark, toggleTheme, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden w-12 h-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
      >
        <span className="text-xl">☰</span>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-40 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
      {/* Theme Toggle - Top Corner */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-400 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-110 border border-blue-200 dark:border-blue-700 animate-border-glow"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Profile Section */}
      <div className="p-8 text-center border-b border-gray-200 dark:border-gray-700 mt-4">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <img 
            src="public/profile.png" 
            alt="Muhammad Haris" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement!;
              parent.className += ' bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl';
              parent.textContent = 'MH';
            }}
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white animate-fade-in">Muhammad Haris</h2>
        <p className="text-blue-600 text-sm animate-fade-in-delay">Full Stack Developer</p>
      </div>

      {/* Navigation */}
      <nav className="p-6">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg border-l-4 border-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md hover:border-l-4 hover:border-blue-500'
                } animate-fade-in`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hire Me Button */}
      <div className="absolute bottom-6 left-6 right-6">
        <button
          onClick={() => {
            setActiveSection('contact');
            setIsMobileMenuOpen(false);
          }}
          className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 animate-glow"
        >
          💼 Hire Me
        </button>
      </div>
    </div>
    </>
  );
};

export default Sidebar;