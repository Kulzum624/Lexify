import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogContent = ({ blogs }) => {
  console.log("Blog Object");

  const { id } = useParams();

  let blog = {};
  if (blogs) {
    let arr = blogs.data.filter((blog) => blog.id == id);
    blog = arr[0] || {};
  } else {
    blog = {};
  }

  return (
    <div className="w-full pb-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 ">
            <img
              className="h-80 w-full bg-cover rounded-lg shadow-lg"
              src={`http://localhost:1337${blog.attributes?.coverImg?.data?.attributes?.url}`}
              alt="Blog Cover"
            />
            <h1 className="font-bold text-2xl my-1 pt-5">
              {blog.attributes?.blogTitle}
            </h1>
            <div className="pt-5">
              <ReactMarkdown className="line-break">
                {blog.attributes.blogContent}
              </ReactMarkdown>
            </div>
          </div>

          <div className="items-center w-full bg-pink-50 rounded-2xl drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
                src={`http://localhost:1337${blog.attributes?.authorImg?.data?.attributes?.url}`}
                alt="Author"
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                {blog.attributes?.authorName}
              </h1>
              <p className="text-center text-gray-900 font-medium">
                {blog.attributes?.authorDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default BlogContent;
