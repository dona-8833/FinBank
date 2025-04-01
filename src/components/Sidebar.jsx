import React from "react";
import { CiDollar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { IoMdHelpCircle } from "react-icons/io";
import { IoCard, IoCardOutline, IoSettingsSharp } from "react-icons/io5";
import { MdBroadcastOnHome, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { TfiDashboard } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
    {/* // laptop nav */}
    <div className=" md:p-5 w-full bg-white shadow-lg md:w-[19rem] fixed bottom-0 h-15 md:h-full ">
      <h1
        style={{}}
        className="pb-3 text-[25px] font-bold text-green-900 hidden md:block"
        >
        FinBank
      </h1>
      <div>
        <p className=" hidden md:block font-bold text-gray-300">Main Menu</p>

        <div className="flex flex-col space-y-2 mt-5">
          <span className="text-gray-400 font-bold  p-4 mobile rounded-2xl transition-all duration-300   space-x-3 hidden md:flex">
            
            <TfiDashboard className="text-2xl font-bold" /> <p> Dashboard</p>
          </span>
          <span className="text-gray-400 text-l p-4 mobile rounded-2xl transition-all duration-300 font-bold   space-x-3 hidden md:flex">
            
            <MdOutlineAccountBalanceWallet className="text-2xl font-bold" />
            <p> Fund Transfer</p>
          </span>
          <span className="text-gray-400 text-l font-bold  p-4 mobile rounded-2xl transition-all duration-300   space-x-3 hidden md:flex">
        
            <IoCard className="text-2xl font-bold" /> <p> Accounts</p>
          </span>
          <span className="text-gray-400 text-l p-4 mobile rounded-2xl transition-all duration-300 font-bold  space-x-3 hidden md:flex ">
    
            <CiDollar className="text-2xl font-bold" /> <p> Transactions</p>
          </span>
        </div>
      </div>
      <div>
                <p className="mt-[15px] hidden md:block font-bold text-gray-300">Others</p>

                <div className="mt-[20px] flex flex-col gap-3">
                    <div className=" text-gray-400 text-l font-bold  p-4 mobile rounded-2xl transition-all duration-300  hidden md:flex space-x-3"> <IoSettingsSharp className="text-2xl font-bold"  /> <p> Settings</p> </div>
                    <div className=" text-gray-400 text-l font-bold  p-4 mobile rounded-2xl transition-all duration-300  hidden md:flex space-x-3"> <IoMdHelpCircle  className="text-2xl font-bold" /> <p> Help Center</p> </div>
                </div>
        </div>

    </div>
    {/* // mobile nav */}
    <div className="w-full md:hidden bg-white py-3 px-4 grid grid-cols-5 gap-4 text-gray-600 text-2xl place-items-center fixed bottom-0">
  <div className="p-4 mobile rounded-2xl transition-all duration-300 relative group">
    <GrHomeRounded />
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
      Home
    </span>
  </div>
  <div className="p-4 mobile rounded-2xl transition-all duration-300 relative group">
    <MdOutlineAccountBalanceWallet />
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
      Wallet
    </span>
  </div>
  <div className="p-4 mobile rounded-2xl transition-all duration-300 relative group">
    <FiDollarSign />
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
      Transactions
    </span>
  </div>
  <div className="p-4 mobile rounded-2xl transition-all duration-300 relative group">
    <IoCardOutline />
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
      Cards
    </span>
  </div>
  <div className="p-4 mobile rounded-2xl transition-all duration-300 relative group">
    <FaRegUser />
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#145661] text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
      Profile
    </span>
  </div>
  



</div>



    </>

  );
}

export default Sidebar;
