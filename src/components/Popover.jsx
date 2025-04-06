import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { FaBell } from 'react-icons/fa';
import { useDarkMode } from '../context/ThemeContext';

const Notification = () => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode(); // Getting darkMode from context

  const hide = () => {
    setOpen(false);
  };

  // Dummy notifications
  const notifications = [
    { id: 1, message: 'Your payment of ₦500 was successful.', time: '2 minutes ago' },
    { id: 2, message: 'You have a new login from a new device.', time: '5 hours ago' },
    { id: 3, message: 'Your account has been upgraded to Gold.', time: '1 day ago' },
    { id: 4, message: 'You have a new transfer request.', time: '3 days ago' },
    { id: 5, message: 'Reminder: Your password will expire in 7 days.', time: '5 days ago' },
  ];

  return (
    <>
      {/* Notification Icon */}
      <div
        className="cursor-pointer p-3 rounded-full bg-white shadow-lg dark:bg-gray-800 dark:shadow-2xl"
        onClick={() => setOpen(true)}
      >
        <FaBell className="text-2xl text-[#1a677b]" />
      </div>

      {/* Notification Drawer */}
      <Drawer
        title={<span className={darkMode ? 'text-white' : 'text-gray-800'}>Notifications</span>} // Change title color
        placement="bottom"
        closable={true}
        onClose={() => setOpen(false)}
        open={open}
        height="100vh"
        className="md:hidden" // Hide drawer on desktop
        style={{
          width: '100%', // Full width on mobile
          maxWidth: '500px', // Limit width on desktop (optional)
          padding: '0', // Remove extra padding
          backgroundColor: darkMode ? '#2d3748' : '#fff', // Dark mode background
        }}
      >
        <div className="p-6">
          {/* Notification List */}
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-700 flex justify-between items-center space-x-4"
              >
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">{notification.message}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Close Button */}
          <Button className="mt-6 w-full bg-red-500 text-white" onClick={hide}>
            Close
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Notification;
