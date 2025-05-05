import "react";

const Register = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
              
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
             
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-600 text-white rounded-lg transition`}>
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
