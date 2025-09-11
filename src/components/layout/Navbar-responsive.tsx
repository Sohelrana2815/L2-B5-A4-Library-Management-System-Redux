import { useState } from "react";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="dark: bg-[#1C352D] shadow-md px-6 py-3">
      <div className="flex items-center justify-between w-full">
        {/* Title Left */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-[#F9F6F3]">
            Library System
          </span>
        </div>

        {/* Desktop Nav Links Center - Hidden on mobile/tablet */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
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
          </ul>
        </div>

        {/* Right side - Mode Toggle and Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Mode Toggle - Always visible */}
          <ModeToggle />
          
          {/* Hamburger Menu Button - Only visible on mobile/tablet */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-[#F9F6F3] hover:text-[#A6B28B] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu - Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-[#A6B28B]/20">
          <ul className="flex flex-col space-y-3 mt-4">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block text-[#F9F6F3] hover:text-[#A6B28B] font-medium transition py-2"
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                to="/add-book"
                onClick={closeMenu}
                className="block text-[#F9F6F3] hover:text-[#A6B28B] font-medium transition py-2"
              >
                Add Book
              </Link>
            </li>
            <li>
              <Link
                to="/borrow-summery"
                onClick={closeMenu}
                className="block text-[#F9F6F3] hover:text-[#A6B28B] font-medium transition py-2"
              >
                Borrow Summery
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
