import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1A3A5F] to-[#06274C] text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">PhishDetect</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/login" className="hover:text-blue-300 transition">
            Login
          </Link>
          <Link to="/about" className="hover:text-blue-300 transition">
            About
          </Link>
          <Link to="/profile" className="hover:text-blue-300 transition">
            Profile
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4">
          <Link to="/login" className="block hover:text-blue-300 transition">
            Login
          </Link>
          <Link to="/about" className="block hover:text-blue-300 transition">
            About
          </Link>
          <Link to="/profile" className="block hover:text-blue-300 transition">
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
