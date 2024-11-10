// BookModal.jsx
import React from "react";

const BookModal = ({ book, coverUrl, summary, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-md p-6 max-w-7xl w-full">
        <button className="absolute top-0 right-0 p-2" onClick={onClose}>
          Close
        </button>
        <div className="mb-2">
          {coverUrl ? (
            <img
              src={coverUrl}
              alt="Book Cover"
              className="w-32 h-48 object-cover"
            />
          ) : (
            <div className="w-32 h-48 bg-gray-200 flex items-center justify-center text-gray-400">
              No Cover Available
            </div>
          )}
        </div>
        <h2 className="text-lg font-semibold">{book.title}</h2>
        <p>
          Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
        </p>
        <p>Total Editions: {book.edition_count || "Unknown"}</p>
        <p>First Publish Year: {book.first_publish_year || "Unknown"}</p>
        <p>Summary: {summary || "Summary not available"}</p>{" "}
        {/* Render the summary */}
      </div>
    </div>
  );
};

export default BookModal;
