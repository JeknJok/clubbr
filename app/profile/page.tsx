// pages/profile.tsx
import React from "react";
import BottomNav from "../components/NavBar";

const Profile = () => {
  // Simulated user data, add more or take from api
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "2024-01-15",
  };

  return (
    <main className="p-6 flex flex-col items-center text-center min-h-screen pb-16">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="p-6 border rounded-md bg-black shadow-md w-full sm:w-96">
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg"><strong>Email:</strong> {user.email}</p>
        <p className="text-lg"><strong>Joined:</strong> {user.joined}</p>
      </div>
      <BottomNav />
    </main>
  );
};

export default Profile;
