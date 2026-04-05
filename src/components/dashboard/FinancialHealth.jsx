import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck } from 'lucide-react';

const FinancialHealth = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
          <Activity size={20} />
        </div>
        <div className="bg-blue-50 px-2 py-1 rounded-lg flex items-center gap-1">
          <ShieldCheck size={12} className="text-blue-600" />
          <span className="text-[10px] font-bold text-blue-600 uppercase">Secure</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-base font-bold text-slate-800">Financial Health</h4>
        <p className="text-xs text-slate-400 font-medium">Score based on spending</p>
      </div>

      <div className="flex items-end gap-2 mb-2">
        <h2 className="text-3xl font-black text-slate-800">82</h2>
        <span className="text-sm font-bold text-emerald-500 mb-1">/ 100</span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
        Your score is <span className="text-emerald-600 font-bold">Excellent</span>. You've saved 15% more than last month.
      </p>
    </motion.div>
  );
};

export default FinancialHealth;