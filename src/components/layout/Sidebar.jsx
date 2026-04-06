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
      path: "/transactions",
    },
    { icon: <PieChart size={20} />, label: "Analytics", path: "/analytics" },
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="flex flex-col h-full bg-white dark:bg-slate-900 transition-colors border-r border-gray-100 dark:border-slate-800">
      {/* Section 1: Logo & Close Button */}
      <header className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-100 dark:shadow-none">
            <Wallet size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Fin<span className="text-indigo-600">Flow</span>
          </h2>
        </div>

        <button
          className="lg:hidden p-1 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
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
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 font-semibold text-sm ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout */}
      <footer className="p-4 border-t border-gray-100 dark:border-slate-800 space-y-1">
        <div className="flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl cursor-pointer transition-all font-semibold text-sm group">
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