import React, { useState } from "react";
import { Bell, ShieldCheck, ChevronDown, Moon, Sun, User } from "lucide-react";
import { useApp } from "../../context/AppContext";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { role, setRole } = useApp();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useApp();

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center p-4 transition-colors duration-300">
      <button
        className="text-xl p-2 font-bold lg:hidden text-slate-600 dark:text-slate-300"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Dashboard</h1>

      <div className="flex items-center gap-[9.5px] md:gap-3">
        {/* Dark Mode Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 hover:ring-indigo-500/20 transition-all"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Notification Button */}
        <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer rounded-full transition-colors">
          <Bell size={20} />
        </button>

        {/* 🛡️ Role & Profile Dropdown */}
        <div className="relative">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 cursor-pointer group p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all"
          >
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium border-2 border-white dark:border-slate-700 shadow-sm group-hover:scale-105 transition-transform relative shrink-0">
              JD
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white dark:border-slate-800 ${
                  role === "admin" ? "bg-emerald-500" : "bg-amber-500"
                }`}
              />
            </div>

            <div className="hidden sm:flex flex-col items-start -space-y-0.5">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight">
                John Doe
              </span>
              <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400 dark:text-slate-500">
                {role} Mode
              </span>
            </div>

            <ChevronDown
              size={14}
              className={`text-slate-400 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-3 w-44 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-xl z-20 py-2 overflow-hidden animate-in fade-in zoom-in duration-150">
                <p className="px-4 py-2 text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-50 dark:border-slate-700 mb-1">
                  Access Control
                </p>

                <button
                  onClick={() => {
                    setRole("admin");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold transition-colors ${
                    role === "admin"
                      ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  <ShieldCheck size={16} /> Admin
                </button>

                <button
                  onClick={() => {
                    setRole("viewer");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold transition-colors ${
                    role === "viewer"
                      ? "bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  <User size={16} /> Viewer
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;