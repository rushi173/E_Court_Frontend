import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Dashboard</div>
        <div className="relative">
          <input
            type="text"
            className="px-4 py-2 w-48 bg-gray-900 text-gray-300 rounded-lg focus:outline-none focus:bg-gray-700"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-700 text-white px-3 py-2 rounded-lg">Profile</button>
          <button className="bg-red-600 text-white px-3 py-2 rounded-lg">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
