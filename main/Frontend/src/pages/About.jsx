import "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1A3A5F] to-[#06274C] flex items-center justify-center">
      <div className="bg-[#0D2438] text-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white">
          About PhishDetect
        </h1>
        <p className="text-gray-300 leading-relaxed mb-4">
          PhishDetect is a robust cybersecurity web application designed to protect users
          from phishing scams and malicious links. By leveraging cutting-edge
          machine learning algorithms, PhishDetect analyzes URLs and provides
          accurate threat assessments, ensuring safer online interactions.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Whether you are an individual or a business, PhishDetect is here to
          safeguard your digital activities. Together, we aim to create a safer
          internet, one link at a time.
        </p>

        <h2 className="text-lg font-semibold mb-4 text-white">
          Features:
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Real-time phishing detection</li>
          <li>Comprehensive link analysis</li>
          <li>History of analyzed links</li>
          <li>User-friendly interface</li>
        </ul>

        <div className="mt-8 bg-yellow-100 border-l-4 border-gray-500 p-4 rounded">
          <p className="text-yellow-700 text-sm">
            <strong>Note:</strong> PhishDetect is currently under development and
            may not provide 100% accurate results. Always verify critical decisions
            using additional tools or trusted methods.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/mainpage")}
            className="bg-white text-black px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-400 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
