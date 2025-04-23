import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAvailablePages } from '../utils/pageUtils';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [pages, setPages] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const availablePages = getAvailablePages();
    setPages(availablePages);
  }, []);

  const formatPageName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 bg-indigo-700 text-white">
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
        <nav className="mt-4">
          {pages.map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              className={`block px-4 py-2 text-sm ${
                location.pathname === `/${page}`
                  ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {formatPageName(page)}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout; 