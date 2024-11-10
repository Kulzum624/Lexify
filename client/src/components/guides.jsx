import React, { useState } from "react";
import PDF from "./assets/PDF.jpg"; // Import your background image

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const pdfDocuments = [
    {
      id: 1,
      title: "2 Duty of Care and Negligence",
      url: "/pdf/2 Duty of Care and Negligence.pdf",
    },
    {
      id: 2,
      title: "2-Nature and Scope of Jurisprudence",
      url: "/pdf/2-Nature and Scope of Jurisprudence.pdf",
    },
    {
      id: 3,
      title: "Conflict of Laws",
      url: "/pdf/Conflict of Laws.pdf",
    },
    {
      id: 4,
      title: "Criminal 2021",
      url: "/pdf/Criminal 2021.pdf",
    },
    {
      id: 5,
      title: "Equity and Trusts",
      url: "/pdf/Equity and Trusts.pdf",
    },
    {
      id: 6,
      title: "EU Law",
      url: "/pdf/EU Law.pdf",
    },
    {
      id: 7,
      title: "First Official Chapter Direct Effect",
      url: "/pdf/First Official Chapter Direct Effect.pdf",
    },
    {
      id: 8,
      title: "Introduction to Islamic Law",
      url: "/pdf/Introduction to Islamic Law.pdf",
    },
    {
      id: 9,
      title: "Property Law",
      url: "/pdf/Property Law.pdf",
    },
    {
      id: 10,
      title: "Tort Law",
      url: "/pdf/Tort Law.pdf",
    },
    // Add more documents as needed
  ];

  const filteredDocuments = pdfDocuments.filter((document) =>
    document.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${PDF})` }}
    >
      <div className="container mx-auto px-4 py-8 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search book..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDocuments.map((document) => (
            <div
              key={document.id}
              className="bg-creme rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <h3 className="text-lg font-semibold mb-4">{document.title}</h3>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => window.open(document.url, "_blank")}
                >
                  View
                </button>
                <a
                  href={document.url}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  download
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guides;
