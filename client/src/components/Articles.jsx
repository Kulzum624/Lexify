import React from "react";

const Article = () => {
  return (
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Navigating the Legal Landscape
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A Guide to Understanding Common Legal Terms
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  In this comprehensive guide, legal analyst Sarah Thompson
                  unpacks the intricate world of legal terminology, offering
                  readers a vital tool for navigating the often-confusing
                  language of the law.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-3xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://vannormanlaw.com/wp-content/uploads/2021/03/RuleofLaw.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  The article begins by demystifying fundamental terms,
                  providing clarity on concepts such as "due process" and "voir
                  dire." Thompson's engaging prose makes complex ideas
                  accessible, empowering readers to comprehend and engage with
                  legal discourse more effectively. Id orci tellus laoreet id
                  ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
                  ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim,
                  consequat vulputate nibh. Maecenas pellentesque id sed tellus
                  mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
                  Pellentesque nam sed nullam sed diam turpis ipsum eu a sed
                  convallis diam. Id orci tellus laoreet id ac. Dolor, aenean
                  leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat
                  vulputate nibh. Maecenas pellentesque id sed tellus mauris,
                  ultrices mauris. Tincidunt enim cursus ridiculus mi.
                  Pellentesque nam sed nullam sed diam turpis ipsum eu a sed
                  convallis diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Article;
