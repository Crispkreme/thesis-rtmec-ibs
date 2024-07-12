import React from 'react';

export default function Notification({ message, onClose }) {

  if (!message) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-green-500 text-white py-2 px-4 rounded shadow-md">
        {message}
        <button className="ml-2 text-white" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
