import React from "react";
import { useApp } from "../context/AppContext";
import { User, Shield, Bell } from "lucide-react";

const Settings = () => {
  const { role } = useApp();

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
      {/* Header Section */}
      <div className="px-2">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Settings</h2>
        <p className="text-slate-500 font-semibold text-sm mt-1">
          Manage your FinFlow profile and account preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Sidebar: User Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm text-center">
            <div className="w-24 h-24 bg-indigo-600 rounded-[32px] mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg shadow-indigo-100">
              JD
            </div>
            <h3 className="font-bold text-slate-900 text-xl">John Doe</h3>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1 ring-1 ring-slate-100 px-3 py-1 rounded-full inline-block">
              {role} Account
            </p>
          </div>

          <div className="bg-indigo-600 p-6 rounded-[32px] text-white shadow-xl shadow-indigo-100">
            <h4 className="font-bold text-sm mb-2 opacity-90">Subscription Plan</h4>
            <p className="text-2xl font-black mb-4">Pro Plan</p>
            <button className="w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl text-xs font-bold transition-all uppercase tracking-widest">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Right Content: Settings Details */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Profile Section */}
          <section className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-50 flex items-center gap-3">
              <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                <User size={18} />
              </div>
              <h4 className="font-bold text-slate-800">Personal Information</h4>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    readOnly 
                    value="John Doe" 
                    className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    readOnly 
                    value="john.doe@finflow.com" 
                    className="w-full px-5 py-3.5 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 outline-none"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Account Security & Access */}
          <section className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-50 flex items-center gap-3">
              <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
                <Shield size={18} />
              </div>
              <h4 className="font-bold text-slate-800">Security & Access</h4>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-500">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Access Level</p>
                    <p className="text-xs text-slate-500">Currently using simulated role</p>
                  </div>
                </div>
                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 ${
                  role === 'admin' 
                    ? 'border-emerald-100 bg-emerald-50 text-emerald-600' 
                    : 'border-amber-100 bg-amber-50 text-amber-600'
                }`}>
                  {role}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl opacity-60">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-500">
                    <Bell size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Email Notifications</p>
                    <p className="text-xs text-slate-500">Receive weekly financial reports</p>
                  </div>
                </div>
                <div className="w-10 h-5 bg-slate-200 rounded-full relative">
                   <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
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