import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function TransferPage() {
  return (
    
    <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:py-12 sm:px-6 lg:px-8 dark:bg-gray-950 mb-10">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 md:space-y-10 dark:bg-gray-900 dark:text-gray-200">
        {/* Header */}
        <div className="text-center dark:text-gray-200">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-200">
            Transfer Funds
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-600">
            Send money securely with ease
          </p>
        </div>

        {/* Transfer Type Selection */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Select Transfer Type
          </h2>
          <div className="flex flex-col items-center justify-center sm:flex-row gap-3 sm:gap-6">
            {/* Link to Internal Transfer */}
            <NavLink
              to="FinBank"
              className={({ isActive }) => `py-2 sm:py-3 px-4 sm:px-6 border rounded-lg text-sm sm:text-base font-medium transition duration-150 ${
                isActive 
                ? "bg-[#1a677b] text-white border-[#1a677b]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              FinBank
            </NavLink>
            <NavLink
              to="OtherBank"
              className={({ isActive }) => `py-2 sm:py-3 px-4 sm:px-6 border rounded-lg text-sm sm:text-base font-medium transition duration-150 ${
                isActive 
                ? "bg-[#1a677b] text-white border-[#1a677b]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              OtherBank
            </NavLink>

            {/* Link to External Transfer */}

          </div>
        </div>

        {/* Render the selected transfer type */}
        <Outlet />
      </div>
    </div>
  );
}

export default TransferPage;
