import React, { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const TransferApp = () => {
  const [isPullUpVisible, setIsPullUpVisible] = useState(false);

  return (
    <div className="relative p-4">
      {/* Button to trigger pull-up menu */}
      <button
        onClick={() => setIsPullUpVisible(true)} // Triggers the pull-up menu
        className="p-4 mobile rounded-full flex mobilev3 flex-col items-center justify-center mobilev2 transition-all duration-300 ease-in-out"
      >
        <TbCurrencyNaira />
      </button>

      {/* Pull-up menu */}
      {isPullUpVisible && (
        <div
          className="fixed bottom-0 left-0 right-0  bg-white rounded-t-3xl shadow-lg"
          style={{ zIndex: 1000 }}
        >
          <div className="relative p-4 flex flex-col items-center justify-center">
            {/* Cancel Button at the top-right */}
            <button
              onClick={() => setIsPullUpVisible(false)} // Close the menu on cancel
              className="absolute top-2 right-2 text-lg text-red-500 hover:bg-[#f1f1f1] p-2 rounded-full"
            >
              X
            </button>

            <NavLink
            to="/transfer/FinBank" 
            onClick={() => setIsPullUpVisible(false)} // Close the menu when an option is clicked
              className="w-full py-2 px-4 text-left text-[#1a677b] hover:bg-[#f1f1f1] mt-5 rounded-b-lg"
            >
              FinBank
            </NavLink>
            <NavLink
to="/transfer/OtherBank"
              onClick={() => setIsPullUpVisible(false)} // Close the menu when an option is clicked
              className="w-full py-2 px-4 text-left text-[#1a677b] hover:bg-[#f1f1f1] rounded-b-lg"
            >
              Other Bank
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferApp;
