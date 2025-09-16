import { Link } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { ModeToggle } from "../mode-toggle";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#D8E9A8] border-gray-200 dark:bg-[#191A19] dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Nav icon */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/nav-logo.png" className="h-12" alt="Flowbite Logo" />
            <span className="self-center  pb-2 text-2xl font-semibold whitespace-nowrap dark:text-[#4E9F3D]">
              Aura Books
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <IoIosMenu className="text-5xl" />
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#D8E9A8] dark:bg-[#191A19] md:dark:bg-[#191A19] dark:border-gray-700">
              {/*  All Books */}
              <li>
                <Link
                  to="/all-books"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#191A19] md:p-0 md:dark:text-[#D8E9A8]   dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  All Books
                </Link>
              </li>

              {/* Add Books */}
              <li>
                <Link
                  to="/add-book"
                  className="block py-2 px-3 text-[#191A19] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#1E5128] md:p-0 dark:text-[#D8E9A8] md:dark:hover:text-[#4E9F3D] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Add Book
                </Link>
              </li>
              {/* Borrow Summary */}
              <li>
                <Link
                  to="/borrow-summery"
                  className="block py-2 px-3 text-[#191A19] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#1E5128] md:p-0 dark:text-[#D8E9A8] md:dark:hover:text-[#4E9F3D] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Borrow Summary
                </Link>
              </li>

              <ModeToggle />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
