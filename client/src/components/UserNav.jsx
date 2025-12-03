import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lexify from "./assets/lexify_black.png";

const UserNav = ({ userType, auth1 }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <header className="relative inset-x-0 top-0 z-50 h-full">
      <nav
        className="flex items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src={Lexify} alt="Lexify" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-600"
          >
            About
          </Link>
          {/* Dropdown for Knowledge Base */}
          <div
            className="relative group"
            onClick={handleDropdownToggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/blog"
              className="text-sm font-semibold leading-6 text-gray-600"
            >
              Knowledge Base
            </Link>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 space-y-2 bg-purple-200 border rounded-md shadow-lg">
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Blogs
                </Link>
                <Link
                  to="/article"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Articles
                </Link>
                <Link
                  to="/faqs"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  FAQs
                </Link>
                <Link
                  to="/faqvideoseries"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  FAQ Video Series
                </Link>
              </div>
            )}
          </div>
          {/* <Link
            to="/user/view-lawyer"
            className="text-sm font-semibold leading-6 text-gray-600"
          >
            View Lawyers
          </Link> */}
          <Link
            to="/join-room"
            className="text-sm font-semibold leading-6 text-gray-600"
          >
            Join Meeting
          </Link>
          <Link
            to="/user/legaldocuments"
            className="text-sm font-semibold leading-6 text-gray-600"
          >
            Legal Documents
          </Link>
          <Link
            to="/user/subscriptionbox/pricing"
            className="rounded-md bg-yellow-400 hover:bg-green-500 hover:text-white px-3 py-1 text-sm font-semibold leading-6 text-gray-900"
          >
            Subscription Box
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/logout"
            className="text-md font-bold leading-6 text-blue-500"
          >
            Logout
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0" onClick={handleMobileMenuToggle}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src={Lexify}
                  alt="Lexify"
                />
              </a>
              <button
                type="button"
                onClick={handleMobileMenuToggle}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </Link>
                  {/* Dropdown for Knowledge Base */}
                  <div
                    className="relative group"
                    onClick={handleDropdownToggle}
                  >
                    <Link
                      to="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 group"
                    >
                      Knowledge Base
                    </Link>
                    <div className="absolute z-10 hidden mt-2 space-y-2 bg-white border rounded-md shadow-lg">
                      <Link
                        to="/blog"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/aricles"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Articles
                      </Link>
                      <Link
                        to="faqs"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        FAQ's
                      </Link>
                      <Link
                        to="/faqvideoseries"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        FAQ Video Series
                      </Link>
                    </div>
                  </div>
                  {/* <Link
                    to="/user/view-lawyer"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    View Lawyers
                  </Link> */}
                  <Link
                    to="/join-room"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Join Meeting
                  </Link>
                  <Link
                    to="/user/legaldocuments"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Legal Documents
                  </Link>
                  <Link
                    to="/user/subscriptionbox/pricing"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Subscription Box
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="/logout"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default UserNav;
