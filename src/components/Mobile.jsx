import React, { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { IoCardOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState(null); // State to track active icon

  const handleMouseEnter = (icon) => {
    setActiveIcon(icon);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };

  return (
    <div className="w-full md:hidden bg-white py-3 px-4 grid grid-cols-5 gap-4 text-gray-600 text-2xl place-items-center fixed bottom-0">
      <div
        className="p-4 mobile rounded-2xl transition-all duration-300 relative"
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
      >
        <GrHomeRounded />
        {activeIcon === "home" && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-100 transition-all duration-300">
            Home
          </span>
        )}
      </div>

      <div
        className="p-4 mobile rounded-2xl transition-all duration-300 relative"
        onMouseEnter={() => handleMouseEnter("wallet")}
        onMouseLeave={handleMouseLeave}
      >
        <MdOutlineAccountBalanceWallet />
        {activeIcon === "wallet" && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-100 transition-all duration-300">
            Wallet
          </span>
        )}
      </div>

      <div
        className="p-4 mobile rounded-2xl transition-all duration-300 relative"
        onMouseEnter={() => handleMouseEnter("transactions")}
        onMouseLeave={handleMouseLeave}
      >
        <FiDollarSign />
        {activeIcon === "transactions" && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-100 transition-all duration-300">
            Transactions
          </span>
        )}
      </div>

      <div
        className="p-4 mobile rounded-2xl transition-all duration-300 relative"
        onMouseEnter={() => handleMouseEnter("cards")}
        onMouseLeave={handleMouseLeave}
      >
        <IoCardOutline />
        {activeIcon === "cards" && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-100 transition-all duration-300">
            Cards
          </span>
        )}
      </div>

      <div
        className="p-4 mobile rounded-2xl transition-all duration-300 relative"
        onMouseEnter={() => handleMouseEnter("profile")}
        onMouseLeave={handleMouseLeave}
      >
        <FaRegUser />
        {activeIcon === "profile" && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-100 transition-all duration-300">
            Profile
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
