import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.data
    ? blogs.data.filter((blog) =>
        blog.attributes.blogTitle
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="w-full py-[50px]">
      {/* Search Bar */}
      <div className="max-w-[1240px] mx-auto mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-96 p-2 border border-gray-900 rounded"
        />
      </div>

      {filteredBlogs.length === 0 && (
        <div className="max-w-4xl mx-auto mb-4 text-center text-gray-900 bg-dimBlue p-4 rounded">
          No blog found for entered query.
        </div>
      )}

      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          {filteredBlogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <div className="bg-pink-50 rounded-xl overflow-hidden drop-shadow-md">
                <img
                  className="h-56 w-full bg-cover"
                  src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
                  alt={blog.attributes.blogTitle}
                />
                <div className="p-8">
                  <h3 className="font-bold text-2xl my-1">
                    {blog.attributes.blogTitle}
                  </h3>
                  <p className="text-gray-600 text-xl">
                    {blog.attributes.blogDesc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
