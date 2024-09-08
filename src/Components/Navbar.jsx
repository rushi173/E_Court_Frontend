import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-end items-center">
        <button className="px-4 py-2 mx-2 bg-blue-500 rounded hover:bg-blue-400">Profile</button>
        <button className="px-4 py-2 mx-2 bg-red-500 rounded hover:bg-red-400">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
