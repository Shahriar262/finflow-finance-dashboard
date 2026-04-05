import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white w-64 border-r border-gray-200 transition-all duration-300
      fixed inset-y-0 left-0 z-50 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:static`}
      >
        <Sidebar setSidebarOpen={setSidebarOpen} />
        
      </div>

      {/* Dashboard Navbar */}

      <div className="flex-1 flex flex-col ">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">{/* <Outlet /> */}</main>
      </div>
    </div>
  );
};

export default Layout;
