import "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gradient-to-r from-[#1A3A5F] to-[#06274C] min-h-screen flex items-center justify-center">
      <div className="flex items-center space-x-10 text-white px-6">
        <div className="space-y-4 max-w-lg">
          <h1 className="text-5xl font-extrabold">PhishDetect</h1>
          <p className="text-lg text-gray-300">
            Empowering you to identify and prevent phishing attacks with
            cutting-edge cybersecurity solutions.
          </p>
        </div>

        <button
          onClick={() => navigate("/mainpage")}
          className="bg-white text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-400 transition duration-300"
        >
          Use PhishDetect
        </button>
      </div>
    </div>
  );
};

export default Home
