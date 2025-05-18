import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A3A5F] to-[#06274C] text-white p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">PhishDetect</h1>
        <div className="flex space-x-6">
          <Link
            to="/login"
            className="text-lg font-medium hover:text-blue-300 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium hover:text-blue-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="text-lg font-medium hover:text-blue-300 transition duration-300"
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
