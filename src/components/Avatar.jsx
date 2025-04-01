import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  const [open, setOpen] = useState(false);

  // Sample user data
  const user = {
    accountNumber: "1234567890",
    accountLevel: "Gold",
    fullName: "John Doe",
    mobileNumber: "+1234567890",
    nickname: "JDoe",
    gender: "Male",
    dateOfBirth: "01/01/1990",
    email: "john.doe@example.com",
    address: "123 Main Street, City, Country",
    picture: "https://via.placeholder.com/150", // Replace with user's image
  };

  return (
    <>
      {/* Profile Icon */}
      <div
        className="cursor-pointer p-4 rounded-full bg-white shadow-lg"
        onClick={() => setOpen(true)}
      >
        <FaUserCircle className="text-2xl text-[#1a677b]" />
      </div>

      {/* User Profile Drawer */}
      <Drawer
        title="User Profile"
        placement="bottom"
        closable={true}
        onClose={() => setOpen(false)}
        open={open}
        height="100vh"
        className="md:hidden"
        style={{
          width: '100%', // Full width on mobile
          maxWidth: '500px', // Limit the width on desktop to 500px
        }}
      >
        <div className="p-6">
          {/* Profile Picture */}
          <div className="text-center mb-6">
            <img
              src={user.picture}
              alt="User Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
            />
          </div>

          {/* User Info */}
          <div className="space-y-6">
            {/* Account Number */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600">Account Number:</label>
              <p className="text-xl text-gray-600">{user.accountNumber}</p>
            </div>

            {/* Account Level */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600">Account Level:</label>
              <p className="text-xl text-gray-600">{user.accountLevel}</p>
            </div>

            {/* Full Name */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600">Full Name:</label>
              <p className="text-2xl font-bold">{user.fullName}</p>
            </div>

            {/* Mobile Number */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600">Mobile Number:</label>
              <p className="text-xl text-gray-600">{user.mobileNumber}</p>
            </div>

            {/* Nickname */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600">Nickname:</label>
              <p className="text-xl text-gray-600">{user.nickname}</p>
            </div>

            {/* Gender */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600">Gender:</label>
              <p className="text-xl text-gray-600">{user.gender}</p>
            </div>

            {/* Date of Birth */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600">Date of Birth:</label>
              <p className="text-xl text-gray-600">{user.dateOfBirth}</p>
            </div>

            {/* Email */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600">Email:</label>
              <p className="text-xl text-gray-600">{user.email}</p>
            </div>

            {/* Address */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600">Address:</label>
              <p className="text-xl text-gray-600">{user.address}</p>
            </div>
          </div>

          {/* Close Button */}
          <Button
            className="mt-6 w-full bg-red-500 text-white"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default UserProfile;
