import "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center pt-20 bg-gray-100">
      <form className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-xl font-bold mb-4 flex justify-center items-center">Check a Link</h1>
        <input
          type="text"
          placeholder="Paste your link here..."
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
      <Footer />
    </>
  );
};

export default Home;
