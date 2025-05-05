import "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-500">404</h1>
      <p className="text-lg text-gray-700 mt-4">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFound;
