import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { useDarkMode } from "../context/ThemeContext";

const UserProfile = ({userData}) => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode(); // Get darkMode from context

  // Sample user data


  return (
    <>
      {/* Profile Icon */}
      <div
        className="cursor-pointer p-3 rounded-full bg-white shadow-lg dark:bg-gray-800 dark:shadow-2xl"
        onClick={() => setOpen(true)}
      >
        <FaUserCircle className="text-2xl text-[#1a677b]" />
      </div>

      {/* User Profile Drawer */}
      <Drawer
        title={<span className={darkMode ? "text-white" : "text-gray-800"}>User Profile</span>} // Title color changes based on darkMode
        placement="bottom"
        closable={true}
        onClose={() => setOpen(false)}
        open={open}
        height="100vh"
        className="md:hidden"
        style={{
          width: "100%", // Full width on mobile
          maxWidth: "500px", // Limit width on desktop
          backgroundColor: darkMode ? "#2d3748" : "#fff", // Dark mode background
        }}
      >
        <div className="p-6">
          {/* Profile Picture */}
          <div className="text-center mb-6">
            <img
              src={userData.picture}
              alt="User Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
            />
          </div>

          {/* User Info */}
          <div className="space-y-6">
            {/* Account Number */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600 dark:text-gray-300">Account Number:</label>
              <p className="text-xl text-gray-600 dark:text-gray-300">{userData.accountNumber}</p>
            </div>

            {/* Account Level */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600 dark:text-gray-300">Account Level:</label>
              <p className="text-xl text-gray-600 dark:text-gray-300">{userData.vip}</p>
            </div>

            {/* Full Name */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600 dark:text-gray-300">Full Name:</label>
              <p className="text-2xl font-bold text-gray-600 dark:text-white">{userData.firstName + " " +userData.lastName}</p>
            </div>

            {/* Mobile Number */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600 dark:text-gray-300">Mobile Number:</label>
              <p className="text-xl text-gray-600 dark:text-gray-300">{userData.phoneNumber}</p>
            </div>

            {/* Nickname */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600 dark:text-gray-300">Nickname:</label>
              <p className="text-xl text-gray-600 dark:text-gray-300">{userData.nickname}</p>
            </div>

            {/* Gender */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600 dark:text-gray-300">Gender:</label>
              <p className="text-xl text-gray-600 dark:text-gray-300">{userData.gender}</p>
            </div>

            {/* Date of Birth */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600 dark:text-gray-300">Date of Birth:</label>
              <p className="text-xl text-gray-600 dark:text-gray-300">{userData.dob}</p>
            </div>

            {/* Email */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600 dark:text-gray-300">Email:</label>
              <p className="text-xl text-gray-600 dark:text-gray-300">{userData.email}</p>
            </div>

            {/* Address */}
            <div className="flex justify-between items-center">
              <label className="text-lg text-gray-600 dark:text-gray-300">Address:</label>
              <p className="text-xl text-gray-600 dark:text-gray-300">{userData.address}</p>
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
