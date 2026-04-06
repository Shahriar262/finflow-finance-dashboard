import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, ShieldCheck, ChevronDown, Moon, Sun, User, CheckCircle2 } from "lucide-react";
import { useApp } from "../../context/AppContext";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { role, setRole, theme, toggleTheme } = useApp();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center p-4 sticky top-0 z-40 transition-colors duration-300">
      
      {/* Left Section: Menu + Title */}
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-95 transition-transform"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="text-xl">☰</span>
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          FinFlow<span className="text-indigo-600">.</span>
        </h1>
      </div>

      {/* Right Section: Actions + Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        
        {/* Dark Mode Toggle */}
        <button onClick={toggleTheme} className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Bell Icon */}
        <button className="p-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all relative">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 border-2 border-white dark:border-slate-900 rounded-full" />
        </button>

        {/* Profile Section */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2.5 p-1 rounded-2xl transition-all border ${
              isDropdownOpen ? "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700" : "bg-transparent border-transparent"
            }`}
          >
            {/* Avatar */}
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-sm font-black shadow-lg relative shrink-0">
              JD
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-slate-800 ${role === "admin" ? "bg-emerald-500" : "bg-amber-500"}`} />
            </div>

            {/* Name & Role (Desktop only for space management) */}
            <div className="hidden md:flex flex-col items-start leading-none pr-1">
              <span className="text-sm font-black text-slate-900 dark:text-slate-100">John Doe</span>
              <span className={`text-[10px] font-black uppercase tracking-widest mt-1 ${role === 'admin' ? 'text-emerald-600' : 'text-amber-600'}`}>
                {role} Mode
              </span>
            </div>

            {/*  Up-Down Arrow Animation */}
            <motion.div
              animate={{ y: [0, 5, 0] }} 
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="px-1"
            >
              <ChevronDown size={16} className="text-indigo-600 dark:text-indigo-400" strokeWidth={3} />
            </motion.div>
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-52 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[20px] shadow-2xl z-20 py-2 overflow-hidden origin-top-right"
                >
                  <div className="px-4 py-2 border-b border-slate-50 dark:border-slate-700 mb-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Access Control</p>
                  </div>

                  <div className="px-2 space-y-1">
                    <button
                      onClick={() => { setRole("admin"); setIsDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-xs font-bold transition-colors ${role === "admin" ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                    >
                      <span className="flex items-center gap-2"><ShieldCheck size={18} strokeWidth={2.5} /> Admin</span>
                      {role === "admin" && <CheckCircle2 size={16} />}
                    </button>

                    <button
                      onClick={() => { setRole("viewer"); setIsDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-xs font-bold transition-colors ${role === "viewer" ? "bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                    >
                      <span className="flex items-center gap-2"><User size={18} strokeWidth={2.5} /> Viewer</span>
                      {role === "viewer" && <CheckCircle2 size={16} />}
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;