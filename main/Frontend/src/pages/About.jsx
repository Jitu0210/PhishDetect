import "react";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">About PhishDetect</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          PhishDetect is a powerful web application designed to protect users
          from phishing scams and malicious links. By leveraging advanced
          machine learning algorithms, PhishDetect analyzes URLs and provides
          accurate threat assessments to ensure safe browsing experiences.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you are an individual or a business, PhishDetect is here to
          safeguard your digital interactions. Our goal is to create a safer
          internet, one link at a time.
        </p>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Features:</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Real-time phishing detection</li>
            <li>Comprehensive link analysis</li>
            <li>History of analyzed links</li>
            <li>User-friendly interface</li>
          </ul>
        </div>
        <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
          <p className="text-yellow-700 text-sm">
            <strong>Note:</strong> This app is currently under development and
            may not provide 100% accurate results. Please exercise caution and
            use additional tools or verification methods for critical decisions.
          </p>
        </div>
        <div className="mt-6 text-center text-white">
          <button onClick={() => navigate("/")} className="bg-black rounded-lg p-2">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
