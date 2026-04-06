import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Sidebar */}
      <div
        className={`bg-white dark:bg-slate-900 w-64 border-r border-gray-200 dark:border-slate-800 transition-all duration-300
      fixed inset-y-0 left-0 z-50 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:static`}
      >
        <Sidebar setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Dashboard Navbar */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <div className="p-4 md:p-6 lg:p-10 max-w-[1600px] mx-auto w-full min-w-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;