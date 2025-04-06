import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function MainLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen dark:bg-gray-900 ">
      {/* Sidebar - Fixed on Large Screens, Hidden on Mobile */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex flex-col p-4 flex-1 w-full  md:ml-[19rem] bg-gray-100 dark:bg-gray-800 dark:text-white ">
        {/* Header (Always Visible) */}
        <Header />

        {/* Page Content */}
        <div className=" pt-[1rem] md:pt-[rem] min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
