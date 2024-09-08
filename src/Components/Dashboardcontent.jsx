import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardContent = () => {
  const navigate = useNavigate();

  const handleCompleteProfile = () => {
    navigate('/complete-profile');
  };

  return (
    <div className="p-8">
      {/* <h2 className="text-2xl font-bold mb-4">Dashboard</h2> */}
      <p className="mb-4 text-red-600 font-semibold">
        Complete your profile first, otherwise you can't proceed further.
      </p>
      <button
        onClick={handleCompleteProfile}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
      >
        Complete Profile
      </button>
    </div>
  );
};

export default DashboardContent;
