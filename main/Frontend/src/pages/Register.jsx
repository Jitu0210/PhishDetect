import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData
      )

      const { user } = response.data

      localStorage.setItem("user", JSON.stringify(user));

      alert("Registration Successful!")

      window.location.href = "/profile"
    } catch (error) {
      console.error("Error:", error)
      alert("Registration Failed.")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1A3A5F] to-[#0D2438]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0D2438] text-white p-8 rounded-2xl shadow-2xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        <div className="mb-5">
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#14283C] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#14283C] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#14283C] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
        <p className="mt-4 text-sm text-center text-gray-300">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm
