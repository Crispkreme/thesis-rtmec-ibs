import React, { useState } from 'react';

export default function DeleteModal({ isOpen, onConfirm, onCancel, title, message }) {
  const [showAlert, setShowAlert] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setShowAlert(true); 
    onConfirm(); 
  };

  const handleClose = () => {
    onCancel(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Confirm Delete
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
