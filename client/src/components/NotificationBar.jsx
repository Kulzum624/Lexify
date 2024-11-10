import React from 'react';

const NotificationBar = ({ bookingDetails, onClose }) => {
  return (
    <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 rounded-md mt-5 shadow-lg">
      <p className="text-lg font-bold mb-2">Booking Confirmed!</p>
      <p className="text-sm">Meeting with {bookingDetails.lawyer_name} on {bookingDetails.day}, {bookingDetails.date} at {bookingDetails.slot}</p>
      <button onClick={onClose} className="mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Confirm</button>
    </div>
  );
};

export default NotificationBar;
