import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="dark: bg-[#1C352D] shadow-md px-6 py-3">
      <div className="flex items-center justify-between w-full">
        {/* Title Left */}
        <div className="flex-1 flex items-center">
          <span className="text-xl font-bold text-[#F9F6F3]">
            Library System
          </span>
        </div>
        {/* Nav Links Center */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-[#F9F6F3] hover:text-[#A6B28B] font-medium transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-books"
                className="text-[#F9F6F3] hover:text-[#A6B28B] font-medium transition"
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                to="/add-book"
                className="text-[#F9F6F3] hover:text-[#A6B28B] font-medium transition"
              >
                Add Book
              </Link>
            </li>
            <li>
              <Link
                to="/borrow-summery"
                className="text-[#F9F6F3] hover:text-[#A6B28B] font-medium transition"
              >
                Borrow Summery
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        {/* Mode Toggler Right */}
        <div className="flex-1 flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
