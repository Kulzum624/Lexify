import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import Library from "./assets/Library.jpg"; // Import your background image here

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        searchBooks();
      } else {
        setBooks([]);
        setLoading(false);
        setError("true");
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const searchBooks = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `http://openlibrary.org/search.json?q=${query}+subject:"law"`
      );
      if (!response.data) {
        throw new Error("No data received");
      }
      setBooks(
        response.data.docs.filter(
          (book) => book.subject && book.subject.includes("Law")
        )
      );
    } catch (error) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      searchBooks();
    }
  };

  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Library})` }}
    >
      <div className="container mx-auto p-4 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center mb-10 text-white">
          Search Law Books
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mb-2 flex flex-col items-center"
        >
          <input
            type="text"
            placeholder="Search for law books..."
            value={query}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-200"
          />
          <button
            type="submit"
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </form>
        {loading && (
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
            <span class="font-medium ml-2">Processing... </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book, index) => (
            <BookCard key={index} book={book} onCardClick={handleCardClick} />
          ))}
        </div>
        {selectedBook && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <h2 className="text-lg font-semibold mb-2">
              Selected Book Details
            </h2>
            <h3>{selectedBook.title}</h3>
            <p>
              Author:{" "}
              {selectedBook.author_name
                ? selectedBook.author_name.join(", ")
                : "Unknown"}
            </p>
            <p>{selectedBook.summary || "Summary not available"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
