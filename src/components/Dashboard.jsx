import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { IoIosAddCircle, IoIosSend } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import BalanceChart from "./ReChart";
import { FaChartPie, FaCreditCard, FaWallet } from "react-icons/fa";
import Togglebal from "./Togglebal";
import { Chip } from "@mui/material";

function Dashboard() {
  const solidColor = {
    backgroundColor: "#1a677b",
  };
  const solidColorText = {
    color: "#1a677b",
  };
  // const textColor = {
  //   backgroundColor: "#dde8ea",
  // };
  const cardColor = {
    backgroundColor: "#307487",
  };
  return (
    <>
      <div className=" grid-cols-1 hidden md:grid  gap-6 p-4 md:p-6 lg:p-7 xl:p-10 2xl:p-12 bg-gray-100 dark:bg-gray-800">
        {/* Debit Card Account Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 dark:bg-gray-800">
          <div className="bg-white p-6 shadow rounded-xl col-span-12 md:col-span-12 lg:col-span-7 dark:bg-gray-800 dark:shadow-2xl">
            <h1 className="font-bold text-xl">Debit Card Account</h1>
            <div className="grid grid-cols-12 gap-10">
              {/* Debit card section */}
              <div className="flex flex-col col-span-10 md:col-span-12 lg:col-span-7 p-4 rounded-lg text-white justify-between">
                <div
                  className="flex flex-col justify-between mb-4 relative overflow-hidden p-6 rounded-2xl"
                  style={solidColor}
                >
                  <div
                    style={cardColor}
                    className="w-full absolute -right-25 -top-4 circle shadow-lg rounded-lg bg-white h-full"
                  ></div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">FinBank</h2>
                    <p className="font-semibold text-xl z-10">Debit</p>
                  </div>
                  <FcSimCardChip className="text-4xl" />
                  <span className="font-bold text-white relative pt-4">
                    <p>4771 6080 1080 7889</p>
                  </span>
                  <span className="flex justify-between text-white relative pt-4">
                    <p>valid Thur 08/25</p>
                    <p className="font-bold text-2xl">Visa</p>
                  </span>
                </div>
              </div>

              {/* Card details */}
              <div className="lg:flex flex-col  items-center justify-center hidden lg:col-span-5 ">
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex items-center justify-center text-2xl text-white dark:bg-gray-800 dark:shadow-2xl">
                  <IoIosAddCircle />
                </div>
                <p style={solidColorText} className="mt-5 font-bold">
                  Add Debit Card
                </p>
              </div>
            </div>
          </div>

          {/* Total Balance Section */}
          <div className="bg-white p-6 shadow rounded-xl col-span-12 md:col-span-12 lg:col-span-5 dark:bg-gray-800 dark:shadow-2xl">
            <div className="p-5 bg-white  space-y-4 dark:bg-gray-800 dark:text-gray-400">
              <p className="text-center text-2xl font-bold">
                Your Total Balance
              </p>
              <h1
                style={solidColorText}
                className="text-4xl mt-3 text-center font-bold"
              >
                ₦80,201.50
              </h1>
              <p className="text-center text-xl font-light text-gray-600 mt-5">
                December 21, 2025 . 02:30PM
              </p>
              <div className="  flex justify-center space-x-5 items-center mt-3 ">
                <span className="p-5 bg-white rounded-lg flex items-center justify-center flex-col shadow-lg dark:bg-gray-800 dark:shadow-2xl">
                  <IoIosSend
                    style={solidColorText}
                    className=" font-bold text-2xl"
                  />
                  <p
                    style={solidColorText}
                    className="font-bold text-center   bottom-1"
                  >
                    Send
                  </p>
                </span>
                <span className=" bg-white p-5 rounded-lg flex items-center justify-center flex-col shadow-lg dark:bg-gray-800 dark:shadow-2xl">
                  <IoAddCircleOutline
                    style={solidColorText}
                    className=" font-bold text-2xl"
                  />
                  <p
                    style={solidColorText}
                    className="font-bold text-center   bottom-1"
                  >
                    TopUp
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Recent Transactions Section */}
          <div
            className="bg-white  shadow rounded-xl col-span-12
         lg:col-span-5 dark:bg-gray-800 dark:shadow-2xl"
          >
            <div className="p-5 bg-white   rounded-lg dark:bg-gray-800 dark:shadow-2xl dark:text-gray-400">
              <span>
                <p className="font-bold pb-10">Recent Transaction</p>
              </span>
              <div className="flex gap-2 flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col">
                      <p className="">Paypal - Received</p>
                      <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                    </div>
                  </div>
                  <Chip label="+₦8,200.00" color="success" variant="outlined" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col">
                      <p className="">Paypal - sent</p>
                      <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                    </div>
                  </div>
                  <Chip label="-₦8,200.00" color="error" variant="outlined" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col">
                    <p className="">Paypal - Received</p>
                    <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                  </div>
                </div>
                <Chip label="+₦8,200.00" color="success" variant="outlined" />

              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col">
                    <p className="">Paypal - sent</p>
                    <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                  </div>
                </div>
                <Chip label="-₦8,200.00" color="error" variant="outlined" />

              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col">
                    <p className="">Paypal - Received</p>
                    <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                  </div>
                </div>
                <Chip label="+₦8,200.00" color="success" variant="outlined" />

              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col">
                    <p className="">Paypal - sent</p>
                    <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                  </div>
                </div>
                <Chip label="-₦8,200.00" color="error" variant="outlined" />

              </div>
            </div>{" "}
            {/* Add transaction list or chart here */}
          </div>
          {/* Expenses Instead Section */}
          <div className="bg-white p-6 shadow rounded-xl col-span-12 lg:col-span-7 dark:bg-gray-800 dark:shadow-2xl">
            {/* Add expense chart or data here */}
            <BalanceChart />
          </div>
        </div>
      </div>

      {/* Mobile View - Responsive Design */}
      {/* // mobile view */}
      <div className="sm:block md:hidden  bg-gray-100 min-h-screen dark:bg-gray-800 text-gray-400">
        {/* Top Section - Balance */}
        <div className="bg-white px-6 py-8 shadow-md rounded-xl flex  flex-col text-black items-center dark:bg-gray-800 dark:text-gray-400 ">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-l font-semibold">Total Balance</h2>
            <p className="text-l text-gray-600 font-light cursor-pointer ml-auto">
              History
            </p>
          </div>
          <div className="flex flex-row-reverse justify-between items-center w-full mt-4">
            <Togglebal />
          </div>
          {/* <FaWallet className="text-3xl " style={solidColorText} /> */}
        </div>

        {/* Debit Card Section */}
        <div className="bg-white p-6 shadow-md rounded-xl mt-4 dark:bg-gray-800 text-gray-400">
          <div className="grid grid-cols-2 items-center justify-between space-x-2 mt-2">
            <p className="p-3 rounded-full mobilev2 text-center "> Send</p>
            <p className="p-3 rounded-full  mobilev2 text-center">Receive</p>
          </div>
        </div>

        {/* Chart Section */}

        {/* Transactions Section */}
        <div className="bg-white p-6 shadow-md w-full rounded-xl mt-4 dark:bg-gray-800 text-gray-400">
          <div className="p-5 bg-white dark:bg-gray-800 dark:text-gray-400 text-black">
            <span>
              <p className="font-bold pb-2">Recent Transaction</p>
            </span>
            <div className="flex gap-2 flex-col">
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col">
                    <p className="">Paypal - Sent</p>
                    <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                  </div>
                </div>
                <Chip label="-₦8,200.00" color="error" variant="outlined" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col">
                    <p className="">Paypal - Received</p>
                    <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                  </div>
                </div>
                <Chip label="+₦8,200.00" color="success" variant="outlined" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col">
                    <p className="">Paypal - sent</p>
                    <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                  </div>
                </div>
                <Chip label="-₦8,200.00" color="error" variant="outlined" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col">
                    <p className="">Paypal - Received</p>
                    <p className="text-gray-400"> 20-12-2025, 08:20AM</p>
                  </div>
                </div>
                <Chip label="+₦8,200.00" color="success" variant="outlined" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 shadow-md mb-10 rounded-xl mt-4 dark:bg-gray-800 text-gray-400">
          <BalanceChart />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
