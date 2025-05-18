import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#1A3A5F] to-[#06274C] min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center text-white space-y-6 max-w-xl">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            PhishDetect
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Empowering you to identify and prevent phishing attacks with
            cutting-edge cybersecurity solutions.
          </p>
        </div>

        <button
          onClick={() => navigate("/mainpage")}
          className="bg-white text-black py-2 px-5 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-300 transition duration-300"
        >
          Use PhishDetect
        </button>
      </div>
    </div>
  );
};

export default Home;
