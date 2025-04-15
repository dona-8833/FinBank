import React, { useState } from "react";

const BalanceDisplay = ({amount}) => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex flex-row-reverse justify-between items-center w-full ">
      {/* Deposit Button */}
      <button className="text-l font-semibold px-5 py-2 rounded-full text-white deposit">
        Deposit
      </button>

      {/* Balance Display (Click to Toggle) */}
      <div className="flex items-center justify-center space-x-1">
        <p className="text-xl font-bold">₦</p>

      <p
        className="text-xl font-bold cursor-pointer select-none"
        onClick={() => setHidden(!hidden)}
        >
        {hidden ? "•••••" : amount}
      </p>
        </div>
    </div>
  );
};

export default BalanceDisplay;
