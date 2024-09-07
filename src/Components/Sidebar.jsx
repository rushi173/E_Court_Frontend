import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md text-gray-100 hover:bg-gray-700"
              >
                <span>Dashboard</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md text-gray-100 hover:bg-gray-700"
              >
                <span>Users</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md text-gray-100 hover:bg-gray-700"
              >
                <span>Settings</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md text-gray-100 hover:bg-gray-700"
              >
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
