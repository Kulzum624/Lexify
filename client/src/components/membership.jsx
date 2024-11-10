import React from "react";
import { Link } from "react-router-dom";
import Books from "./assets/Books.jpg";
import Guides from "./assets/Guides.jpg";
import Virtual from "./assets/virtual.jpg";
import Teaching from "./assets/Teaching.jpg";

const Membership = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-1 px-24 justify-center mt-12">
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
      {/* Card 1: Books */}
      <Link
        to="/user/books"
        className="max-w-sm rounded-lg overflow-hidden shadow-md mx-4 mb-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
      >
        <img
          src={Books}
          alt="Books"
          className="w-full h-64 sm:h-72 object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">E-Books</div>
          <p className="text-gray-700 text-base">
            Description about the Books membership goes here.
          </p>
        </div>
      </Link>

      {/* Card 2: Guides */}
      <Link
        to="/user/guides"
        className="max-w-sm rounded-lg overflow-hidden shadow-md mx-4 mb-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
      >
        <img
          src={Guides}
          alt="Guides"
          className="w-full h-64 sm:h-72 object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">Guides</div>
          <p className="text-gray-700 text-base">
            Description about the Guides membership goes here.
          </p>
        </div>
      </Link>

      {/* Card 3: Virtual Consultation */}
      <Link
        to="/user/view-lawyer"
        className="max-w-sm rounded-lg overflow-hidden shadow-md mx-4 mb-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
      >
        <img
          src={Virtual}
          alt="Virtual Consultation"
          className="w-full h-64 sm:h-72 object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">
            Virtual Consultation
          </div>
          <p className="text-gray-700 text-base">
            Description about the Virtual Consultation membership goes here.
          </p>
        </div>
      </Link>

      {/* Card 4: Legal Mentorship Program */}
      <Link
        to="/user/legalmentorship"
        className="max-w-sm rounded-lg overflow-hidden shadow-md mx-4 mb-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
      >
        <img
          src={Teaching}
          alt="Legal Mentorship Program"
          className="w-full h-64 sm:h-72 object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">
            Legal Mentorship Program
          </div>
          <p className="text-gray-700 text-base">
            Description about the Legal Mentorship Program membership goes here.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Membership;
