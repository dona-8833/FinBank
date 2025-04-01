import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { IoCardOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full md:hidden bg-white py-1 px-4 grid grid-cols-5 gap-4 text-gray-600 text-2xl place-items-center fixed bottom-0 shadow-lg rounded-tl-xl rounded-tr-xl border-t border-gray-200">
      <div className="p-3 mobile rounded-2xl flex flex-col items-center justify-center text-[#145661] hover:text-[#103c47] transition-all duration-300 ease-in-out">
        <GrHomeRounded />
        <span className="text-sm mt-2 font-semibold">Home</span>
      </div>

      <div className="p-3 mobile rounded-2xl flex flex-col items-center justify-center text-[#145661] hover:text-[#103c47] transition-all duration-300 ease-in-out">
        <MdOutlineAccountBalanceWallet />
        <span className="text-sm mt-2 font-semibold">Wallet</span>
      </div>

      <div className="p-4 mobile rounded-full flex flex-col  items-center justify-center  mobilev2 transition-all duration-300 ease-in-out">
        <FiDollarSign />
      </div>

      <div className="p-3 mobile rounded-2xl flex flex-col items-center justify-center text-[#145661] hover:text-[#103c47] transition-all duration-300 ease-in-out">
        <IoCardOutline />
        <span className="text-sm mt-2 font-semibold">Cards</span>
      </div>

      <div className="p-3 mobile rounded-2xl flex flex-col items-center justify-center text-[#145661] hover:text-[#103c47] transition-all duration-300 ease-in-out">
        <FaRegUser />
        <span className="text-sm mt-2 font-semibold">Me</span>
      </div>
    </div>
  );
};

export default Navbar;
