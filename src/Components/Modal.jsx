import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-red-600 text-white rounded-lg"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-6 w-1/3 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Are you sure?</h2>
            <p className="mt-4">Do you really want to delete this user?</p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle delete logic here
                  toggleModal();
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
