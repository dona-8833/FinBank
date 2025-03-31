import React, { useState } from 'react';
import { Badge, Popover } from 'antd';
import { FaBell } from 'react-icons/fa';

const Notification = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      content={
        <div>
          <p className="text-gray-700">You have no new notifications.</p>
          <button 
            onClick={hide} 
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      }
      title="Notifications"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >


            
      <div className="p-4 rounded-2xl shadow bg-white cursor-pointer">
        <FaBell className="text-2xl text-[#1a677b]" />
      </div>
        
        
    </Popover>
  );
};

export default Notification;
