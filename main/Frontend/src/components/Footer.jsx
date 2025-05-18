import "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A3A5F] to-[#06274C] text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-semibold">PhishDetect</span>
          <span className="text-lg text-blue-300">© 2025</span>
        </div>
        <div className="flex space-x-6 text-lg">
          <a
            href="/socialmedia"
            className="hover:text-blue-300 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="/socialmedia"
            className="hover:text-blue-300 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="/socialmedia"
            className="hover:text-blue-300 transition duration-300"
          >
            Instagram
          </a>
        </div>

        <div className="text-sm text-gray-300">
          <p>All rights reserved. Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer
