import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const includedFeatures = [
  "Video Conference",
  "Legal Mentorship Program",
  "E-Books",
  "Guides",
];

const Pricing = () => {
  return (
    <div className="py-24 sm:py-32">
      {/* Background elements */}
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
      <div className="fixed inset-0 z-[-10] overflow-hidden blur-3xl">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
      {/* Pricing section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose your plans: Affordable Solutions for Legal Ease
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock Premium Features with Legalease Nexus Membership: Gain Access
            to Exclusive Resources, Tools, and Support.
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Monthly Plan */}
          <div className="p-8 rounded-3xl ring-1 ring-gray-300">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Monthly Subscription
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Subscribe Monthly and Enjoy Premium Features with Legalease Nexus
              Membership.
            </p>
            {/* Features */}
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {/* Pricing and Button */}
            <div className="mt-8">
              <p className="text-base font-semibold text-gray-600">
                Billed monthly
              </p>
              <p className="mt-2 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  Rs 1500
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  PKR / month
                </span>
              </p>
              <a
                href="/checkoutM"
                className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a>
            </div>
          </div>

          {/* Annual Plan */}
          <div className="p-8 rounded-3xl ring-1 ring-gray-300">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Annual Subscription
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Subscribe Annually and Enjoy Premium Features with Legalease Nexus
              Membership.
            </p>
            {/* Features */}
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {/* Pricing and Button */}
            <div className="mt-8">
              <p className="text-base font-semibold text-gray-600">
                Billed annually
              </p>
              <p className="mt-2 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  Rs 5000
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  PKR / year
                </span>
              </p>
              <a
                href="/checkoutY"
                className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a>
            </div>
          </div>

          {/* Lifetime Plan */}
          <div className="p-8 rounded-3xl ring-1 ring-gray-300">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Lifetime Subcription
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Invest Once, Benefit Forever: Secure a Lifetime Membership and
              Enjoy Endless Legal Assistance, Courses, and Books.
            </p>
            {/* Features */}
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {/* Pricing and Button */}
            <div className="mt-8">
              <p className="text-base font-semibold text-gray-600">
                Pay once, own it forever
              </p>
              <p className="mt-2 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  Rs 15000
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  PKR
                </span>
              </p>
              <a
                href="/checkout"
                className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
