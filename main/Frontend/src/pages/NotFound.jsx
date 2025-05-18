import "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1A3A5F] to-[#0D2438]">
      <h1 className="text-9xl font-bold text-blue-500">404</h1>
      <p className="text-lg text-gray-300 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFound;
