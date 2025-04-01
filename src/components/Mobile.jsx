import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { IoCardOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full md:hidden bg-white py-3 px-4 grid grid-cols-5 gap-4 text-gray-600 text-2xl place-items-center fixed bottom-0">
      <div className="p-4 mobile rounded-2xl flex flex-col items-center">
        <GrHomeRounded />
        <span className="text-sm text-[#145661]">Home</span>
      </div>

      <div className="p-4 mobile rounded-2xl flex flex-col items-center">
        <MdOutlineAccountBalanceWallet />
        <span className="text-sm text-[#145661]">Wallet</span>
      </div>

      <div className="p-4 mobile rounded-2xl flex flex-col items-center">
        <FiDollarSign />
        <span className="text-sm text-[#145661]">Transactions</span>
      </div>

      <div className="p-4 mobile rounded-2xl flex flex-col items-center">
        <IoCardOutline />
        <span className="text-sm text-[#145661]">Cards</span>
      </div>

      <div className="p-4 mobile rounded-2xl flex flex-col items-center">
        <FaRegUser />
        <span className="text-sm text-[#145661]">Me</span>
      </div>
    </div>
  );
};

export default Navbar;
