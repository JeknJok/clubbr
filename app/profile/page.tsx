// pages/profile.tsx
"use client"
import React from "react";
import BottomNav from "../components/NavBar";
import { useQRCode } from "next-qrcode";

const Profile = () => {
 
  // Simulated user data, add more or take from api
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "2024-01-15",
  };

  const { Canvas } = useQRCode();

  return (
    <main className="p-6 flex flex-col items-center text-center min-h-screen pb-16">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="p-6 border rounded-md bg-black shadow-md w-full sm:w-96">
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg"><strong>Email:</strong> {user.email}</p>
        <p className="text-lg"><strong>Joined:</strong> {user.joined}</p>
        <div className="p-6 flex flex-col items-center text-center min-h-screen pb-16x"> 

          <p className="text-sm mt-2">Scan to share profile</p>
          <Canvas
          text={JSON.stringify(user)}
          options={{
            errorCorrectionLevel: 'M',
            margin: 3,
            scale: 4,
            width: 200,
            color: {
              dark: '#010599FF',
              light: '#FFBF60FF',
            },
          }}
        />
        </div>
      </div>
      <BottomNav />
    </main>
  );
};

export default Profile;
