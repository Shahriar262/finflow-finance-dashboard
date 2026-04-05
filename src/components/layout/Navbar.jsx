import React from "react";
import { Bell } from "lucide-react";

const Navbar = ({sidebarOpen, setSidebarOpen}) => {
  return (
    <header className="bg-white flex justify-between items-center p-4">
      <button
        className="text-xl p-2 font-bold lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-[9.5px] md:gap-3">
        <button className="p-2 hover:bg-gray-200 cursor-pointer rounded-full">
          <Bell size={20} />
        </button>{" "}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium border-2 border-white shadow-sm group-hover:scale-105 transition-transform">
            JD
          </div>

          <span className="hidden sm:inline-block text-base font-medium">
            John Doe
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
