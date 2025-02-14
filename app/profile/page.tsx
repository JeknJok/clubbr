// pages/profile.tsx
"use client"
import React, {useState, useEffect} from "react";
import BottomNav from "../components/NavBar";
import { useQRCode } from "next-qrcode";

const Profile = () => {
 
  // Simulated user data, add more or take from api
  const defaultUser= {
    name: "John Doe",
    major: "Computing Science",
    email: "johndoe@example.com",
    phone: "778-123-4567",
    linkedIn:"linkedinprofile.com",
    Pict: "https://www.nicepng.com/png/full/73-730154_open-default-profile-picture-png.png"

  };
  const [user, setUser] = useState(defaultUser);
  const [isEditing, setIsEditing] = useState(false);
  const { Canvas } = useQRCode();

  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);
    localStorage.setItem("userProfile", JSON.stringify(updatedUser)); // Save changes
  };

  return (
    <main className="p-6 flex flex-col items-center text-center min-h-screen pb-24 relative">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
    
    {/* profile pict*/}
      <div className="relative mt-4">
        <img src={user.Pict} alt="Profile" className="w-40 h-40 rounded-full border-4 shadow-lg"/>
      </div>
    
      {/* profile*/}
      <div className="text-center mt-4 w-full max-w-xs">
        {isEditing ? (
          <div className="flex flex-col gap-2">
           <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="border rounded p-1 text-sm text-center"
            />
            <input
              type="text"
              name="major"
              value={user.major}
              onChange={handleChange}
              className="border rounded p-1 text-sm text-center"
            />
         </div>
      ) : (
          <>
          <p className="text-lg text-2x1 font-semibold"><strong> {user.name} </strong> </p>
          <p className="text-sm text-gray-400"> {user.major}</p>
          </>
          )
        }
      </div>

      <div className="mt-6">
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
        
        <div className="mt-4 w-full max-w-xs">
          <p className="text-sm font-medium mb-2"> Contacts: </p>
          
          {isEditing ? (
          <div className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="border rounded p-1 text-sm text-center w-full"
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="border rounded p-1 text-sm text-center w-full"
            />
            <input
              type="text"
              name="linkedIn"
              value={user.linkedIn}
              onChange={handleChange}
              className="border rounded p-1 text-sm text-center w-full"
            />
          </div>
        ) : (
          <>
          <p className= "text-sm">Email: {user.email}</p>
          <p className= "text-sm">Phone: {user.phone}</p>
          <p className= "text-sm">LinkedIn: <a href= {user.linkedIn} target = "_blank" rel= "noopener noreferrer" className="test-blue-600 hover:underline ml-1"> {user.linkedIn} </a></p>
          </>
        )}
        </div>
        <button onClick={() => setIsEditing(!isEditing)}
        className=" mt-4 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"> {isEditing ? "Save" : "Edit" } </button>
      <BottomNav />
    </main>
  );
};

export default Profile;
