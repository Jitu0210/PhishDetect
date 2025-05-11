import { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const MainPage = () => {

  const [link, setLink] = useState("");

  const handleLink = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:8000/api/v1/link/check-link", {
        url: link, 
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center bg-gray-200 p-6 mt-4 mx-6 rounded-md">
        <form onSubmit={handleLink}>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            placeholder="Enter your link here..."
            className="rounded-md border border-black p-2"
          />
          <button type="submit" className="bg-black rounded-md ml-5 p-2 text-white">
            Check
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
