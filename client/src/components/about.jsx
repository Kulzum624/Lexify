import React from "react";
import Banner from "./assets/banner.png";

const About = () => {
  return (
    <div>
      <div className="mt-2 relative isolate overflow-hidden bg-black py-24 sm:py-32">
        <img
          src={Banner}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
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

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Unlock the Power of Justice
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Your Gateway to Legal Empowerment! Join our website where 95% of
              users find expert legal advice within 24 hours. Navigate the legal
              maze effortlessly with a 98% success rate in resolving cases.
              Empower yourself with knowledge; join the community where 9 out of
              10 users achieve a favorable outcome. Your rights, your voice –
              discover the difference today!
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">
                Open roles <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Internship program <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Our values <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Meet our leadership <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Offices worldwide
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  12
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Expert Law Advisors
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  10
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Availability
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  24/7
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Subscription Plan
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  Life Time Access
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
