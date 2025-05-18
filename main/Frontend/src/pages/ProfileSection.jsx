import { useState, useEffect } from "react";

const ProfileSection = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored User:", storedUser);
    if (storedUser) {
      setUserDetails(JSON.parse(storedUser))
    }
  }, []);

  if (!userDetails) {
    return (
      <div className="text-center p-6">
        No user data found. Please register first.
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700">Name</h3>
        <p className="mt-1 text-lg text-gray-900">{userDetails.username}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700">Email</h3>
        <p className="mt-1 text-lg text-gray-900">{userDetails.email}</p>
      </div>
    </div>
  );
};

export default ProfileSection
