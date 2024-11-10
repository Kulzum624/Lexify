import React from "react";

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-600">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <svg
          className="w-16 h-16 mx-auto text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1 className="text-3xl font-semibold text-gray-800 mt-4">Cancel</h1>
        <h2 className="text-xl text-gray-600 mt-2">
          Your payment was canceled.
        </h2>
      </div>
    </div>
  );
};

export default Cancel;
