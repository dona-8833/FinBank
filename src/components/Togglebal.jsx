import React, { useState } from "react";

const BalanceDisplay = () => {
  const [hidden, setHidden] = useState(false);
  const balance = "$5,000"; // You can replace this with dynamic balance data

  return (
    <div className="flex flex-row-reverse justify-between items-center w-full ">
      {/* Deposit Button */}
      <button className="text-l font-semibold px-5 py-2 rounded-full text-white deposit">
        Deposit
      </button>

      {/* Balance Display (Click to Toggle) */}
      <p
        className="text-xl font-bold cursor-pointer select-none"
        onClick={() => setHidden(!hidden)}
      >
        {hidden ? "•••••" : balance}
      </p>
    </div>
  );
};

export default BalanceDisplay;
