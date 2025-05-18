import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [link, setLink] = useState("")

  const navigate = useNavigate()

  const handleLink = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/link/check-link",
        {
          url: link,
        }
      );
      console.log("Response:", response.data)
    } catch (error) {
      console.error("Error:", error.response?.data || error.message)
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#1A3A5F] to-[#06274C] min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center p-10 bg-gradient-to-r from-[#1A3A5F] to-[#06274C]">
        <div className="bg-[#0A1C34] p-12 rounded-xl shadow-2xl w-full max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Cybersecurity Link Validation
          </h2>
          <p className="text-lg text-center text-gray-300 mb-8">
            Validate your link and ensure it is secure. Paste your link below to
            begin.
          </p>
          <form onSubmit={handleLink} className="space-y-6">
            <div className="relative">
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="url"
                placeholder="Paste your link here..."
                className="w-full p-4 border border-transparent bg-[#0A1C34] text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <button
                type="submit"
                //  onClick={()=>navigate("/linkresult")}
                className="w-full py-3 px-4 bg-blue-700 text-white rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Check Link
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage
