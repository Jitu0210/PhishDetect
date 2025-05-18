import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://phishdetectbackend-1.onrender.com/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json()
        alert("Login successful! Welcome, " + result.username);
      } else {
        const error = await response.json();
        alert("Login failed: " + error.message)
      }
    } catch (error) {
      console.error("Error during login:", error)
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A3A5F] to-[#0D2438]">
      <div className="w-full max-w-lg bg-[#0D2438] rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          Login to PhishDetect
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-6 bg-white text-black font-semibold rounded-lg transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex justify-center mt-5 text-sm">
          <p className="text-gray-400">
            Continue with{" "}
            <a href="/google-login" className="text-white hover:underline">
              Google Login
            </a>
          </p>
        </div>

        <p className="mt-5 text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <a href="/register" className="text-white hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage
