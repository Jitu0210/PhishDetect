import "react";

const GoogleLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1A3A5F] to-[#0D2438]">
      <div className="max-w-md w-full bg-[#0D2438] text-white shadow-2xl rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-extrabold mb-6">Google Login</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          We are working on implementing Google OAuth integration. This feature will be available soon! Stay tuned for updates.
        </p>
        <button
          className="w-full py-3 px-6 bg-white text-black font-semibold rounded-lg cursor-not-allowed"
          disabled
        >
          Login with Google (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin
