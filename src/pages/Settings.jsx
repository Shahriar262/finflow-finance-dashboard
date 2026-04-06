import React from "react";
import { useApp } from "../context/AppContext";
import { User, Shield, Bell, Sparkles } from "lucide-react";

const Settings = () => {
  const { role } = useApp();

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 px-4 md:px-0 transition-colors duration-300">
      {/* Header Section */}
      <div className="px-2">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Settings
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-semibold text-sm mt-1">
          Manage your FinFlow profile and account preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Sidebar: User Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm text-center transition-all">
            <div className="w-24 h-24 bg-indigo-600 dark:bg-indigo-500 rounded-[32px] mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-xl shadow-indigo-100 dark:shadow-none">
              JD
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl">John Doe</h3>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-2 ring-1 ring-slate-100 dark:ring-slate-800 px-4 py-1.5 rounded-full inline-block">
              {role} Account
            </p>
          </div>

          <div className="bg-indigo-600 dark:bg-gradient-to-br dark:from-indigo-600 dark:to-slate-900 p-8 rounded-[40px] text-white shadow-xl shadow-indigo-100 dark:shadow-none relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <Sparkles size={80} />
            </div>
            <h4 className="font-bold text-sm mb-2 opacity-80 uppercase tracking-wider">Subscription Plan</h4>
            <p className="text-3xl font-black mb-6">Pro Plan</p>
            <button className="w-full py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl text-[10px] font-black transition-all uppercase tracking-widest active:scale-95">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Right Content: Settings Details */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Profile Section */}
          <section className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm transition-all">
            <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl text-indigo-600 dark:text-indigo-400">
                <User size={20} />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Personal Information</h4>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    readOnly 
                    value="John Doe" 
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    readOnly 
                    value="john.doe@finflow.com" 
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Account Security & Access */}
          <section className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm transition-all">
            <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex items-center gap-3">
              <div className="p-2.5 bg-amber-50 dark:bg-amber-900/20 rounded-2xl text-amber-600 dark:text-amber-400">
                <Shield size={20} />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Security & Access</h4>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800/50 rounded-[24px] border border-transparent dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm text-slate-500 dark:text-slate-400">
                    <Shield size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Access Level</p>
                    <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-500 mt-0.5">Currently using simulated role</p>
                  </div>
                </div>
                <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-colors ${
                  role === 'admin' 
                    ? 'border-emerald-100 dark:border-emerald-900/30 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' 
                    : 'border-amber-100 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
                }`}>
                  {role}
                </span>
              </div>

              <div className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800/50 rounded-[24px] opacity-60 border border-transparent dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm text-slate-500 dark:text-slate-400">
                    <Bell size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Email Notifications</p>
                    <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-500 mt-0.5">Weekly financial reports</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative cursor-not-allowed">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-slate-400 rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Settings;