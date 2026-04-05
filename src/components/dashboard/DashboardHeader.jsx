import React from "react";
import { Plus } from "lucide-react";
import { useApp } from "../../context/AppContext";

const DashboardHeader = () => {
  const { role } = useApp();

  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 md:p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          Financial Overview
        </h1>
        <p className="text-slate-500 mt-1 text-sm md:text-base">
          Welcome back! Here's your financial pulse.
        </p>
      </div>

      
      {role === "admin" && (
        <button className="flex items-center gap-2.5 px-6 py-3.5 bg-indigo-600 text-white rounded-2xl text-sm font-semibold shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
          <Plus size={18} strokeWidth={3} />
          Add Transaction
        </button>
      )}
    </header>
  );
};

export default DashboardHeader