// pages/profile.tsx
import React from "react";

const Profile = () => {
  // Simulated user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "2024-01-15",
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="p-6 border rounded-md bg-gray-100 shadow-md">
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg"><strong>Email:</strong> {user.email}</p>
        <p className="text-lg"><strong>Joined:</strong> {user.joined}</p>
      </div>
    </main>
  );
};

export default Profile;
