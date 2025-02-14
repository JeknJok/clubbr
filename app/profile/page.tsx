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
    <main className="p-6 flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="p-6 border rounded-md bg-black shadow-md w-full sm:w-96">
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg"><strong>Email:</strong> {user.email}</p>
        <p className="text-lg"><strong>Joined:</strong> {user.joined}</p>
      </div>
    </main>
  );
};

export default Profile;
