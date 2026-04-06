import React from "react";
import { useApp } from "../context/AppContext";
import InsightsGrid from "../components/analytics/InsightsGrid";
import SpendingChart from "../components/analytics/SpendingChart";
import { TrendingUp, Target, ArrowUpRight, BarChart3, Lock, AlertCircle } from "lucide-react";

const Analytics = () => {
  
  const { role } = useApp();

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-4 md:p-6 lg:p-10 pb-20 font-sans">
      
      {role === 'viewer' && (
        <div className="flex items-center justify-between gap-4 p-4 bg-amber-50 border border-amber-100 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 text-amber-600 rounded-xl">
              <AlertCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-900">Viewer Mode Enabled</p>
              <p className="text-xs text-amber-700/80 tracking-tight">
                Read-only access: You cannot modify data or settings in this mode.
              </p>
            </div>
          </div>
          <Lock size={16} className="text-amber-400 hidden sm:block" />
        </div>
      )}

      {/* 2. Header Section */}
      <div className="flex flex-col gap-2 border-b border-slate-100 pb-6">
        <div className="flex items-center gap-2 text-indigo-600 mb-1">
          <BarChart3 size={20} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Financial Intelligence</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Analytics Overview
        </h2>
      </div>

      {/* 3. Insights Grid */}
      <div className="w-full">
        <InsightsGrid />
      </div>

      {/* 4. Main Data Visualization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Left Column: Spending Patterns Chart */}
        <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-extrabold text-slate-800">Spending Patterns</h3>
            
            {/* Show Edit button only for Admin role */}
            {role === 'admin' ? (
              <button className="text-[10px] font-black uppercase text-indigo-600 hover:underline">Edit Goals</button>
            ) : (
              <span className="text-[10px] font-black uppercase text-slate-300 flex items-center gap-1 cursor-not-allowed">
                <Lock size={10} /> Read Only
              </span>
            )}
          </div>
          
          {/* Chart Component Area */}
          <div className="w-full h-[350px] md:h-[400px]">
            <SpendingChart />
          </div>
        </div>

        {/* Right Column: Savings & Goal Cards */}
        <div className="lg:col-span-1 space-y-8 flex flex-col">
          
          {/* Net Savings Performance Card */}
          <div className="bg-indigo-600 p-8 rounded-[40px] text-white shadow-2xl shadow-indigo-100 relative overflow-hidden flex-1 flex flex-col justify-between group">
            {/* Decorative background element */}
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            
            <div>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-lg font-bold opacity-80">Net Savings Rate</h4>
              <p className="text-5xl font-black tracking-tighter mt-2">18.5%</p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs font-medium text-indigo-100 italic">
                {role === 'admin' ? "💡 High performance detected in Q1." : "🔒 Upgrade to Admin for full analytics."}
              </p>
            </div>
          </div>

          {/* Savings Goal Progress */}
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative">
            {/* Visual lock icon for Viewers */}
            {role === 'viewer' && (
              <div className="absolute top-6 right-6 text-slate-300">
                <Lock size={14} />
              </div>
            )}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                <Target size={22} />
              </div>
              <h4 className="font-bold text-slate-800">Savings Goal</h4>
            </div>
            
            <div className="space-y-5 text-center">
              {/* Progress Bar Container */}
              <div className="w-full h-4 bg-slate-50 rounded-full overflow-hidden p-1 shadow-inner">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-1000 shadow-lg" 
                  style={{ width: '65%' }} 
                />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress: 65% Collected</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Analytics;