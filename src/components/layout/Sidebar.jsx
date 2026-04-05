import {
  ArrowLeftRight,
  LayoutDashboard,
  LogOut,
  PieChart,
  Settings,
  Wallet,
  X,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Sidebar = ({ setSidebarOpen }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/" },
    {
      icon: <ArrowLeftRight size={20} />,
      label: "Transactions",
      path: "/transactions"
    },
    { icon: <PieChart size={20} />, label: "Analytics", path: "/analytics" },
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
  ];
  return (
    <aside className="flex flex-col h-full transition colors">
      {/* Section 1: Logo & Close Button */}
      <header className="p-6 border-b border-gray-100  flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-100">
            <Wallet size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Fin<span className="text-indigo-600">Flow</span>
          </h2>
        </div>

        <button
          className="lg:hidden p-1 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={24} />
        </button>
      </header>

      {/* Section 2: Navigation Menu */}
      <nav className="flex-1 px-4 py-8 space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={`flex items-center gap-3 py-3 px-2 rounded-xl cursor-pointer transition-all
                    ${
                      item.active
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 hover:text-indigo-600"
                    }`}
          >
            {item.icon}
            <span className="font-semibold text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Section 3: Dark Mode & Logout  */}
      <footer className="p-4 border-t border-gray-100 dark:border-slate-800 space-y-1">

       {/* ১. Dark Mode Toggle */}
  <div className="flex items-center justify-between px-4 py-2.5 text-slate-500 dark:text-slate-400 hover:bg-gray-100  rounded-xl cursor-pointer transition-all group">
    <div className="flex items-center gap-3">
      <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 transition-colors">
        <span className="text-xs">🌙</span>
      </div>
      <span className="font-semibold text-sm">Dark Mode</span>
    </div>
    {/* Simple Toggle Switch UI */}
    <div className="w-8 h-4.5 bg-gray-200 dark:bg-indigo-600 rounded-full relative p-1 transition-colors">
      <div className="w-2.5 h-2.5 bg-white rounded-full transition-transform dark:translate-x-3.5" />
    </div>
  </div>

  {/* ২. Logout Button (The Classic Essential) */}
  <div className="flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl cursor-pointer transition-all font-semibold text-sm group">
    <div className="p-1.5 rounded-lg group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors">
      <LogOut size={18} />
    </div>
    <span>Logout</span>
  </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
