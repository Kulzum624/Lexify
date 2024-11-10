// BookCard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookModal from "./BookModal"; // Import BookModal component

const BookCard = ({ book, onCardClick }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [coverUrl, setCoverUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [firstPublishYear, setFirstPublishYear] = useState("");
  const [totalEditions, setTotalEditions] = useState("");

  const fetchBookCover = async (isbn) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
      );
      if (
        response.data &&
        response.data.items &&
        response.data.items.length > 0
      ) {
        const bookData = response.data.items[0].volumeInfo;
        if (bookData.imageLinks && bookData.imageLinks.thumbnail) {
          setCoverUrl(bookData.imageLinks.thumbnail);
        }
        if (bookData.description) {
          setSummary(bookData.description);
        }
        if (bookData.publishedDate) {
          setFirstPublishYear(bookData.publishedDate.substring(0, 4));
        }
      }
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  // Fetch book cover image and details when the component mounts
  useEffect(() => {
    if (book.isbn && book.isbn.length > 0) {
      fetchBookCover(book.isbn[0]); // Assuming the first ISBN is the primary identifier
    }
  }, [book]);

  return (
    <div>
      <div
        className="bg-white shadow-md rounded-md p-4 mb-4 cursor-pointer"
        onClick={handleCardClick}
      >
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
      </div>
      {showDetails && (
        <BookModal
          book={book}
          coverUrl={coverUrl}
          summary={summary}
          firstPublishYear={firstPublishYear}
          totalEditions={totalEditions}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
};

export default BookCard;
