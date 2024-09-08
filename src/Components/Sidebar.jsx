import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <ul>
          {/* Litigant Dashboard with enhanced styling */}
          <li className="mb-6">
            <Link
              to="/dashboard"
              className="block p-4 bg-blue-700 text-lg font-bold rounded hover:bg-blue-600 shadow-lg text-center"
            >
              Litigant Dashboard
            </Link>
          </li>
          {/* Complete Profile */}
          <li className="mb-4">
            <Link to="/complete-profile" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
              Complete Profile
            </Link>
          </li>
          {/* Search Advocate */}
          <li className="mb-4">
            <Link to="/search-advocate" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
              Search Advocate
            </Link>
          </li>
          {/* Register Case */}
          <li className="mb-4">
            <Link to="/register-case" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
              Register Case
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
