import React from "react";

const DashboardContent = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Total Users</h3>
          <p className="text-2xl mt-4">1,024</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Active Sessions</h3>
          <p className="text-2xl mt-4">342</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold">New Registrations</h3>
          <p className="text-2xl mt-4">58</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
