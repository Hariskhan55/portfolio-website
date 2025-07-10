import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main className={`transition-all duration-300 p-6 w-full ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {children}
      </main>
    </div>
  );
}
