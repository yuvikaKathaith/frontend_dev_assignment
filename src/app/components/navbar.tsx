"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="border-gray-200 sticky top-0 z-50 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width={100}
            height={100}
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
            loading="lazy"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden 
          hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 
          rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row 
          md:mt-0 md:border-0 text-white"
          >
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm 
                md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Our Workers
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm 
                hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                md:p-0 md:w-auto"
              >
                Dropdown
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 z-10 font-normal divide-y divide-gray-100 
                rounded-lg shadow-sm w-44"
                >
                  <ul className="py-2 text-sm text-white">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 bg-gray-900 hover:text-blue-700"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-white bg-gray-900 hover:text-blue-700"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 bg-gray-900 text-white hover:text-blue-700"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-white bg-gray-900 hover:text-blue-700"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
