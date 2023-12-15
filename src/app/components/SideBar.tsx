import React, { useState } from "react";

const SideBar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <div className={`fixed indset-y-0 left-0 w-64 bg-gray-800 p-4 transition-all transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        Sidebar
      </div>
      <div className="flex-1 overflow-x-hidden overflow-y-auto transition-all">
        <button className="fixed top-4 left-4 text-white cursor-pointer" onClick={toggleSidebar}>
          x
        </button>
      </div>
    </div>
  );
};

export default SideBar;
